Template.selfguide.helpers({
	currentLoc:function() {
		return Locations.findOne({"name":Session.get("inLocation")[0].name});
	},
	nearbyId:function() {
		return Locations.findOne({"id":this})._id;
	},
	nearbyName:function() {
		return Locations.findOne({"id":this}).name;
	}
});