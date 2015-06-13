

Template.welcome.helpers({
	currentLocation: function() {
		navigator.geolocation.watchPosition(function(position){
			var current = new Point(position.coords.latitude,position.coords.longitude);
			Session.set("currentLocation",current);
			
		});

		
		return Session.get("currentLocation");
	},
	inBuilding: function() {
		return Session.get("inBuilding");
	}
});

Template.welcome.events({
	'click #here': function() {	
		Session.set("currentLocation",new Point(42.365947,-71.260036));

		Meteor.call("searchLocations",			
			Session.get("currentLocation"),
			function(error, data) {
				if (error) {
					console.log(error);
				}
				else {
					Session.set("inBuilding",data);
				}
			}
		);
	}
});


function Point(x,y) {
	this.x = x;
	this.y = y;
}
