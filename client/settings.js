Session.setDefault("unit","m");

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