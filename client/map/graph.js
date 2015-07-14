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
		
		// if it starts with a (, it's your current location
		if (starts[0] == "(") {
			// if you're in a building, return that building and go on as before
			if (Session.get("inLocation")[1] == "in") {
				starts = Locations.findOne({"name":Session.get("inLocation")[0].name}).name;
				console.log(starts);
				
				route = getShortestRoute(Locations.findOne({"name":starts}).entrances,Locations.findOne({"name":ends}).entrances);
			}
			// else, go from the nearest intersection
			else {
				var nearestIntersection = null;
				var distNearestIntersection = 1000000000;
				
				var i = Intersections.find().fetch();
				i.forEach(function(intersection) {
					Meteor.call("distance",
						Session.get("currentLocation"),
						intersection.coordinate,
						function(error,data) {
							if (error) {
								console.log(error);
							}
							else {
								if (data < distNearestIntersection) {
									distNearestIntersection = data;
									nearestIntersection = intersection.id;
									
									route = getShortestRoute([nearestIntersection],Locations.findOne({"name":ends}).entrances);
									console.log("*" + route);
									if (route != null) {
										getRouteDescription(route);
									}
								}
							}
						});
				});				
				
			}
		}
		// a location searched for
		else {
			route = getShortestRoute(Locations.findOne({"name":starts}).entrances,Locations.findOne({"name":ends}).entrances);
		}
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
		
	}

});

function getShortestRoute(startEntrances,endEntrances) {
	var theShortestDist = 1000000000;
	var shortestRoute = null;
	if (startEntrances != undefined && endEntrances != undefined) {
		shortestRoute = graph.findShortestPath(startEntrances[0],endEntrances[0]);
		
		var currentRouteDist = 0;
	
		if (startEntrances.length > 0 && endEntrances.length > 0) {
			startEntrances.forEach(function (startEntrance) {
				endEntrances.forEach(function (endEntrance) {
					var currentRoute = graph.findShortestPath(startEntrance, endEntrance);
	
					// if there's no route between the entrances, skip
					if (currentRoute != null) {
						for (var i = 0; i < currentRoute.length - 2; i++) {
							currentRouteDist += Paths.findOne({ "start": currentRoute[i], "end": currentRoute[i + 1] }).distance;
						}
		
						// console.log(currentRoute + " " + currentRouteDist);
		
						if (currentRouteDist < theShortestDist) {
							theShortestDist = currentRouteDist;
							shortestRoute = currentRoute;
						}
					}
	
					currentRouteDist = 0;
				});
			});
		}
	}

	console.log(shortestRoute);
	return shortestRoute;
}

function addMarkers(route){
	var all_points=Intersections.find().fetch();
	function findId(data, idToLookFor) {
	    for (var i = 0; i < all_points.length; i++) {
	        if (all_points[i].id == idToLookFor) {
	            return(all_points[i].coordinate);
	        }
	    }
	}

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

function addRoutes(route){
	var all_points=Intersections.find().fetch();
	function findId(data, idToLookFor) {
	    for (var i = 0; i < all_points.length; i++) {
	        if (all_points[i].id == idToLookFor) {
	            return(all_points[i].coordinate);
	        }
	    }
	}

	GoogleMaps.ready('navMap',function(map){
		for(var j = 0; j<route.length; j++){
			var start= findId(all_points,route[j]);
			var end = findId(all_points,route[j+1]);
			var theRoute = [
				new google.maps.LatLng(start.x,start.y),
				new google.maps.LatLng(end.x,end.y),
			];
			// var contentString = "<b>" + start + "</b> to <b>" + end+"</b>: "+description+"<br>";

			var r = new google.maps.Polyline({
				path:theRoute,
				geodesic:true,
				strokeColor: '#000000',
			    strokeOpacity: 1.0,
			    strokeWeight: 4
			});
				
			r.setMap(map.instance);

			// google.maps.event.addListener(route, 'click', function () {
			//   	new google.maps.InfoWindow({
			//       	content: "description",
			//       	maxWidth: 200,
			// 	  	position:new google.maps.LatLng(start.x,start.y)
			//   	}).open(map.instance,this);
			// });  
		}
	})

}

function getRouteDescription(route) {
	var r = [];
	
	if (document.getElementById("startpoint").value[0] == "(") {
			// if you're in a building, return that building and go on as before
			if (Session.get("inLocation")[1] == "in") {
				r.push("You're currently in " + Session.get("inLocation")[0].name);
			}
			else {
				r.push("You're currently at " + document.getElementById("startpoint").value +", located near "+Session.get("inLocation")[0].name);
			}
	}
	else {
		r.push("You're starting from " + document.getElementById("startpoint").value);
	}
		
	if (route != null && route != undefined) {
		for (var i = 0; i < route.length - 1; i++) {
			var thePath = Paths.findOne({"start":route[i],"end":route[i+1]});
			r.push(thePath.description);
		}
	}
	else {
		r.push("We don't seem to be able to find the routing data!");
	}
	
	r.push("Your ending location is " + document.getElementById("endpoint").value);
	
	Session.set("routeToTake",r);
}

function Point(x,y) {
	this.x = x;
	this.y = y;
}