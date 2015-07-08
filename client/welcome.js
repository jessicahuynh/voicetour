offCampus = {
	"name":"off campus",
	"nickname":"off campus",
	"function":"There's lots to do off campus but unfortunately I can't tell you all that much about it."
}

Template.welcome.helpers({
	currentLocation: function () {
		
		navigator.geolocation.getCurrentPosition(function (position) {
			var current = new Point(position.coords.latitude, position.coords.longitude);
			Session.set("currentLocation", current);
			
			Meteor.call("searchLocations",
			Session.get("currentLocation"),
				function (error, data) {
					if (error) {
						console.log(error);
					}
					else {
						Session.set("inLocation", data);
					}
				}
				
			);
		});
		
		return Session.get("currentLocation");

	},
	inLocation: function () {
		var name = Locations.findOne({ "name": Session.get("inLocation")[0].name }).name;
		if (Session.get("inLocation")[1] == "in") {
			return "You're in " + name;
		}	
		else {
			return "You're about " + Math.round(Session.get("inLocation")[2]) + "m from " + name;
		}
		if (name == null) {
			return "You're off campus";
		}
	},
	inLocationFunction:function() {
		var loc = Locations.findOne({"name":Session.get("inLocation")[0].name}); 
		if (loc == null) {
			return offCampus.function;
		}
		else {
			return loc.function;
		}
	},
	locationMapOptions: function() {
		if (GoogleMaps.loaded()) {
			//console.log(Session.get("currentLocation").x,Session.get("currentLocation").y);
			return {
				center: new google.maps.LatLng(Session.get("currentLocation").x,Session.get("currentLocation").y),
				zoom:16
			};
		}
	}
});

Template.welcome.onCreated(function() {
	GoogleMaps.load();
	GoogleMaps.ready('locationMap',function(map) {
		var marker = new google.maps.Marker({
			position: map.options.center,
			map: map.instance
		})
	});
});

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

		if (Session.get("inLocation") == null) {
			window.speechSynthesis.speak(new SpeechSynthesisUtterance("You are off campus."));
		}
		else {
			var name = Session.get("inLocation")[0].name;

			if (Session.get("inLocation")[1] == "in") {
				readName = new SpeechSynthesisUtterance("You're in " + name);
			}
			else {
				readName = new SpeechSynthesisUtterance("You're about " + Math.round(Session.get("inLocation")[2]) + "m from " + name);
			}

			window.speechSynthesis.speak(readName);
		}

		
	},

	'click #whatIsHere': function(event) {
		event.preventDefault();

		if (Session.get("inLocation") == null) {
			window.speechSynthesis.speak(new SpeechSynthesisUtterance("There's lots to do off campus, but unfortunately I can't tell you all that much about it."));
		}
		else {
			var loc = Locations.findOne({"name":Session.get("inLocation")[0].name});
			//console.log(loc.function);
			readFunction = new SpeechSynthesisUtterance(loc.function);

			window.speechSynthesis.speak(readFunction);
		}
	}
});


function Point(x,y) {
	this.x = x;
	this.y = y;
}