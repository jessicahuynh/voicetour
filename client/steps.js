
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
	},
	current: function() {
		return Session.get("currentLocation");
	},
});

Template.steps.events({
	"click #refreshMap" : function(event) {
		if (count < (route.length - 1)){
			
			console.log("count:" + count);
			//Session.set("countForStep", count);
			getStepDescription(route);
				//middlestop = findId(route[count]);
			routesForStep[count - 1].setOptions({strokeColor: '#000000'});
			routesForStep[count].setOptions({strokeColor: '#00FFFF'});
			count ++;
				
		} else {
			alert("You reached your destination.");
		}

	},
	"click #recalMap": function(event){
		count = 0;

		Session.set("current","(" + Session.get("currentLocation").x + ", " + Session.get("currentLocation").y + ")");
		var navFrom = Session.get("current");
		var navTo = Session.get("destination");

		route = getRoute(navFrom, navTo);
		startstop = findId(route[0]);
		laststop = findId(route[route.length - 1]);
			//middlestop = findId(route[count]);

		Session.set("routeForStep", route);
		Session.set("countForStep", count);
		
		getStepDescription(route);

	}
});

Template.steps.rendered = function () {
	if ($(window).width() > 768) {
		$(".page-header").prepend("<a href='#' id='returnToList' class='back'><span class='glyphicon glyphicon-menu-left'></span></a>");
	}
	
	
	graph = new Graph(Map.findOne());


	route = Session.get("routeForStep");
	console.log("route: " + route);
	console.log("route length: " + route.length);
	startstop = findId(route[0]);
	laststop = findId(route[route.length - 1]);
	console.log("startstop:" + startstop.x + "," + startstop.y);
	console.log("laststop:" + laststop.x + "," + laststop.y);
	//middlestop = findId(route[count]);
		

	GoogleMaps.load();
	GoogleMaps.ready('stepMap',function(map){
		marker1 = new google.maps.Marker({
			position: new google.maps.LatLng(startstop.x,startstop.y),
			icon: '/GoogleMapsMarkers/green_MarkerA.png',
			map: map.instance
		});
		marker2 = new google.maps.Marker({
			position: new google.maps.LatLng(laststop.x,laststop.y),
			icon: '/GoogleMapsMarkers/red_MarkerB.png',
			map:map.instance
		});
		markerCurrent = new google.maps.Marker({
			position: new google.maps.LatLng(Session.get("currentLocation").x,Session.get("currentLocation").y),
			icon: '/GoogleMapsMarkers/bluedot.png',
			map:map.instance
		});

		Tracker.autorun(function() {
			var theLatLng = new google.maps.LatLng(Session.get("currentLocation").x,Session.get("currentLocation").y);
			map.instance.setCenter(theLatLng);
			markerCurrent.setPosition(theLatLng);
				// console.log("set center: " + middlestop.x + "," + middlestop.y);
				// var theLatLngMiddle = new google.maps.LatLng(middlestop.x,middlestop.y);
				// map.instance.setCenter(theLatLngMiddle);
			//console.log("test run autorun in rendered");
		})

		getStepDescription(route);	

		Tracker.autorun(function() {
			route = Session.get("routeForStep");
			if (route.length == 1){
				console.log("test google map ready");
				deleteRoutes(routesForStep);
				console.log("delete route");

				var theLatLngRecal = new google.maps.LatLng(Session.get("currentLocation").x,Session.get("currentLocation").y);
				map.instance.setCenter(theLatLngRecal);
				markerCurrent.setPosition(theLatLngRecal);
				var theLatLng1 = new google.maps.LatLng(startstop.x,startstop.y);
				marker1.setPosition(theLatLng1);
				var theLatLng2 = new google.maps.LatLng(laststop.x,laststop.y);
				marker2.setPosition(theLatLng2);

				// alert("you are at your destination");
			} else {

				console.log("test google map ready");
				deleteRoutes(routesForStep);
				console.log("delete route");

				var theLatLngRecal = new google.maps.LatLng(Session.get("currentLocation").x,Session.get("currentLocation").y);
				map.instance.setCenter(theLatLngRecal);
				markerCurrent.setPosition(theLatLngRecal);
				var theLatLng1 = new google.maps.LatLng(startstop.x,startstop.y);
				marker1.setPosition(theLatLng1);
				var theLatLng2 = new google.maps.LatLng(laststop.x,laststop.y);
				marker2.setPosition(theLatLng2);

				
				for(var j = 0; j<route.length - 1; j++){
					addRoutes(route[j],route[j+1],'stepMap', map,'#000000',routesForStep);
					console.log("draw route");
				}

				if (count == 0) {
			// 	console.log("ready to add blue route: " + Session.get("countForStep"));
			 		routesForStep[count].setOptions({strokeColor: '#00FFFF'});
			 	console.log("added blue route");
			 		count ++;
				}
			}	

		})
			if (count == 1) {
		// 	console.log("ready to add blue route: " + Session.get("countForStep"));
		 		routesForStep[count - 1].setOptions({strokeColor: '#00FFFF'});
		 	console.log("added blue route");
			}
	});



};

Template.steps.onCreated(function() {
	//Session.set("countForStep", count);
	count = 0;
	routesForStep = [];
});


function getStepDescription(route) {
	var r = [];
		
	if (route != null && route != undefined && route.length != 1) {
		var getToPath = "";
		
		console.log(route);
		//if there's a getTo
		if (count == 0 && Intersections.findOne({"id":route[count]}).getTo != undefined) {
			getToPath += Intersections.findOne({"id":route[count]}).getTo;
		}
		
		var thePath = Paths.findOne({"start":route[count],"end":route[count+1]});
		r.push(getToPath + " " + thePath.description);
	
		
	} else if (route.length == 1){
		r.push("You have reached your destination!");
	} else {
		r.push("We don't seem to be able to find the routing data!");
	}
	
	Session.set("step",r);
}

