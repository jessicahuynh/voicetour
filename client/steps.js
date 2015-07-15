

Template.steps.helpers({
	destination: function() {
		return Session.get("destination");
	},
	navMapOptions: function() {
		if (GoogleMaps.loaded()) {
			//console.log(Session.get("currentLocation").x,Session.get("currentLocation").y);
			return {
				center: new google.maps.LatLng(Session.get("currentLocation").x,Session.get("currentLocation").y),
				zoom:17
			};
		}
	},
	step: function() {
		return Session.get("step");
	}
});

Template.steps.events({
	"click #refreshMap" : function(event) {
		if (GoogleMaps.loaded()) {
			//console.log(Session.get("currentLocation").x,Session.get("currentLocation").y);
			return {
				center: new google.maps.LatLng(Session.get("currentLocation").x,Session.get("currentLocation").y),
				zoom:17
			};
		}
		google.maps.event.trigger(map, 'resize');
	}
});

Template.steps.rendered = function () {
	graph = new Graph(Map.findOne());
		

	Session.set("current","(" + Session.get("currentLocation").x + ", " + Session.get("currentLocation").y + ")");
	route = Session.get("route");
	console.log(route);
	var navFrom = Session.get("current");
/*	var navFrom = route[0];*/
	var navTo = route[route.length - 1];
	console.log("from "+navFrom+" to "+navTo);
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
	
	Session.set("step",r);
}