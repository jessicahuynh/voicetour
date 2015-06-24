Meteor.startup(function() {
	if (Locations.find().count() == 0) {
		// load main locations json file into collection
		locations.forEach(function(location) {
			Locations.insert(location);
			var c = location.coordinates;

			c.forEach(function(point) {
				CornerPoints.insert({"point":point,"name":location.name});
			});
		});
		// load dorms into collection
		locations_dorms.forEach(function(location) {
			Locations.insert(location);
			var c = location.coordinates;

			c.forEach(function(point) {
				CornerPoints.insert({"point":point,"name":location.name});
			});
		});
	}

	if (Routes.find().count() == 0) {
		// load routes into collection
		locations.forEach(function(location) {
			var c = location.route;
			var name = location.name.toString();
			Routes.insert( c);
		});
	}



});