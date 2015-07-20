
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
			//GoogleMaps.ready('stepMap',function(map){

				// //map.instance.setZoom(20);
				// Tracker.autorun(function() {
				// 	var theLatLng = new google.maps.LatLng(Session.get("currentLocation").x,Session.get("currentLocation").y);
				// 	map.instance.setCenter(theLatLng);
				// 	marker.setPosition(theLatLng);
				// 	console.log("test run autorun");
				// })

			//});
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
		// console.log(navFrom);
		route = getRoute(navFrom, navTo);
		startstop = findId(route[0]);
		laststop = findId(route[route.length - 1]);
		getStepDescription(route);

		//GoogleMaps.load();
		GoogleMaps.ready('stepMap',function(map){
			console.log("test google map ready");
			deleteRoutes();

			//Tracker.autorun(function() {	
					var theLatLngCurrent = new google.maps.LatLng(Session.get("currentLocation").x,Session.get("currentLocation").y);
					map.instance.setCenter(theLatLngRecal);
					markerCurrent.setPosition(theLatLngRecal);
					var theLatLng1 = new google.maps.LatLng(startstop.x,startstop.y);
					marker1.setPosition(theLatLng1);
					var theLatLng2 = new google.maps.LatLng(laststop.x,laststop.y);
					marker2.setPosition(theLatLng2);
					//map.instance.setZoom(15);
					console.log("test run autorun");
			//})	

			for(var j = 0; j<route.length - 1; j++){
				addRoutes(route[j],route[j+1],'stepMap', map,'#000000');
				console.log("draw route");
			}

		//google.maps.event.addDomListener(window, 'load', initialize);	
		});
	}
});

Template.steps.rendered = function () {
	//graph = new Graph(Map.findOne());

	route = Session.get("route");
	console.log("route: " + route);
	console.log("route length: " + route.length);
	startstop = findId(route[0]);
	laststop = findId(route[route.length - 1]);
	getStepDescription(route);	

	GoogleMaps.load();
	GoogleMaps.ready('stepMap',function(map){
		marker1 = new google.maps.Marker({
			position: new google.maps.LatLng(startstop.x,startstop.y),
			map: map.instance
		});
		marker2 = new google.maps.Marker({
			position: new google.maps.LatLng(laststop.x,laststop.y),
			map:map.instance
		});
		markerCurrent = new google.maps.Marker({
			position: new google.maps.LatLng(Session.get("currentLocation").x,Session.get("currentLocation").y),
			map:map.instance
		});

		for(var j = 0; j<route.length - 1; j++){
			addRoutes(route[j],route[j+1],'stepMap', map, '#000000');
		}

		//map.instance.setZoom(20);
		Tracker.autorun(function() {
			var theLatLng = new google.maps.LatLng(Session.get("currentLocation").x,Session.get("currentLocation").y);
			//map.instance.setCenter(theLatLng);
			markerCurrent.setPosition(theLatLng);
			console.log("test run autorun in rendered");
		})

		console.log("ready to add blue route");
		Tracker.autorun(function() {
		routes[Session.get("countForStep")].setOptions({strokeColor: '#00FFFF'});
		})
		console.log("added blue route");

	});

};

//Template.steps.onCreated(function() {
	
	// route = Session.get("route");
	// console.log(route);
	// startstop = findId(route[0]);
	// laststop = findId(route[route.length - 1]);
	// getStepDescription(route);	

	// GoogleMaps.load();
	// GoogleMaps.ready('stepMap',function(map) {
	// 	marker1 = new google.maps.Marker({
	// 		position: map.options.center,
	// 		map: map.instance
	// 	});
	// 	marker2 = new google.maps.Marker({
	// 		position: new google.maps.LatLng(laststop.x,laststop.y),
	// 		map:map.instance
	// 	});
	// 	markerCurrent = new google.maps.Marker({
	// 		position: new google.maps.LatLng(Session.get("currentLocation").x,Session.get("currentLocation").y),
	// 		map:map.instance
	// 	});

	// 	for(var j = 0; j<route.length - 1; j++){
	// 		addRoutes(route[j],route[j+1],'stepMap', map, '#000000');
	// 	}
	// });
//});


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

