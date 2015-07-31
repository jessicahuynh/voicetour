var disambiguationChoices = [];
var numAttempts = 0;
var numClarify = 0;

function applyIntent(intent,entities,mic) {
    var r = "";
    if (intent == undefined) {
        numAttempts++;
        switch(numAttempts) {
            case 1: r+="Could you try that again?"; break;
            case 2: r+="Oh dear. Could you say that once more?"; break;
            case 3: r+="I'm sorry, but I haven't been able to understand you. Once more?"; break;
            case 4: r+="Oh dear, I couldn't get that this time either. You can also try 'help' or 'what do you do?' for a list of supported commands."; break;
            default: r+="Make sure your mic is working and either say 'help' or head over to the About page for a list of supported commands."; break;
        }
        $("#result").append("<p>"+r+"</p>");
        Session.set("micResponse",r);
        speak();
    }
    else {
       numAttempts = 0;
       if (intent == "search_for_loc") {
           var searchTerm;
           if (entities["deis_loc"] != undefined) {
               if (entities["deis_loc"].value == "this_loc") {
                   $("#result").append("<p>Looking up this location...</p>");
                   searchTerm = Session.get("inLocation")[0].name;
               }
               else {
                   searchTerm = entities["deis_loc"].body;
                    $("#result").append("<p>Searching for <span class='said'>" + searchTerm +"</span>...</p>");
               }
           }
           else if (entities["location_category"] != undefined) {
              searchTerm = entities["location_category"].body;
                    $("#result").append("<p>Looking for <span class='said'>" + searchTerm +"</span>...</p>");
           }
           
           Session.set("searchTerm",searchTerm);
           Session.set("micResponse","Looking for " +searchTerm);
           speak();
           
           document.getElementById("searchBox").value = Session.get("searchTerm");
            
           $("#searchBox").show("slow");
            
           $("#searchBox").focus();
            
           Router.go('/search');
        }
        else if (intent == "navigate") {
            navigateCommand(entities);
            console.log(entities);
        }
        else if (intent == "app_help") {
           
            r += "<p>So you need <span class='said'>help</span>? Here are some commands you can try:</p><ul>";
            
            r+= "<li>Search for <span class='arg'>science</span></li>";
            r+= "<li>How do I get to <span class='arg'>Admissions</span> from <span class='arg'>here</span>?</li>";
            r+= "<li>Take me to <span class='arg'>the SCC</span></li>";
            r+= "<li>Tell me about <span class='arg'>Volen</span></li>";
            //r+= "<li>When is <span class='arg'>the Faculty Club</span> open?</li>";
            r+= "<li>Start the <span class='arg'>self-guided tour</span></li>";
            r+= "<li>Show me the list of locations</li>";
            r+= "<li>Read this to me</li>"
            //r+= "<li>Open settings and <span class='arg'>switch to U.S. customary units</span></li>";
            r+= "<li>Where am I?</li>";
            //r+= "<li>What's nearby?</li>";
            //r+= "<li>What's happening <span class='arg'>here</span>?</li>";
            
            r+= "</ul>";
            
            $("#result").append(r);
            Session.set("micResponse","Here are some commands you can try.");
            speak();
        }
        else if (intent == "get_current_loc") {
            
            r += "<p>You're currently at <span class='arg'>"+Session.get("inLocation")[0].name+"</span>.</p>";
            r += "<p>Welcome!</p>";
            
            Session.set("micResponse","You're currently at "+Session.get("inLocation")[0].name +"!");
            speak();
            
            $("#result").append(r);
            
            var loc = Locations.findOne({"name":Session.get("inLocation")[0].name});
            Session.set("viewLocation",loc._id);
            Router.go('/viewLocation/'+loc._id);
        }
        else if (intent == "get_info_about_loc") {
            var loc = null;
            if (entities["deis_loc"].value == "this_loc") {
                loc = Locations.findOne({"name":Session.get("inLocation")[0].name});
                console.log(loc);
            }
            else {
                loc = Locations.findOne({"name":entities["deis_loc"].value});
            }
            
            if (loc != undefined && loc != null) {
                r += "<p>"+loc.function+"</p>";
                r += "<p>And here's more info for your perusal.";
                
                Session.set("micResponse",loc.function + "And here's more information for your perusal.");
                speak();
                $("#result").append(r);
                
                Session.set("viewLocation",loc._id);
                Router.go('/viewLocation/'+loc._id);
            }
            else {
                clarifyLoc();
            }
            
        }
        else if (intent == "start_tour") {
            r += "<p>Starting up the <span class='said'>self-guided</span> tour...</p>";
            
            Session.set("micResponse","Starting up the self-guided tour.");
            speak();
            $("#result").append(r);
            
            Router.go('/selfguide');       
        }
        else if (intent == "open_loc_list") {
            r+= "<p>Taking you to the list of locations at Brandeis.</p>"
            
            Session.set("micResponse","Taking you to the list of locations at Brandeis.");
            speak();
            $("#result").append(r);
            
            Router.go('/locationList');
        }
        else if (intent == "read") {
            r+= "<p>Reading.</p>"
            
            $("#listen").trigger("click");
            
            $("#result").append(r);
        }
        else if (intent == "repeat_prev") {
            r+="<p>Once more.</p>"
            
            Session.set("micResponse","Once more: "+Session.get("micResponse"));
            speak();
            
            $("#result").append(r);
        }
    }
    
}

