Meteor.startup(function() {
	if (Locations.find().count() == 0) {
		// load locations json file into collection
		locations.forEach(function(location) {
			Locations.insert(location);
		});
	}

});