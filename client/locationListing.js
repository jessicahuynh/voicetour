Template.locationListing.helpers({
	locationId:function() {
		return this._id;
	}
});

Template.locationListing.events({
	'click a.go-to-location':function(event) {
		Session.set("viewLocation",this._id);
	}
});