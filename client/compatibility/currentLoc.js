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


function Point(x,y) {
	this.x = x;
	this.y = y;
}