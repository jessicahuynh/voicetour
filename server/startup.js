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
	
	if (Paths.find().count() == 0) {
		var pathFiles = [paths_massellchapels];
		
		pathFiles.forEach(function(pathFile) {
			pathFile.forEach(function(path) {
				// console.log(path.start);
				Meteor.call("distance",
					Intersections.findOne({"id":path.start}).coordinate,
					Intersections.findOne({"id":path.end}).coordinate,
					function(error,data) {
						if (error) {
							console.log(error);
						}
						else {
							path.distance = data;
							Paths.insert(path);
							// console.log(path);	
						}
				});
			});
			
		});
	}

	if (Map.find().count() == 0) {
		var map = {};
		paths = Paths.find().fetch();
		/*console.log(paths);*/
		paths.forEach(function(path){
			var start = path.start;
			var end = path.end;
			var dist = path.distance;
			if (map[start] == undefined || map[start] == null){
				map[start] = {};
			}
			map[start][end] = dist;
		});
		
		/*console.log(map);*/
		Map.insert(map);
	}
	console.log(Map.find().count());
	console.log("startup end");


});