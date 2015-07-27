Session.setDefault("category","");

Template.locationList.rendered = function() {
	Session.set("pageTitle","Locations @ Brandeis");
	
	var listen = "This is a list of every location on campus, filterable and sortable.";

	Session.set("listenTo",listen);
}

Template.locationList.helpers({
	locationsData: function() {
		if (Session.get("category") == "") {
			return Locations.find({},{sort:{"nickname":1}});
		}
		else {
			return Locations.find({"category":Session.get("category")},{sort:{"nickname":1}});
		}
	},
	selectedCat:function() {
		if (Session.get("category") == "") {
			return "All";
		}
		else {
			return Session.get("category");
		}
	},
	allCount:function() {
		return Locations.find().count();
	},
	catCount:function(cat) {
		return Locations.find({"category":cat}).count();
	}
});

Template.locationList.events({
	'click .filterSelect':function(event) {
		event.preventDefault();
		if ($(event.target).find("span").hasClass("glyphicon-menu-up")) {
			$(event.target).find("span").removeClass("glyphicon-menu-up");
			$(event.target).find("span").addClass("glyphicon-menu-down");
		}
		else {
			$(event.target).find("span").removeClass("glyphicon-menu-down");
			$(event.target).find("span").addClass("glyphicon-menu-up");
		}
	},
	'click .selection':function(event) {
		event.preventDefault();
		
		Session.set("category",$(event.target).data("filter"));
	}
});