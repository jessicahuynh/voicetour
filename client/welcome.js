offCampus = {
	"name":"off campus",
	"nickname":"off campus",
	"function":"There's lots to do off campus but unfortunately I can't tell you all that much about it."
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
		console.log(Session.get("inLocation"));
		return Session.get("inLocation");		
	}
});

/* Code for speech on template render
 * For a later date??
Template.welcome.rendered = function() {
	if (Session.get("inLocation") == null) {
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("You are off campus."));
		window.speechSynthesis.speak(new SpeechSynthesisUtterance("There's lots to do off campus, but unfortunately I can't tell you all that much about it."));
	}
	else {
		readLocation = new SpeechSynthesisUtterance("You are at " + Session.get("inLocation").name);
		readFunction = new SpeechSynthesisUtterance(Session.get("inLocation").function);

		window.speechSynthesis.speak(readLocation);
		window.speechSynthesis.speak(readFunction);
	}
}*/

Template.welcome.events({
	'click #whereAmI': function(event) {
		event.preventDefault();

		navigator.geolocation.getCurrentPosition(function(position) {
 			var current = new Point(position.coords.latitude,position.coords.longitude);
			Session.set("currentLocation",current);
		});
		

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

		
	},

	'click #whatIsHere': function(event) {
		event.preventDefault();

		if (Session.get("inLocation") == null) {
			window.speechSynthesis.speak(new SpeechSynthesisUtterance("There's lots to do off campus, but unfortunately I can't tell you all that much about it."));
		}
		else {
			readFunction = new SpeechSynthesisUtterance(Session.get("inLocation").function);

			window.speechSynthesis.speak(readFunction);
		}
	}
});


function Point(x,y) {
	this.x = x;
	this.y = y;
}
