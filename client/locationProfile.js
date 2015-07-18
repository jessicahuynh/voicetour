Template.locationProfile.helpers({
	location:function() {
		thisLoc = Locations.findOne({_id:Session.get("viewLocation")});
		Session.set("navigateTo",thisLoc.name);
		return thisLoc;
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

Template.locationProfile.rendered = function() {
	if ($(window).width() > 768) {
		$(".page-header").prepend("<a href='#' id='returnToList'><span class='glyphicon glyphicon-menu-left'></span></a>");
	}
	
	var listen = thisLoc.name + ". " + thisLoc.function + thisLoc.description;
	Session.set("listenTo",listen);
}

Template.locationProfile.events({
	'click #returnToList':function(event) {
		event.preventDefault();
		history.back();
	}
});