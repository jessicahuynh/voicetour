Meteor.methods({
	/* numVert: number of vertices
	 * vertices: array of vertices
	 * current: current location 
	 *
	 * Determines if a given Point is located within a polygon of n vertices
	 * Algorithm from http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html */
	pointIncluded: function(vertices, current) {
		included = false;
		numVert = vertices.length;

		// create arrays of the x and y coordinates of the polygon
		var xArray = [];
		for (var i = 0; i < numVert; i++) {
			xArray.push(vertices[i].x);
		}
		
		var yArray = [];
		for (var i = 0; i < numVert; i++) {
			yArray.push(vertices[i].y);
		}

		for (var i = 0, j = numVert - 1; i < numVert; j = i++) {
			if ((yArray[i] >= current.y) != (yArray[j] >= current.y) &&
				(current.x <= (xArray[j] - xArray[i]) * 
					(current.y - yArray[i]) / (yArray[j] - yArray[i]) +
					xArray[i])
				) {
				included = !included;

			}
		}
	
		return included;
	},

	/* Search through all locations to see where you are */
	searchLocations: function(current) {
		location = null;

		for (var i = 0; i < Locations.find().count(); i++) {
			// if the given Point is in the location, return the location
			Meteor.call("pointIncluded",Locations.find().fetch()[i].coordinates,current,function(error, data) {
				if (error) {
					console.log(error);
				}
				else {
					locatedHere = data;
				}
			});

			if (locatedHere) {
				location = Locations.find().fetch()[i];
				console.log(location);
				break;
			}
		}

		return location;
	},

	/* returns the distance between two points 
	 * adapted from http://www.movable-type.co.uk/scripts/latlong.html */
	distance: function(start, end) {
		var R = 6371000; // metres

		function toRadians (angle) {

		var lat1 = start.x;
		var lat2 = end.x;
		var lon1 = start.y;
		var lon2 = end.y;

		var p1 = lat1.radians();
		var p2 = lat2.radians();
		var dp = (lat2-lat1).radians();
		var dl = (lon2-lon1).radians();

		var a = Math.sin(dp/2) * Math.sin(dp/2) +
		        Math.cos(p1) * Math.cos(p2) *
		        Math.sin(dl/2) * Math.sin(dl/2);
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

		var d = R * c;

		return d;
	}
});