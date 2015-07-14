Template.locationListing.helpers({
	locationId:function() {
		return this._id;
	},
	categories:function() {
		var c = "";
		if (catArray != null && catArray != undefined) {
		var catArray = this.category;
			for (var i = 0; i < catArray.length - 1; i++) {
				c += catArray[i] + ", ";
			}
			c+=catArray[i];
		}
		return c;
	}
});

Template.locationListing.events({
	'click a.go-to-location':function(event) {
		Session.setPersistent("viewLocation",this._id);
	},
	'click a.go-to-navigate':function(event) {
		Session.set("navigateTo",this.name);
	}
});