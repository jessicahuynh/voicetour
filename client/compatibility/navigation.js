

function getRoute(starts, ends) {
		// if it starts with a (, it's your current location
		if (starts[0] == "(") {
			// if you're in a building, return that building and go on as before
			if (Session.get("inLocation")[1] == "in") {
				starts = Locations.findOne({"name":Session.get("inLocation")[0].name}).name;
				//console.log(starts);
				
				if (Session.get("inLocation")[0].name == ends) {
					route = ["You're already here!"];
				}
				else {
					route = getShortestRoute(Locations.findOne({"name":starts}).icrossings,Locations.findOne({"name":starts}).entrances,Locations.findOne({"name":ends}).entrances);
				}
				
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
									
									route = getShortestRoute(null,[nearestIntersection],Locations.findOne({"name":ends}).entrances);
									//console.log("*" + route);
									if (route != null) {
										getRouteDescription(route);
										Session.set("route",route);
									}
								}
							}
						});
				});				
				
			}
		}

		// a location searched for
		else {
			if (starts == ends) {
					route = ["You're already here!"];
				}
				else {
					route = getShortestRoute(Locations.findOne({"name":starts}).icrossings,Locations.findOne({"name":starts}).entrances,Locations.findOne({"name":ends}).entrances);
				}
		}
		return route;
}

function getShortestRoute(icrossings,startEntrances,endEntrances) {
	var theShortestDist = 1000000000;
	var shortestRoute = null;
	
	if (icrossings != undefined && icrossings != null && icrossings.length > 0) {
		startEntrances = icrossings;
	}
	
	if (startEntrances != undefined && endEntrances != undefined) {
		shortestRoute = graph.findShortestPath(startEntrances[0],endEntrances[0]);
		
		var currentRouteDist = 0;
	
		if (startEntrances.length > 0 && endEntrances.length > 0) {
			startEntrances.forEach(function (startEntrance) {
				endEntrances.forEach(function (endEntrance) {
					var currentRoute = graph.findShortestPath(startEntrance, endEntrance);
	
					// if there's no route between the entrances, skip
					if (currentRoute != null) {
						console.log(currentRoute);
						for (var i = 0; i < currentRoute.length - 2; i++) {
							currentRouteDist += Paths.findOne({ "start": currentRoute[i], "end": currentRoute[i + 1] }).distance;
						}
		
						// console.log(currentRoute + " " + currentRouteDist);
		
						if (currentRouteDist < theShortestDist) {
							theShortestDist = currentRouteDist;
							shortestRoute = currentRoute;
							
							// for the shortest path
							Session.set("routeDist",theShortestDist);
						}
					}
	
					currentRouteDist = 0;
				});
			});
		}
	}	

	//console.log(shortestRoute);
	return shortestRoute;
}


function findId(idToLookFor) {
	var all_points=Intersections.find().fetch();
    for (var i = 0; i < all_points.length; i++) {
        if (all_points[i].id == idToLookFor) {
            return(all_points[i].coordinate);
        }
    }
}

var markers = [];

function addMarkers(loc,mapOpt, map){
	
	var point = findId(loc);
	//GoogleMaps.ready(mapOpt,function(map) {
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(point.x,point.y),
			map:map.instance
		});
		markers.push(marker);
	//})

}

/*function moveMarkers(loc, mapOpt, map){
	
	var point = findId(loc);
	//GoogleMaps.ready(mapOpt,function(map) {
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(point.x,point.y),
			map:map.instance
		});
		markers.push(marker);
	//})

}*/

function deleteMarkers(){
	for(var i=0;i<markers.length;i++){
		markers[i].setMap(null);
	}
	markers= [];
}

//var routes = [];



function addRoutes(startloc, endloc, mapOpt, map, lineColor, routes){		
	var start= findId(startloc);
	var end = findId(endloc);

	//GoogleMaps.ready(mapOpt,function(map){
			var theRoute = [
				new google.maps.LatLng(start.x,start.y),
				new google.maps.LatLng(end.x,end.y),
			];
			// var contentString = "<b>" + start + "</b> to <b>" + end+"</b>: "+description+"<br>";

			var drawr = new google.maps.Polyline({
				path:theRoute,
				geodesic:true,
				strokeColor: lineColor,
			    strokeOpacity: 1.0,
			    strokeWeight: 4,
			    map: map.instance
			});
			routes.push(drawr);
	//})

}

function deleteRoutes(routes){
	for(var j=0;j<routes.length;j++){
		routes[j].setMap(null);
	}
	routes = [];
}

function getRouteDescription(route) {
	var r = [];
	
	// push getTo of starting point if it exists
	if (route[0] == "You're already here!") {
		Session.set("routeToTake",route);
	}
	else {
		if (Intersections.findOne({"id":route[0]}).getTo != undefined) {
			r.push(Intersections.findOne({"id":route[0]}).getTo);
		}
			
		if (route != null && route != undefined) {
			for (var i = 0; i < route.length - 1; i++) {
				var thePath = Paths.findOne({"start":route[i],"end":route[i+1]});
				r.push(thePath.description);
			}
		}
		else {
			r.push("We don't seem to be able to get the routing data between these two!");
		}
		
		Session.set("routeToTake",r);
	}
	
}

function Point(x,y) {
	this.x = x;
	this.y = y;
}
