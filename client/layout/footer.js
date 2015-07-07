Session.setDefault("voiceInputText","Waiting...");
Session.setDefault("runningMic",false);

Template.footer.helpers({
   voiceInput:function() {
       return Session.get("voiceInputText");
   } 
});

Template.footer.events({
    'click #voiceInputButton':function(event) {
        navigator.getUserMedia = (navigator.getUserMedia || 
                          navigator.webkitGetUserMedia || 
                          navigator.mozGetUserMedia || 
                          navigator.msGetUserMedia);
        if (navigator.getUserMedia) {
            navigator.getUserMedia(
                {
                   video:false,
                   audio:true
                },        
                function(stream) {
                    audioStream = stream;
                    if (Session.get("runningMic")) {
                        audioStream.stop();
                        Session.set("runningMic",false);
                    }
                    else {
                        Session.set("runningMic",true);
                        
                        $.ajax({
                          url: 'https://api.wit.ai/message?v=20150706',
                          beforeSend:function(xhr) {
                            xhr.sendRequestHeader("Authorization","Bearer H45QGNEGXISKGZ33CRCW3Q6XFBOMM4JC");
                            xhr.sendRequestHeader("Content-Type","audio/mpeg3");
                          },
                          data:stream,
                          dataType: 'binary',
                          method: 'XPOST',
                          success: function(response) {
                              console.log("success!", response.outcomes[0]);
                              Session.set("voiceInputText",response.outcomes[0]._text);
                          }
                        });
                    }
                },
                function(error) { 
                    console.log("something went wrong!");
                }
             );
          }
          else {
             alert('Sorry, the browser you are using doesn\'t support getUserMedia');
             return;
          }
    }
});

Template.footer.rendered = function() {

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
    };
    mic.onaudioend = function () {
        info("Recording stopped, processing started");
    };
    mic.onresult = function (intent, entities) {
        console.log(intent + " " + entities);
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
    // mic.stop();

    function kv(k, v) {
        if (toString.call(v) !== "[object String]") {
            v = JSON.stringify(v);
        }
        return k + "=" + v + "\n";
    }
}