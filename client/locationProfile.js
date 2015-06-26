Template.locationProfile.helpers({
	location:function() {
		return Locations.findOne({_id:Session.get("viewLocation")});
	}
});