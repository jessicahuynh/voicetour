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
		var volen = Meteor.call("pointIncluded",
			Locations.findOne({nickname:"Volen"}).coordinates,
			Session.get("currentLocation"));
		alert(volen);
	}
});


function Point(x,y) {
	this.x = x;
	this.y = y;
}