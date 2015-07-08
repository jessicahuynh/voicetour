// watchPosition watches to see if position changes
		// the function then sets the new location
navigator.geolocation.getCurrentPosition(function (position) {
	var current = new Point(position.coords.latitude, position.coords.longitude);
	Session.set("currentLocation", current);
});

function Point(x,y) {
	this.x = x;
	this.y = y;
}