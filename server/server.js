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
		locatedHere = null;

		for (var i = 0; i < Locations.find().count(); i++) {
			// if the given Point is in the location, return the location
			Meteor.call("pointIncluded",Locations.find().fetch()[i].coordinates,current,
				function(error, data) {
					if (error) {
						console.log(error);
					}
					else {
						locatedHere = data;
					}
			});
			
			
			if (locatedHere) {
				location = [Locations.find().fetch()[i], "in"];
				break;
			}


		}
						
		// call getNearest
		// pass current
		//console.log(locatedHere);
		if (!locatedHere) {
			Meteor.call("getNearest",
				current,
				function (error, data) {
					if (error) {
						console.log(error);
					}
					else {
						// console.log("got the nearest location: " + data.name);
						location = [data[0], "near", data[1]];
						
						
					}
				});
		}

		return location;
	},

	getNearest: function(location) {
		var points = CornerPoints.find().fetch();
		//console.log(location);

		// hold the current iteration
		// nearLocationDistance is the distance to the point
		// nearLocation is the object itself containing a point and a name
		// previousClosest is the previous nearestLocation
		// previousClosestDistance is the previous location's distance

		// theNearest
		// theNearestDistance

		previousClosest= points[0];
		previousClosestDistance = 1000000000000;
		theNearestDistance = 100000000000;

		for (var i = 0; i < points.length; i++) {
			//console.log(JSON.stringify(location)+JSON.stringify(points[i]));
			Meteor.call("distance",
				location,
				points[i].point,
				function(error,data) {
					if (error) {
						console.log(error);
					}
					else {
						//console.log(data);
						nearLocationDistance = data;							
					}
				}
				);
			nearLocation = points[i];
			//console.log(nearLocationDistance + "<" + theNearestDistance);
			if (nearLocationDistance < theNearestDistance) {
				theNearest = nearLocation;
				theNearestDistance = nearLocationDistance;
			}
			previousClosest = nearLocation;
			previousClosestDistance = nearLocationDistance;
		}
		//console.log("nearest distance location:" + theNearestDistance + JSON.stringify(theNearest));
		if (theNearestDistance < 10000000) {
			// console.log(JSON.stringify(theNearest));
			return [theNearest,theNearestDistance];
		}
		else {
			console.log("You are off campus.");
			return;
		}

	},

	/* returns the distance between two points 
	* adapted from http://www.movable-type.co.uk/scripts/latlong.html */
	distance: function(start, end) {
		//console.log(JSON.stringify(start)+JSON.stringify(end));
		var R = 6371000; // metres
		//console.log(start.point+end.point);

		var lat1 = start.x;
		var lat2 = end.x;
		var lon1 = start.y;
		var lon2 = end.y;

		var p1 = lat1 * (Math.PI / 180);
		var p2 = lat2 * (Math.PI / 180);
		var dp = (lat2-lat1) * (Math.PI / 180);
		var dl = (lon2-lon1) * (Math.PI / 180);

		var a = Math.sin(dp/2) * Math.sin(dp/2) +
		        Math.cos(p1) * Math.cos(p2) *
		        Math.sin(dl/2) * Math.sin(dl/2);
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

		var d = R * c;
		//console.log(d);

		return d;
	}

	

});