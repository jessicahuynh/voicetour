Template.welcome.helpers({
	currentLocation: function() {
		navigator.geolocation.watchPosition(function(position){
			var current = new Point(position.coords.latitude,position.coords.longitude);
			Session.set("currentLocation",current);
			
		});
		return Session.get("currentLocation");
	}
});

function Point(x,y) {
	this.x = x;
	this.y = y;
}