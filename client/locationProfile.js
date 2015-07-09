Template.locationProfile.helpers({
	location:function() {
		var thisLoc = Locations.findOne({_id:Session.get("viewLocation")});
		Session.set("navigateTo",thisLoc.name);
		return thisLoc;
	},
	categories:function() {
		var c = "";
		var catArray = this.category;
		for (var i = 0; i < catArray.length - 1; i++) {
			c += catArray[i] + ", ";
		}
		c+=catArray[i];
		return c;
	}
});