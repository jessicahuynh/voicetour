

Template.steps.helpers({
	end: function() {
		console.log(Session.get("end"));
		return Session.get("end");
	},
	navMapOptions: function() {
		if (GoogleMaps.loaded()) {
			//console.log(Session.get("currentLocation").x,Session.get("currentLocation").y);
			return {
				center: new google.maps.LatLng(Session.get("currentLocation").x,Session.get("currentLocation").y),
				zoom:17
			};
		}
	}
});

Template.steps.rendered = function () {
	graph = new Graph(Map.findOne());
	console.log(graph);	

	Session.set("current","(" + Session.get("currentLocation").x + ", " + Session.get("currentLocation").y + ")");
	var navTo = Session.get("end");
	var navFrom = Session.get("start");
/*	var navFrom = Session.get("current");*/
	route = getRoute(navTo, navFrom);
	if (navTo != "" && navTo != null && navFrom != null && navFrom != "") {
		getRouteDescription(route);
		addMarkers(route);
		addRoutes(route);
	}else {
		alert("please enter the destination!");
	}
};

Template.steps.onCreated(function() {
	GoogleMaps.load();
	GoogleMaps.ready('navMap',function(map) {
		var marker = new google.maps.Marker({
			position: map.options.center,
			map: map.instance
		});
	});
});

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