function startAudio() {
    navigator.getUserMedia = (navigator.getUserMedia || 
                          navigator.webkitGetUserMedia || 
                          navigator.mozGetUserMedia || 
                          navigator.msGetUserMedia);
    if (navigator.getUserMedia) {
        mic = new Wit.Microphone(document.getElementById("microphone"));
        
        var info = function (msg) {
            document.getElementById("info").innerHTML = msg;
        };
        var error = function (msg) {
            document.getElementById("error").innerHTML = msg;
        };
        mic.onready = function () {
            info("Microphone is ready to record");
        };
        mic.onaudiostart = function () {
            info("Recording started");
            error("");
           
            $("#speechText").show("slow");
            $("#result").append("<h4>I'm listening! <small>Tap again to stop listening and start processing</small></h4>")
        };
        mic.onaudioend = function () {
            info("Recording stopped, processing started");
        };
        mic.onresult = function (intent, entities) {
            // console.log(intent + " " + entities);
            
            var r = kv("intent", intent);
    
            for (var k in entities) {
                var e = entities[k];
    
                if (!(e instanceof Array)) {
            r += kv(k, e.value);
                } else {
            for (var i = 0; i < e.length; i++) {
              r += kv(k, e[i].value);
            }
                }
            }
    
            document.getElementById("result").innerHTML = "";
            
            applyIntent(intent,entities,mic);
        };
        mic.onerror = function (err) {
            error("Error: " + err);
        };
        mic.onconnecting = function () {
            info("Microphone is connecting");
        };
        mic.ondisconnected = function () {
            info("Microphone is not connected");
        };
    
       
        // mic.start();
        //mic.stop();
    }
}

function kv(k, v) {
    if (toString.call(v) !== "[object String]") {
        v = JSON.stringify(v);
    }
    return k + "=" + v + "\n";
}

function speak() {
    var msg = new SpeechSynthesisUtterance(Session.get("micResponse"));
    msg.rate = parseFloat(Session.get("rate"));
    msg.lang = 'en-US';
    window.speechSynthesis.speak(msg);
}

function clarifyLoc() {
    numClarify += 1;
    
    r = "";   
    switch(numClarify) {
        case 1:r+="I didn't quite get that name. Could you try that again?"; break;
        case 2:r+="I didn't get it this time either. Again?"; break;
        case 3:r+="We seem to be having an issue. Could you try that once more?"; break;
        case 4:r+="We didn't get that this time around either. Remember, you can also look at the list of locations to look at what's on campus."; break;
        default:r+="Sorry, I can't seem to identify what location you're referring to. You can try a search or looking at the list of locations to get where you're going."; break;
    }
    
    Session.set("micResponse",r);
    $("#result").append("<p>"+r+"</p>");
    speak();
}

