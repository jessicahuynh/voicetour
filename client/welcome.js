

Template.welcome.helpers({
	currentLocation: function() {
		navigator.geolocation.watchPosition(function(position){
			var current = new Point(position.coords.latitude,position.coords.longitude);
			Session.set("currentLocation",current);
			
		});

		
		return Session.get("currentLocation");
	},
	inLocation: function() {
		var at = Session.get("inLocation");
		if (at === undefined) {
			return "off campus";
		}
		else {
			return Session.get("inLocation").name;
		}
		
	}
});

Template.welcome.events({
	'click #here': function() {	
		// a test to see if it knows this coordinate is in the SCC...
		Session.set("currentLocation",new Point(42.365947,-71.260036));

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
	}
});


function Point(x,y) {
	this.x = x;
	this.y = y;
}
