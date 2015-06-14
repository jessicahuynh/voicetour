offCampus = {
	"name":"off campus",
	"nickname":"off campus",
	"function":"not at Brandeis!"
}

Template.welcome.helpers({
	currentLocation: function() {
		// watchPosition watches to see if position changes
		// the function then sets the new location
		// and calls searchLocations to determine the new location
		navigator.geolocation.watchPosition(function(position){
			var current = new Point(position.coords.latitude,position.coords.longitude);
			Session.set("currentLocation",current);

			Meteor.call("searchLocations",			
				Session.get("currentLocation"),
				function(error, data) {
					if (error) {
						console.log(error);
					}
					else {
						Session.set("inLocation",data);
					}
				}
			);
			
		});

		
		return Session.get("currentLocation");
	},
	inLocation: function(property) {
		var at = Session.get("inLocation");
		if (at === null) {
			return offCampus;
		}
		else {
			return Session.get("inLocation");
		}
		
	}
});

Template.welcome.events({
	'click #whereAmI': function(event) {
		event.preventDefault();

		if (Session.get("inLocation") == null) {
			window.speechSynthesis.speak(new SpeechSynthesisUtterance("You are off campus."));
		}
		else {
			readLocation = new SpeechSynthesisUtterance(Session.get("inLocation").name);

			window.speechSynthesis.speak(readLocation);
		}
	}
});


function Point(x,y) {
	this.x = x;
	this.y = y;
}
