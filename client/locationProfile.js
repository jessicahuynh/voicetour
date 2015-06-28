Template.locationProfile.helpers({
	location:function() {
		return Locations.findOne({_id:Session.get("viewLocation")});
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