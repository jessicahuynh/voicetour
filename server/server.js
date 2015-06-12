Meteor.methods({
	Point: function(x,y) {
		this.x = x;
		this.y = y;
	},
	// numVert: number of vertices
	// vertices: array of vertices
	// current: current location
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
			if ((yArray[i] > current.y) != (yArray[j] > current.y) &&
				(current.x < (xArray[j] - xArray[i]) * 
					(current.y - yArray[i]) / (yArray[j] - yArray[i]) +
					xArray[i])
				) {
				included = !included;

			}
		}

		return "here";
	}
});