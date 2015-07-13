// Session.setDefault("voiceInputText","Waiting...");
// Session.setDefault("runningMic",false);

// Template.footer.helpers({
//    voiceInput:function() {
//        return Session.get("voiceInputText");
//    } 
// });

Template.footer.helpers({
   inLocation:function() {
       return this.name;
   },
   loc:function() {
       return Locations.findOne({"name":Session.get("inLocation")[0].name});
   },
   inLocationId:function() {
       return this._id;
   },
   inOrNear:function() {
       if (Session.get("inLocation")[1] == "in") {
           return "current location";
       }
       else {
           return "about " + Math.floor(Session.get("inLocation")[2]) + "m away";
       }
   }
});


Template.footer.events({
    'mouseover .wit-microphone':function(event) {
       $(".mic").css("color","#FF3F4E");
    },
    'mouseout .wit-microphone':function(event) {
        if ($(".wit-microphone").hasClass("active")) {
            $(".mic").css("color","#FF3F4E");
        }
        else {
            $(".mic").css("color","#333333");
        }
    }
    // 'click #voiceInputButton':function(event) {
    //     navigator.getUserMedia = (navigator.getUserMedia || 
    //                       navigator.webkitGetUserMedia || 
    //                       navigator.mozGetUserMedia || 
    //                       navigator.msGetUserMedia);
    //     if (navigator.getUserMedia) {
    //         navigator.getUserMedia(
    //             {
    //                video:false,
    //                audio:true
    //             },        
    //             function(stream) {
    //                 audioStream = stream;
    //                 if (Session.get("runningMic")) {
    //                     audioStream.stop();
    //                     Session.set("runningMic",false);
    //                 }
    //                 else {
    //                     Session.set("runningMic",true);
                        
    //                     $.ajax({
    //                       url: 'https://api.wit.ai/message?v=20150706',
    //                       beforeSend:function(xhr) {
    //                         xhr.sendRequestHeader("Authorization","Bearer H45QGNEGXISKGZ33CRCW3Q6XFBOMM4JC");
    //                         xhr.sendRequestHeader("Content-Type","audio/mpeg3");
    //                       },
    //                       data:stream,
    //                       dataType: 'binary',
    //                       method: 'XPOST',
    //                       success: function(response) {
    //                           console.log("success!", response.outcomes[0]);
    //                           Session.set("voiceInputText",response.outcomes[0]._text);
    //                       }
    //                     });
    //                 }
    //             },
    //             function(error) { 
    //                 console.log("something went wrong!");
    //             }
    //          );
    //       }
    //       else {
    //          alert('Sorry, the browser you are using doesn\'t support getUserMedia');
    //          return;
    //       }
    // }
});

Template.footer.rendered = function() {
    navigator.getUserMedia = (navigator.getUserMedia || 
                          navigator.webkitGetUserMedia || 
                          navigator.mozGetUserMedia || 
                          navigator.msGetUserMedia);
    if (navigator.getUserMedia) {
        var mic = new Wit.Microphone(document.getElementById("microphone"));
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
            $("#result").append("<h4>I'm listening!</h4>")
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
    
            document.getElementById("result").innerHTML = r;
            
            applyIntent(intent,entities);
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
    
        mic.connect("ANATOUXNLPGVGPTGWPN7RXQHFYYSPGPP");
        // mic.start();
        mic.stop();
    
        function kv(k, v) {
            if (toString.call(v) !== "[object String]") {
                v = JSON.stringify(v);
            }
            return k + "=" + v + "\n";
        }
    }
}

function applyIntent(intent,entities) {
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
       document.getElementById("searchBox").value = Session.get("searchTerm");
        
       $("#searchBox").show("slow");
        
       $("#searchBox").focus();
        
       Router.go('/search');
       
       // document.getElementById("searchForm").submit(function(event){
        //    event.preventDefault();
        //    return false;
       // });
        
    }
    else if (intent == "navigate") {
        var r = "Navigating to ";
        console.log(entities);
        if (entities["end"] != undefined) {
           r += "<span class='said'>"+entities["end"].body+"</span>";
           Session.set("navigateTo",entities["end"].value);
        }
        else {
            if (entities["deis_loc"] != undefined) {
                 r += "<span class='said'>"+entities["deis_loc"].body+"</span>";
           Session.set("navigateTo",entities["deis_loc"].value);
            }
        }
        if (entities["start"] != undefined) {
            r += " from <span class='said'>"+entities["start"].body+"</span>";
            Session.set("navigateFrom",entities["start"].value);
        }
        
        $("#result").append("<p>"+r+"...</p>");
        
        Router.go('/navigate');
    }
}