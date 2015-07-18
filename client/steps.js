
count = 0;


Template.steps.helpers({
	destination: function() {
		return Session.get("destination");
	},
	stepMapOptions: function() {
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
		if (count < route.length){
			GoogleMaps.ready('stepMap',function(map){
				Session.set("stepCenterPoint",route[count]);
/*				deleteMarkers();*/
				deleteRoutes();

				// addMarkers(route[count],'stepMap', map);
				
				Tracker.autorun(function() {	
					var center = findId(Session.get("stepCenterPoint"));
					var theLatLng = new google.maps.LatLng(center.x,center.y);
					map.instance.setCenter(theLatLng);
					centerMarker.setPosition(theLatLng);
					map.instance.setZoom(20);
					console.log("test run autorun");
				})	
				// var center = findId(route[count]);
				// var theLatLng = new google.maps.LatLng(center.x,center.y);
				// map.instance.setCenter(theLatLng);
				addMarkers(route[count + 1],'stepMap', map);
				/*addMarkers(route[route.length-1],'stepMap');*/
				for(var j = 0; j<route.length - 1; j++){
					addRoutes(route[j],route[j+1],'stepMap', map, '#000000');
				}
			});
			count ++;

		} else {
			alert("you reached your destination.");
		}

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
	// if (navTo != "" && navTo != null && navFrom != null && navFrom != "") {
	// 	getRouteDescription(route);
	// 	GoogleMaps.ready('stepMap',function(map){

	// 		deleteMarkers();
	// 		deleteRoutes();

	// 		addMarkers(route[count],'stepMap', map);
	// 		/*addMarkers(route[count + 1],'stepMap');*/
	// 		addMarkers(route[route.length-1],'stepMap', map);
	// 		for(var j = 0; j<route.length - 1; j++){
	// 			addRoutes(route[j],route[j+1],'stepMap', map, '#000000');
	// 		}
	// 		var idofFirststep = findId(firststep);
	// 		var theLatLng = new google.maps.LatLng(idofFirststep.x,idofFirststep.y);
	// 		map.instance.setCenter(theLatLng);
			
	// 	});

	// }else {
	// 	alert("please enter the destination!");
	// }
};

Template.steps.onCreated(function() {
	GoogleMaps.load();
	GoogleMaps.ready('stepMap',function(map) {
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

