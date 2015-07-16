markers = [];

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
	
	
	var navFrom = Session.get("current");
	route = Session.get("route");
	console.log(route);
	var navTo = Session.get("destination");
	route = getRoute(navFrom, navTo);
	firststep = route[0];
	secondstep = route[1];
	console.log(route);
	console.log("from "+navFrom+" to "+navTo);
	if (navTo != "" && navTo != null && navFrom != null && navFrom != "" && route != null) {
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

/*Tracker.autorun(function (c) {
  if (! Session.equals("shouldStop", true)){

  }
    return;

  c.stop();
  alert("Oh no!");
});*/

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

function findId(data, idToLookFor) {
    for (var i = 0; i < data.length; i++) {
        if (data[i].id == idToLookFor) {
            return(data[i].coordinate);
        }
    }
}

function addMarkers(route){
	var all_points=Intersections.find().fetch();
	route.forEach(
		function(stop) {
			var stopLoc=findId(all_points,stop);
			GoogleMaps.load();
			GoogleMaps.ready('navMap',function(map) {
				var marker = new google.maps.Marker({
					position: new google.maps.LatLng(stopLoc.x,stopLoc.y),
					map:map.instance
				});
			})
		}
	);
}