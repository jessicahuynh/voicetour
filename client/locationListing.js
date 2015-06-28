Template.locationListing.helpers({
	locationId:function() {
		return this._id;
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

Template.locationListing.events({
	'click a.go-to-location':function(event) {
		Session.set("viewLocation",this._id);
	}
});