navigator.geolocation.watchPosition(function (position) {
			var current = new Point(position.coords.latitude, position.coords.longitude);
			Session.set("currentLocation", current);
			
			Meteor.call("searchLocations",
			Session.get("currentLocation"),
				function (error, data) {
					if (error) {
						console.log(error);
					}
					else {
						Session.setPersistent("inLocation", data);
					}
				}
				
			);
		});


function Point(x,y) {
	this.x = x;
	this.y = y;
}