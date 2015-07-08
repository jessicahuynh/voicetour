Template.graph.rendered = function () {
	graph = new Graph(Map.findOne());
	console.log(graph);	
	
	var navTo = Session.get("navigateTo");
	console.log(navTo);
	if (navTo != "" && navTo != null) {
		Session.set("navigateTo","");
		document.getElementById("endpoint").value = navTo;
	}
};

Template.graph.helpers({
	stops: function() {
		return Session.get("routeToTake");
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
	}
});

Template.graph.events({
	"submit #navform": function(event){

		event.preventDefault();
		
		var starts = document.getElementById("startpoint").value;
		var ends = document.getElementById("endpoint").value;
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
									//console.log("*" + route);
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
	},
	"click input":function(event) {
		event.target.value = '';
	},
	"click #getCurrentLoc":function(event) {
		event.preventDefault();
		
		document.getElementById("startpoint").value = "getting current location...";
		
				
		document.getElementById("startpoint").value = "(" + Session.get("currentLocation").x + ", " + Session.get("currentLocation").y + ")";

		
		Meteor.call("searchLocations",			
			Session.get("currentLocation"),
			function(error, data) {
				if (error) {
					console.log(error);
				}
				else {
					Session.set("inLocation",data);
					// console.log(data);
				}
			}
		);
	}

});

function getShortestRoute(startEntrances,endEntrances) {
	var theShortestDist = 1000000000;
	var shortestRoute = null;
	if (startEntrances != undefined && endEntrances != undefined) {
		shortestRoute = graph.findShortestPath(startEntrances[0],endEntrances[0]);
		
		//console.log(startEntrances[0] + " " + shortestRoute + " " + endEntrances[0]);
		
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

	return shortestRoute;
}

function getRouteDescription(route) {
	var r = [];
	
	if (document.getElementById("startpoint").value[0] == "(") {
			// if you're in a building, return that building and go on as before
			if (Session.get("inLocation")[1] == "in") {
				r.push("You're currently at " + document.getElementById("startpoint").value +", located in " + Session.get("inLocation")[0].name);
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