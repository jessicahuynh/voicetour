Template.selfguide.helpers({
	currentLoc:function() {
		return Locations.findOne({"name":Session.get("inLocation")[0].name});
	},
});
