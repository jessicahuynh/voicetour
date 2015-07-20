
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
				zoom:13
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
			Session.set("countForStep", count);
			getStepDescription(route);
				
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
		
		Session.set("route", route);

		Session.set("countForStep", count);
		startstop = findId(route[0]);
		laststop = findId(route[route.length - 1]);
		getStepDescription(route);

	}
});

Template.steps.rendered = function () {
	graph = new Graph(Map.findOne());


	route = Session.get("route");
	console.log("route: " + route);
	console.log("route length: " + route.length);
	startstop = findId(route[0]);
	laststop = findId(route[route.length - 1]);
		

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
			console.log("test run autorun in rendered");
		})



		Tracker.autorun(function() {
			route = Session.get("route");

			console.log("test google map ready");
			deleteRoutes();
			console.log("delete route");

			var theLatLngRecal = new google.maps.LatLng(Session.get("currentLocation").x,Session.get("currentLocation").y);
			map.instance.setCenter(theLatLngRecal);
			markerCurrent.setPosition(theLatLngRecal);
			var theLatLng1 = new google.maps.LatLng(startstop.x,startstop.y);
			marker1.setPosition(theLatLng1);
			var theLatLng2 = new google.maps.LatLng(laststop.x,laststop.y);
			marker2.setPosition(theLatLng2);
			
			for(var j = 0; j<route.length - 1; j++){
				addRoutes(route[j],route[j+1],'stepMap', map,'#000000');
				console.log("draw route");
			}

		})

		 
		Tracker.autorun(function() {
			console.log("ready to add blue route: " + Session.get("countForStep"));
			routes[Session.get("countForStep")].setOptions({strokeColor: '#00FFFF'});
			console.log("added blue route");
			count ++;
		})

		getStepDescription(route);
		
	});



};

Template.steps.onCreated(function() {
	Session.set("countForStep", count);
});


function getStepDescription(route) {
	var r = [];
		
	if (route != null && route != undefined) {
		var thePath = Paths.findOne({"start":route[count],"end":route[count+1]});
		r.push(thePath.description);
	}
	else {
		r.push("We don't seem to be able to find the routing data!");
	}
	
	Session.set("step",r);
}

