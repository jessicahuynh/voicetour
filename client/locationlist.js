Session.setDefault("category","");
var tabIds = ["all","science","dorm"];

Template.locationList.helpers({
	locationsData: function() {
		if (Session.get("category") == "") {
			return Locations.find({},{sort:{"nickname":1}});
		}
		else {
			return Locations.find({"category":Session.get("category")},{sort:{"nickname":1}});
		}
	}
});

Template.locationList.events({
	'click .nav li':function(event) {
		event.preventDefault();
		// removes active class from previous tab
		$(".nav li.active").removeClass("active");

		// toggles the active class for the li you clicked on
		// make sure to set data-toggle="pill"/"tab" for it to work!
		if (!$(this).hasClass("active")) {
			$(this).toggleClass("active");
		}
	},
	'click #all':function(event){
		event.preventDefault();
		Session.set("category","");
	},
	'click #science':function(event){
		event.preventDefault();
		Session.set("category","science");
	},
	'click #dorm':function(event){
		event.preventDefault();
		Session.set("category","dorm");
	}
});
