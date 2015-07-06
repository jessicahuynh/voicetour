Meteor.startup(function() {
	if (Locations.find().count() == 0) {
		// list of all of the files containing location data
		var locFiles = [locations,locations_artinstallations,locations_dorms,locations_parking];
		
		locFiles.forEach(function(locFile) {
			locFile.forEach(function(location) {
				Locations.insert(location);
				var c = location.coordinates;
				
				c.forEach(function(point) {
					CornerPoints.insert({"point":point,"name":location.name});
				})
			});
		});		
	}
	
	if (Intersections.find().count() == 0) {
		var intersectFiles = [points_massellchapels,points_gym];
		
		intersectFiles.forEach(function(intersectFile) {
			intersectFile.forEach(function(point) {
				Intersections.insert(point);
			});
		});
	}

});