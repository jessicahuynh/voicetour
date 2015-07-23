Template.graph.rendered = function () {
	graph = new Graph(Map.findOne());
	//console.log(graph);
	
	console.log("rednered");

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
		$("#navform").submit();
	}
	else {
		if (navTo != "" && navTo != null) {
			Session.set("navigateFrom","(" + Session.get("currentLocation").x + ", " + Session.get("currentLocation").y + ")");
			$("#navform").submit();
			console.log("submitted");
		}
	}

	//GoogleMaps.load();

	GoogleMaps.ready('navMap',function(map) {
		 console.log("test google map ready");

		// var marker1 = new google.maps.Marker({
		// 	position: new google.maps.LatLng(startstop.x,startstop.y),
		// 	icon: '/GoogleMapsMarkers/green_MarkerA.png',
		// 	map: map.instance
		// });
		// //marker1.setVisible(false);
		// var marker2 = new google.maps.Marker({
		// 	position: new google.maps.LatLng(laststop.x,laststop.y),
		// 	icon: '/GoogleMapsMarkers/red_MarkerB.png',
		// 	map:map.instance
		// });



		//marker2.setVisible(false);
		// var markerCurrent = new google.maps.Marker({
		// 	position: new google.maps.LatLng(Session.get("currentLocation").x,Session.get("currentLocation").y),
		// 	icon: '/GoogleMapsMarkers/bluedot.png',
		// 	map:map.instance
		// });

		// Tracker.autorun(function() {
		// 	var theLatLng = new google.maps.LatLng(Session.get("currentLocation").x,Session.get("currentLocation").y);
		// 	map.instance.setCenter(theLatLng);
		// 	markerCurrent.setPosition(theLatLng);
		// 	console.log("test run autorun in rendered");
		// })

		Tracker.autorun(function() {
			route = Session.get("route");

			console.log("test google map ready: " + route);
			deleteRoutes(routes);
			routes = [];
			console.log("delete route");

			var theLatLng1 = new google.maps.LatLng(startstop.x,startstop.y);
			map.instance.setCenter(theLatLng1);
			marker1.setPosition(theLatLng1);
			//marker1.setVisible(true);
			//marker1.setOptions({icon: '/GoogleMapsMarkers/green_MarkerA.png'});
			var theLatLng2 = new google.maps.LatLng(laststop.x,laststop.y);
			marker2.setPosition(theLatLng2);
			//marker2.setOptions({icon: '/GoogleMapsMarkers/red_MarkerB.png'});
			
			if (route != null){
				for(var j = 0; j<route.length - 1; j++){
					addRoutes(route[j],route[j+1],'stepMap', map,'#000000', routes);
					console.log("draw route");
				}
			}

		})

	})	

};

Template.graph.onCreated(function () {
	//Session.set("centerPoint", Point(0,0));
	route = null;
	routes = [];
	startstop = Session.get("currentLocation");
	console.log("(" + Session.get("currentLocation").x + ", " + Session.get("currentLocation").y + ")");
	laststop = Session.get("currentLocation");
	GoogleMaps.load();

	GoogleMaps.ready('navMap',function(map) {
		console.log("test google map ready");

		marker1 = new google.maps.Marker({
			position: new google.maps.LatLng(startstop.x,startstop.y),
			icon: '/GoogleMapsMarkers/green_MarkerA.png',
			map: map.instance
		});
		//marker1.setVisible(false);
		marker2 = new google.maps.Marker({
			position: new google.maps.LatLng(laststop.x,laststop.y),
			icon: '/GoogleMapsMarkers/red_MarkerB.png',
			map:map.instance
		});
	})
});

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


Template.graph.events({
	"submit #navform": function(event){
		event.preventDefault();

		var starts = document.getElementById("startpoint").value;
		var ends = document.getElementById("endpoint").value;
		console.log("start " + starts);
		console.log("end "+ ends);
		//route = null;
		route = getRoute(starts, ends);
		console.log(route);

		
		//setTimeout(function() {
			startstop = findId(route[0]);
			laststop = findId(route[route.length - 1]);
		//},3000) ;

		// session variable for steps.js
		Session.set("route",route);
		Session.set("routeForStep",route);
		Session.set("destination", ends);
		//Session.set("stepCenterPoint",route[0]);

		$("#routeTab").tab('show');
		
		getRouteDescription(route);
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
	"click #stepsButton":function(event) {
		event.preventDefault();
		Router.go('/steps');
	},
});


