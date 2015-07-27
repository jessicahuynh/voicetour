// Session.setDefault("voiceInputText","Waiting...");
// Session.setDefault("runningMic",false);

// Template.footer.helpers({
//    voiceInput:function() {
//        return Session.get("voiceInputText");
//    } 
// });

Template.footer.helpers({
   inLocation:function() {
       if ($(window).width() > 768) {
           return this.name;
       }
       else {
           return this.nickname;   
       }       
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
           if (Session.get("unit") == "m") {
               return Math.floor(Session.get("inLocation")[2]) + "m away";
           }
           else {
               return Math.round(Math.floor(Session.get("inLocation")[2])*3.28) + "ft away";
           }
       }
   }
});


Template.footer.events({
    'click #currentLocLink':function(event) {
        Session.set("prev",Router.current().route.path());
        Session.setPersistent("viewLocation",this._id);  
    },
    'click #listen':function(event) {
        event.preventDefault();
        
        var msg = new SpeechSynthesisUtterance();
        
        msg.text = Session.get("listenTo");
        console.log(Session.get("listenTo"));
        msg.lang = 'en-US';
        msg.rate = parseFloat(Session.get("rate"));
        
        
        msg.onend = function(e) {
          console.log('Finished in ' + event.elapsedTime + ' seconds.');
        };
        window.speechSynthesis.speak(msg);
        
        // var urlParams = "appId="+"NMDPTRIAL_jhuynh37_brandeis_edu20150715174130"+
        //     "&appKey="+"0577e997323eb999dfebfc826efbe3a796469a473745048dc95945bdf2b721f72e0b8e614947fa2832f6aba1f28e4888d4e2d00c27d499f12ddeae1f95cf16c4"+
        //     "&id="+Session.get("uuid")+
        //     "&ttsLang="+"en-US";

        // $.ajax({
        //    type:"POST",         
        //    url:"http://sandbox.nmdp.nuancemobility.net:443/NMDPTTSCmdServlet/tts?"+urlParams,
        //    data:"Hello! Volen is great!",
        //    headers:{
        //        "Content-Type":"text/plain",
        //        "Accept":"audio-xwav"
        //    }
        // });
    },
    'click .wit-microphone':function(event){
        event.preventDefault();
        
        if (navigator.getUserMedia || 
          navigator.webkitGetUserMedia || 
          navigator.mozGetUserMedia || 
          navigator.msGetUserMedia) {
              mic.connect("ANATOUXNLPGVGPTGWPN7RXQHFYYSPGPP");
          }
        
    },
    'mouseover .wit-microphone':function(event) {
       $(".mic").css("color","#FF3F4E");
    },
    'mouseout .wit-microphone':function(event) {
        if ($(".wit-microphone").hasClass("active")) {
            $(".mic").css("color","#FF3F4E");
        }
        else {
            if ($(window).width() > 768) {
                $(".mic").css("color","#333333");
            }
            else {
                $(".mic").css("color","#eeeeee");
            }
        }
    },
    'click #close-popover':function(event) {
        event.preventDefault();
        $("#speechText").toggle("slow");
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
    startAudio();
    
    if (window.SpeechSynthesisUtterance === undefined) {
        $("#listenBox").css("display","none");
        console.log("no");
    }
    else {
        $("#listenBox").css("display","block");
        console.log("yay");
    }
}

