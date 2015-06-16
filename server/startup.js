Meteor.startup(function() {
	if (Locations.find().count() == 0) {
		// load locations json file into collection
		locations.forEach(function(location) {
			Locations.insert(location);
			var c = location.coordinates;

			for (var i = 0; i < c.length; i++) {
				CornerPoints.insert({"point":c[i],"name":location.nickname});
			}
		});
	}

});