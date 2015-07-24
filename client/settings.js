Session.setDefault("unit","m");
Session.setDefault("rate", 0.8);
Session.setDefault("readingmode",false);


Template.settings.rendered = function() {
	Session.set("pageTitle","Settings");
	Session.set("listenTo","Change settings for Discover Deis here.");
	
	$(".switch").bootstrapSwitch();
	
	if (window.SpeechSynthesisUtterance === undefined) {
			  $("#voiceSettingsDiv").hide();
		  }
	
	$("#unit").on('switchChange.bootstrapSwitch', function(event, data) {
		if ($("#unit").is(":checked")) {
			Session.setPersistent("unit","m");
		}
		else {
			Session.setPersistent("unit","ft");
		}
	});


	// $('.slider').slider();
	// $('#rate').slider()
	//   .on('slide', function(value){
	//   	console.log(value);
	//     Session.setPersistent("rate",value);
	// });


	$("#readingmode").on('switchChange.bootstrapSwitch',function(event,data) {
		Session.setPersistent("readingmode",$("#readingmode").is(":checked"));
	});

}

Template.settings.helpers({
	unitCheck:function() {
		if (Session.get("unit") == "m") {
			return true;
		}
		else {
			return false;
		}
	},
	readingmodeCheck:function() {
		return Session.get("readingmode");
	}

});
