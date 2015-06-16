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
		var at = Session.get("inLocation");
		if (at === null) {
			return offCampus;
		}
		else {
			return Session.get("inLocation");
		}
		
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

		var points = CornerPoints.find().fetch();

		if (Session.get("inLocation") == null) {
			// hold the current iteration
			// nearLocationDistance is the distance to the point
			// nearLocation is the object itself containing a point and a name

			// previousClosest is the previous nearestLocation
			// previousClosestDistance is the previous location's distance

			// theNearest
			// theNearestDistance

			Session.set("previousClosest",points[0].point);
			console.log(points[0].point);
			Session.set("previousClosestDistance",1000000000000);
			for (var i = 0; i < points.length; i++) {
				Meteor.call("distance",
					Session.get("currentLocation"),
					CornerPoints.find().fetch()[i].point,
					function(error,data) {
						if (error) {
							console.log(error);
						}
						else {
							Session.set("nearLocationDistance",data);
							Session.set("nearLocation",points[i].point)
						}
					});
				console.log(Session.get("nearLocationDistance") + "<" + Session.get("previousClosestDistance"));
				if (Session.get("nearLocationDistance") < Session.get("previousClosestDistance")) {
					Session.set("theNearest",Session.get("nearLocation"));
					Session.set("theNearestDistance",Session.get("nearLocationDistance"));
				}
				Session.set("previousClosest",Session.get("nearLocation"));
				Session.set("previousClosestDistance",Session.get("nearLocationDistance"));
			}
			if (Session.get("theNearestDistance") < 5000) {
				console.log("Near something: " + Session.get("theNearest").nickname);
			}
			else {
				window.speechSynthesis.speak(new SpeechSynthesisUtterance("You are off campus."));
			}
		}
		else {
			readLocation = new SpeechSynthesisUtterance("You are at " + Session.get("inLocation").name);

			window.speechSynthesis.speak(readLocation);
		}
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
