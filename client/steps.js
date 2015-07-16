



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
		GoogleMaps.ready('navMap',function(map){

			deleteMarkers();
			deleteRoutes();

			addMarkers(route[0],'navMap');
			addMarkers(route[route.length-1],'navMap');
			for(var j = 0; j<route.length - 1; j++){
				addRoutes(route[j],route[j+1],'navMap');
			}
			
		});

	}
});

Template.steps.rendered = function () {
	graph = new Graph(Map.findOne());

	route = Session.get("route");
	laststop = route[route.length - 1];	

	Session.set("current","(" + Session.get("currentLocation").x + ", " + Session.get("currentLocation").y + ")");
	
	
	var navFrom = Session.get("current");
	var navTo = Session.get("destination");
	route = getRoute(navFrom, navTo);
	firststep = route[0];
	secondstep = route[1];
	console.log(route);
	console.log("from "+navFrom+" to "+navTo);
	if (navTo != "" && navTo != null && navFrom != null && navFrom != "") {
		getRouteDescription(route);
		deleteMarkers();
		deleteRoutes();
		addMarkers(route, "navMap");
		addRoutes(route, "navMap");
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

/*Tracker.autorun(function (c) {
  if (secondstep != laststop){

  }

  c.stop();
  alert("Get there!");
});
*/

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

