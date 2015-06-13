

Template.welcome.helpers({
	currentLocation: function() {
		navigator.geolocation.watchPosition(function(position){
			var current = new Point(position.coords.latitude,position.coords.longitude);
			Session.set("currentLocation",current);
			
		});

		
		return Session.get("currentLocation");
	}
});

Template.welcome.events({
	'click #here': function() {	
		Meteor.call("pointIncluded",
			Locations.findOne().coordinates,
			Session.get("currentLocation"),
			function(error, data) {
				if (error) {
					console.log(error);
				}
				else {
					Session.set("inABuilding",data)
				}
		});
		alert(Session.get("inABuilding"));
	}
});


function Point(x,y) {
	this.x = x;
	this.y = y;
}
