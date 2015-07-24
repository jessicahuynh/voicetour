Template.graph.rendered = function () {
	Session.set("pageTitle","Navigate");
	$("#searchForm").hide();
	
	//graph = new Graph(Map.findOne());
	/*console.log(graph);	*/
	
	Session.set("listenTo","Enter a start and end location to get started!");
	
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

};

Template.graph.onCreated(function () {
	//Session.set("centerPoint", Point(0,0));
	graph = new Graph(Map.findOne());
	route = null;
	routes = [];
	startstop = null;
	//console.log("(" + Session.get("currentLocation").x + ", " + Session.get("currentLocation").y + ")");
	laststop = null;

	GoogleMaps.load();

	GoogleMaps.ready('navMap',function(map) {
		console.log("test google map ready");

		var marker1 = new google.maps.Marker({
			position: new google.maps.LatLng(Session.get("currentLocation").x, Session.get("currentLocation").y),
			icon: '/GoogleMapsMarkers/green_MarkerA.png',
			map: map.instance
		});

		var marker2 = new google.maps.Marker({
			position: new google.maps.LatLng(Session.get("currentLocation").x, Session.get("currentLocation").y),
			icon: '/GoogleMapsMarkers/red_MarkerB.png',
			map:map.instance
		});

		Tracker.autorun(function() {
			route = Session.get("route");

			console.log("test google map ready: " + route);
			deleteRoutes(routes);
			routes = [];
			console.log("delete route");

			
			if (route != null){
				for(var j = 0; j<route.length - 1; j++){
					addRoutes(route[j],route[j+1],'stepMap', map,'#000000', routes);
					console.log("draw route");
				}
			}

		})

		Tracker.autorun(function() {
			console.log("auto run startstop: " + startstop);
			startstop = Session.get("startstop");
			if (startstop != null) {

				var startstopCor = findId(startstop);
				var theLatLng1 = new google.maps.LatLng(startstopCor.x,startstopCor.y);
				map.instance.setCenter(theLatLng1);
				marker1.setPosition(theLatLng1);
			}

			console.log("move marker A");
		})	

		Tracker.autorun(function() {
			console.log("auto run laststop: " + laststop);
			laststop = Session.get("laststop");
			if (laststop != null) {
				var laststopCor = findId(laststop);
				var theLatLng2 = new google.maps.LatLng(laststopCor.x,laststopCor.y);
				marker2.setPosition(theLatLng2);	
			}
			console.log("move marker B");
		})

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

		// route = getRoute(starts, ends, function () {

		// 	console.log(route);
		// 	Session.set("route",route);

		// 	//setTimeout(function() {
		// 		startstop = route[0];
		// 		//console.log("startstop: " + startstop);
		// 		Session.set("startstop", startstop);
		// 		//console.log("set startstop");
		// 		laststop = route[route.length - 1];
		// 		//console.log("laststop: " + laststop);
		// 		Session.set("laststop", laststop);
		// 		//console.log("set laststop");
		// 	//},3000) ;


		// 	//session variable for steps.js
		// 	Session.set("routeForStep",route);
		// 	Session.set("destination", ends);
			
		// 	getRouteDescription(route);
		// 	Session.set("listenTo",Session.get("routeToTake"));

		// 	$("#routeTab").tab('show');

		// });

		
		route = getRoute(starts, ends);
		console.log(route);
		Session.set("route",route);

		//setTimeout(function() {
			startstop = route[0];
			//console.log("startstop: " + startstop);
			Session.set("startstop", startstop);
			//console.log("set startstop");
			laststop = route[route.length - 1];
			//console.log("laststop: " + laststop);
			Session.set("laststop", laststop);
			//console.log("set laststop");
		//},3000) ;


		//session variable for steps.js
		Session.set("routeForStep",route);
		Session.set("destination", ends);
		
		getRouteDescription(route);
		Session.set("listenTo",Session.get("routeToTake"));

		if ($(window).width() < 768) {
			event.preventDefault();
			Session.set("prev","/navigate");
			Router.go('/steps');
		}

		// $("#routeTab").tab('show');
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
		Session.set("prev","/navigate");
		Router.go('/steps');
	},
});
