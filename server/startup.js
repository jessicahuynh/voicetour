Meteor.startup(function() {
	if (Locations.find().count() == 0) {
		// list of all of the files containing location data
		var locFiles = [locations,locations_artinstallations,locations_dorms,locations_parking,locations_transport,locations_rooms];
		
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
		var intersectFiles = [points_massellchapels,points_southcampus,points_gym,points_science,points_northrabb,points_mandelquad,points_libraryeast,points_grad,points_ibs];
		
		intersectFiles.forEach(function(intersectFile) {
			intersectFile.forEach(function(point) {
				Intersections.insert(point);
			});
		});
	}
	
	if (Paths.find().count() == 0) {
		var pathFiles = [paths_massellchapels,paths_southcampus,paths_gym,paths_science,paths_northrabb,paths_mandelquad,paths_libraryeast,paths_grad,paths_ibs];
		
		pathFiles.forEach(function(pathFile) {
			pathFile.forEach(function(path) {
				console.log("path###############");
				console.log(Intersections.findOne({"id":path.start}));
				console.log(Intersections.findOne({"id":path.end}));
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

	if (Hours.find().count()==0){
		var hoursFile=operationhours;
		hoursFile.forEach(function(hour) {
			console.log(hour);
			Hours.insert(hour);
			
		});
	}
	console.log(Map.find().count());
	console.log("startup end");


});