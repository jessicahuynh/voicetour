Meteor.startup(function() {
	function Point(x,y) {
		this.x = x;
		this.y = y;
	}

	if (Locations.find().count() == 0) {
		// load locations json file into collection
		locations.forEach(function(location) {
			Locations.insert(location);
		});
	}
});