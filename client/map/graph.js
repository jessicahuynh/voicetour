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
			document.getElementById("startpoint").value = Session.get("navigateFrom");
			$("#navform").submit();
			console.log("submitted");
		}
	}

};

Template.graph.onCreated(function () {
	graph = new Graph(Map.findOne());
	route = null;
	routes = [];
	startstop = null;
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

		//console.log("before start: " + Session.get ("currentLocation").x + "," + Session.get ("currentLocation").y);
		var starts = document.getElementById("startpoint").value;
		var ends = document.getElementById("endpoint").value;
		
		console.log("start " + starts);
		console.log("end "+ ends);
		
		Session.set("route",getRoute(starts, ends));
		console.log(Session.get("route"));
		
		if (Session.get("route") != null) {
			setStops();
		}
		// if it can't get the route right away, because you're not in a building
		// then delay for three seconds
		else {
			$("#loadingPanel").css("display","block");
			setTimeout(function() {
				setStops();
				$("#loadingPanel").css("display","none");
			}, 2000);

		}

		// $("#routeTab").tab('show');
	},
	"click input":function(event) {
		event.target.value = '';
	},
	"click #getCurrentLoc":function(event) {
		event.preventDefault();
		
		document.getElementById("startpoint").value = "getting current location...";
		
		// navigator.geolocation.getCurrentPosition(function (position) {
		// 	var current = new Point(position.coords.latitude, position.coords.longitude);
		// 	Session.set("currentLocation", current);
			
		// 	Meteor.call("searchLocations",			
		// 	Session.get("currentLocation"),
		// 		function(error, data) {
		// 			if (error) {
		// 				console.log(error);
		// 			}
		// 			else {
		// 				Session.set("inLocation",data);
		// 				document.getElementById("startpoint").value = "(" + Session.get("currentLocation").x + ", " + Session.get("currentLocation").y + ")";
		// 			}
		// 		}
		// 	);
		// });			
		 document.getElementById("startpoint").value = "(" + Session.get("currentLocation").x + ", " + Session.get("currentLocation").y + ")";
		
	},
	"click #stepsButton":function(event) {
		event.preventDefault();
		Session.set("prev","/navigate");
		Router.go('/steps');
	},
});

function setStops() {
	Session.set("startstop", Session.get("route")[0]);

	Session.set("laststop", Session.get("route")[Session.get("route").length - 1]);	
	
	//session variable for steps.js
	Session.set("routeForStep",Session.get("route"));
	Session.set("destination", document.getElementById("endpoint").value);
	
	getRouteDescription(Session.get("route"));
	Session.set("listenTo",Session.get("routeToTake"));
	
	$("#loadingPanel").css("display","none");

	if ($(window).width() < 769) {
		Session.set("prev","/navigate");
		Router.go('/steps');
	}		
}