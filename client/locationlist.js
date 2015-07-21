Session.setDefault("category","");

Template.locationList.rendered = function() {
	var listen = "This is a list of every location on campus, filterable and sortable.";

	Session.setPersistent("listenTo",listen);
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
	allCount:function() {
		return Locations.find().count();
	},
	scienceCount:function() {
		return Locations.find({"category":"science"}).count();
	},
	artCount:function() {
		return Locations.find({"category":"art"}).count();
	},
	dormCount:function() {
		return Locations.find({"category":"dorm"}).count();
	},
	religiousCount:function() {
		return Locations.find({"category":"religious"}).count();
	},
	diningCount:function() {
		return Locations.find({"category":"dining"}).count();
	},
	administrativeCount:function() {
		return Locations.find({"category":"administrative"}).count();
	},
	graduateCount:function() {
		return Locations.find({"category":"graduate"}).count();
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
	'click #art':function(event){
		event.preventDefault();
		Session.set("category","art");
	},
	'click #dorm':function(event){
		event.preventDefault();
		Session.set("category","dorm");
	},
	'click #religious':function(event){
		event.preventDefault();
		Session.set("category","religious");
	},
	'click #dining':function(event){
		event.preventDefault();
		Session.set("category","dining");
	},
	'click #admin':function(event){
		event.preventDefault();
		Session.set("category","administrative");
	},
	'click #grad':function(event){
		event.preventDefault();
		Session.set("category","graduate");
	}
});