function disambiguate(entity) {    
    var dis = "";
    var disambiguated = false;
    if (entity == "Shapiro") {
        disambiguationChoices = ["Carl J. Shapiro Science Center","Carl and Ruth Shapiro Admissions Center","Carl and Ruth Shapiro Campus Center","Abraham Shapiro Academic Complex","Shapiro Hall"];
        dis = "Did you mean the <span class='said'>Shapiro Science Center</span>, <span class='said'>Carl and Ruth Shapiro Admissions Center</span>, <span class='said'>Shapiro Campus Center</span>, <span class='said'>Abraham Shapiro Academic Complex</span>, or <span class='said'>Shapiro Hall</span> in Massell Quad?";
        
        Session.set("micResponse","Did you mean the Shapiro Science Center, Carl and Ruth Shapiro Admissions Center, Shapiro Campus CEnter, Abraham Shapiro Academic Complex, or Shapiro Hall in Massell Quad?");
        
        Session.set("disambiguationChoices",disambiguationChoices);
        
         disambiguated = true;
    }
    if (entity == "Rabb") {
        disambiguationChoices = ["The Rabb School of Continuing Studies","Rabb Graduate Center"];
        dis = "Did you mean the <span class='said'>Rabb School of Continuing Studies</span> or <span class='said'>Rabb Graduate Center</span>?";
        
        Session.set("micResponse","Did you mean the Rabb School of Continuing Studies or Rabb Graduate Center?");
        
        Session.set("disambiguationChoices",disambiguationChoices);
        
         disambiguated = true;
    }
   

    if (disambiguated) {
       speak();
       $("#result").append("<p>"+dis+"</p>");
    }
    return disambiguated;
}

function navigateCommand(entities) {
    r = "Navigating to ";
    var rSay = "Navigating to ";
    var disDestination = "";
    if (entities["end"] != undefined) {
       disDestination = disambiguate(entities["end"].value);
       if (!disDestination) {
           // if the location is actually a location
           if (Locations.findOne({"name":entities["end"].value}) != undefined) {
               r += "<span class='said'>"+entities["end"].value+"</span>";
               Session.set("navigateTo",entities["end"].value);
               rSay += entities["end"].value;
               numClarify = 0;
           }
           else {
               clarifyLoc();
           }            
           
           
       }
    }
    else {
       if (entities["deis_loc"] != undefined) {
           console.log(entities["deis_loc"]);
           disDestination = disambiguate(entities["deis_loc"].value);
           if (!disDestination) {
               if (Locations.findOne({"name":entities["deis_loc"].value}) != undefined) {
                   r += "<span class='said'>"+entities["deis_loc"].value+"</span>";
                   Session.set("navigateTo",entities["deis_loc"].value);
                   rSay += entities["end"].value;
                   numClarify = 0;
               }
               else {
                   clarifyLoc();
               }
           }
       }
       else {
           clarifyLoc();
       }
    }
    
    if (entities["start"] != undefined) {
        var disStart = disambiguate(entities["start"].value);
        if (!disStart) {
             if (entities["start"] == "this_loc") {
                 r+= " from <span class='said'>this location</span>";
                 Session.set("navigateFrom","(" + Session.get("currentLocation").x + ", " + Session.get("currentLocation").y + ")");
                 rSay += " from your current location."
                 numClarify = 0;
             }
             else {
                if (Locations.findOne({"name":entities["start"].value}) != undefined) {
                    r += " from <span class='said'>"+entities["start"].value+"</span>";
                    Session.set("navigateFrom",entities["start"].value);
                    rSay += " from " + entities["start"].value;
                    numClarify = 0;
                }
                else {
                    clarifyLoc();
                }
             }                 
        }
    }
    else {
        Session.set("navigateFrom","(" + Session.get("currentLocation").x + ", " + Session.get("currentLocation").y + ")");
    }
    
    if (disDestination || disStart) {
        console.log(disambiguationChoices);        
    }
    else if (rSay != "Navigating to ") {
        numClarify = 0;
        Session.set("micResponse",rSay);
        speak();
        
        $("#result").append("<p>"+r+"...</p>");
        if (Router.current().route.path() == "/navigate") {
            document.getElementById("startpoint").value = Session.get("navigateFrom");
            document.getElementById("endpoint").value = Session.get("navigateTo");
            $("#navform").submit();
        }
        else {
             Router.go('/navigate');
        }  
    }
}