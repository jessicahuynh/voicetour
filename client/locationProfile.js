Template.locationProfile.helpers({
	location:function() {
		thisLoc = Locations.findOne({_id:Session.get("viewLocation")});
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

Template.locationProfile.events({
	'click .go-to-navigate':function(event) {
		Session.set("navigateTo",thisLoc.name);
	}
});

Template.locationProfile.rendered = function() {
	Session.set("pageTitle","Viewing " +thisLoc.nickname);
	if ($(window).width() > 768) {
		$(".page-header").prepend("<a href='#' id='returnToList' class='back'><span class='glyphicon glyphicon-menu-left'></span></a>");
	}
	
	var listen = thisLoc.name + ". " + thisLoc.function + thisLoc.description;
	Session.setPersistent("listenTo",listen);
}