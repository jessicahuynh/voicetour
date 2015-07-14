Template.graph.rendered = function () {
	graph = new Graph(Map.findOne());
	console.log(graph);	
	
	var navTo = Session.get("navigateTo");
	if (navTo != "" && navTo != null) {
		document.getElementById("endpoint").value = navTo;
	}
	
	var navFrom = Session.get("navigateFrom");
	if (navFrom != "" && navFrom != null) {
		if (navFrom == "this_loc") {
			document.getElementById("startpoint").value = "(" + Session.get("currentLocation").x +", "+Session.get("currentLocation").y+")";
		}
		else {
			document.getElementById("startpoint").value = navFrom;
		}
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

Template.graph.helpers({
	stops: function() {
		return Session.get("routeToTake");
	},
	startLoc:function() {
		return Session.get("navigateFrom");	
	},
	endLoc: function() {
		return Session.get("navigateTo");	
	},
	settings:function() {
		return {
			position:"bottom",
			limit:10,
			rules:[{
				collection:Locations,
				matchAll:true,
				field:"name",
				template:Template.suggestions
			}]
		};
	},
	stopDescription:function() {
		return this;
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

Template.graph.onCreated(function() {
	GoogleMaps.load();
	GoogleMaps.ready('navMap',function(map) {
		var marker = new google.maps.Marker({
			position: map.options.center,
			map: map.instance
		});
	});
});

Template.graph.events({
	"submit #navform": function(event){
		event.preventDefault();
		
		var starts = document.getElementById("startpoint").value;
		var ends = document.getElementById("endpoint").value;
		console.log("start " + starts);
		console.log("end "+ ends);
		var route = null;
		route = getRoute(starts, ends);

		Session.set("route",route);
		getRouteDescription(route);
		addMarkers(route);
		addRoutes(route);
	},
	"click input":function(event) {
		event.target.value = '';
	},
	"click #getCurrentLoc":function(event) {
		event.preventDefault();
		
		document.getElementById("startpoint").value = "getting current location...";
		
		navigator.geolocation.getCurrentPosition(function (position) {
			var current = new Point(position.coords.latitude, position.coords.longitude);
			Session.set("currentLocation", current);
			
			Meteor.call("searchLocations",			
			Session.get("currentLocation"),
				function(error, data) {
					if (error) {
						console.log(error);
					}
					else {
						Session.set("inLocation",data);
						document.getElementById("startpoint").value = "(" + Session.get("currentLocation").x + ", " + Session.get("currentLocation").y + ")";
					}
				}
			);
		});			
		// document.getElementById("startpoint").value = "(" + Session.get("currentLocation").x + ", " + Session.get("currentLocation").y + ")";
		
	},
});

function Point(x,y) {
	this.x = x;
	this.y = y;
}