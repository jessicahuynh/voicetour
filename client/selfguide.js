Template.selfguide.helpers({
	currentLoc:function() {
		setAudio(Session.get("inLocation")[0]);
		return Locations.findOne({"name":Session.get("inLocation")[0].name});
	},
});

Template.selfguide.rendered = function() {
	Session.set("pageTitle","Self-Guided Tour");
};

Tracker.autorun(function() {
	setAudio(Session.get("inLocation")[0]);	
	console.log("system print ")
});

function setAudio(loc) {
	var listen = loc.name + ". " + loc.function;
	
	// var nearbyS = " Nearby we have ";
	// if (loc.nearby != undefined || loc.nearby != null) {
	// 	if (loc.nearby.length > 1) {
	// 		for (var i = 0; i < loc.nearby - 1; i++) {
	// 			nearbyS += Locations.findOne({"id":loc.nearby[i]}).nickname + ", ";
	// 		}
	// 		nearbyS += Locations.findOne({"id":loc.nearby[loc.nearby.length - 1]}).nickname + ".";
	// 	}
	// 	else {
	// 		nearbyS += Locations.findOne({"id":loc.nearby[0]}).nickname + ".";
	// 	}
	// 	listen += nearbyS;	
	// }
	
	
	
	Session.set("listenTo",listen);
}