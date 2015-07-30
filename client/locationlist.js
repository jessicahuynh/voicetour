Session.setDefault("category","");
Session.setDefault("area","");

Template.locationList.rendered = function() {
	Session.set("pageTitle","Locations @ Brandeis");
	
	var listen = "This is a list of every location on campus, filterable and sortable.";

	Session.set("listenTo",listen);
}

Template.locationList.helpers({
	locationsData: function() {
		if (Session.get("category") == "" || Session.get("category") == "All") {
			if (Session.get("area") == "" || Session.get("area") == "All") {
				return Locations.find({},{sort:{"nickname":1}});
			}
			else {
				return Locations.find({"area":Session.get("area")},{sort:{"nickname":1}});
			}
		}
		else {
			if (Session.get("area") == "" || Session.get("area") == "All") {
				return Locations.find({"category":Session.get("category")},{sort:{"nickname":1}});
			}
			else {
				return Locations.find({"category":Session.get("category"),"area":Session.get("area")},{sort:{"nickname":1}});
			}
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
	selectedArea:function() {
		if (Session.get("area") == "") {
			return "All";
		}
		else {
			return Session.get("area");
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
	'click .selectionCat':function(event) {
		event.preventDefault();
		
		Session.set("category",$(event.target).data("filter"));
	}
	,
	'click .selectionArea':function(event) {
		event.preventDefault();
		
		Session.set("area",$(event.target).data("filter"));
	}
});