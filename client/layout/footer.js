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
           return "about " + Math.floor(Session.get("inLocation")[2]) + "m away";
       }
   }
});


Template.footer.events({
    'click #currentLocLink':function(event) {
        Session.setPersistent("viewLocation",this._id);  
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
}

