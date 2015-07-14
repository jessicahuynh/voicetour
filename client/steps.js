

Template.steps.helpers({
	end: function() {
		return Session.get("navigateTo");
	},
});

Template.graph.rendered = function () {
	graph = new Graph(Map.findOne());
	console.log(graph);	

	route = Seesion.get("route");
	var navTo = Session.get("navigateTo");
	if (navTo != "" && navTo != null) {
		document.getElementById("endpoint").value = navTo;
	}
	
	var navFrom = Session.get("navigateFrom");
	if (navFrom != "" && navFrom != null) {
		document.getElementById("startpoint").value = navFrom;
	}
	
	if (navTo != "" && navTo != null && navFrom != null && navFrom != "") {
		$("#navform").submit()
	}
	else {
		if (navTo != "" && navTo != null) {
			Session.set("navigateFrom","(" + Session.get("currentLocation").x + ", " + Session.get("currentLocation").y + ")");
			$("#navform").submit();
			console.log("submitted");
		}
	}
};

function getRouteDescription(route) {
	var r = [];
		
	if (route != null && route != undefined) {
		var thePath = Paths.findOne({"start":route[0],"end":route[1]});
		r.push(thePath.description);
	}
	else {
		r.push("We don't seem to be able to find the routing data!");
	}
	
	r.push("Your ending location is " + document.getElementById("endpoint").value);
	
	Session.set("routeToTake",r);
}