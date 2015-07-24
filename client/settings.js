Session.setDefault("unit","m");
Session.setDefault("rate", 0.8);

Template.settings.rendered = function() {
	Session.set("pageTitle","Settings");
	
	$(".switch").bootstrapSwitch();
	
	$("#unit").on('switchChange.bootstrapSwitch', function(event, data) {
		if ($("#unit").is(":checked")) {
			Session.setPersistent("unit","m");
		}
		else {
			Session.setPersistent("unit","ft");
		}
	});


	$('.slider').slider();
	$('#rate').slider()
	  .on('slide', function(value){
	  	console.log(value);
	    Session.setPersistent("rate",value);
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
	}

});

Template.settings.events({
	"range #rate": function(event){
		var rateInput = document.getElementById('rate');
		var rate = rateInput.value;
		console.log(rateInput);
		console.log(rate);
		Session.setPersistent("rate",rate);
	}
})