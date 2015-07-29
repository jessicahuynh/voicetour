
count = 0;

Template.steps.helpers({
	routeStartStop: function() {
		return Session.get("routeStartStop");
	},
	estimate:function() {
		console.log(Session.get("routeDist"));
		if (Session.get("routeToTake")[0][0] == "Y") {
				return "no walking needed"
		}
		else {
				if (Session.get("routeDist") == "" || Session.get("routeDist")== null || Session.get("routeDist") == undefined || Session.get("routeDist") == NaN) {
				return "";
			}
			else {
	
					return "about "+Math.ceil(Session.get("routeDist")*0.02)+ " minutes of walking";
				
				
			}
		}

		return "about "+Math.ceil(Session.get("routeDist")*0.02)+ " minutes of walking";
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
		event.preventDefault();
		if (count < (route.length - 2)){
			count ++;
			console.log(count);
			// getStepDescription(route);
			// if (count != 0) {
			// 	routesForStep[count - 1].setOptions({strokeColor: '#000000'});
			// }
			
			// routesForStep[count].setOptions({strokeColor: '#00FFFF'});
			Session.set("countRefresh", count);
			console.log(Session.get("countRefresh"));
			
				
		} else {
			alert("You reached your destination.");
			//count --;
		}

	},
	"click #previousMap" : function(event) {
		event.preventDefault();
		if (count > 0){
			count --;
			console.log(count);
			// getStepDescription(route);
			// if (count != route.length) {
			// 	routesForStep[count + 1].setOptions({strokeColor: '#000000'});
			// }
			
			// routesForStep[count].setOptions({strokeColor: '#00FFFF'});
			Session.set("countPrev", count);
			console.log(Session.get("countPrev"));
		} else {
			alert("You are at the first step.");
			//count ++;
		}

	},
	"click #recalMap": function(event){
		event.preventDefault();
		count = 0;
		//console.log("count in recal: " + count);
		for(var i = 0; i<route.length - 1; i++){
			routesForStep[count].setOptions({strokeColor: '#00FFFF'});
			console.log("change route back to black");
		}

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
	Session.set("pageTitle","Directions");
	Session.set("navigateFrom","")
	Session.set("navigateTo","");
	
	if ($(window).width() > 768) {
		$(".page-header").prepend("<a href='#' id='returnToList' class='back'><span class='glyphicon glyphicon-menu-left'></span></a>");
	}
	
	
	//graph = new Graph(Map.findOne());


	route = Session.get("routeForStep");
	console.log("route: " + route);
	console.log("route length: " + route.length);
	startstop = findId(route[0]);

	//nextstop = findId(route[count]);

	laststop = findId(route[route.length - 1]);
	console.log("startstop:" + startstop.x + "," + startstop.y);
	console.log("laststop:" + laststop.x + "," + laststop.y);
	//middlestop = findId(route[count]);
	
	getStepDescription(route);	

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
			console.log("in the autorun for routesForStep : " + Session.get("routeForStep"));
			route = Session.get("routeForStep");
			if (route.length == 1){
				//console.log("test google map ready");
				deleteRoutes(routesForStep);
				//console.log("delete route");

				var theLatLngRecal = new google.maps.LatLng(Session.get("currentLocation").x,Session.get("currentLocation").y);
				map.instance.setCenter(theLatLngRecal);
				markerCurrent.setPosition(theLatLngRecal);
				var theLatLng1 = new google.maps.LatLng(startstop.x,startstop.y);
				marker1.setPosition(theLatLng1);
				var theLatLng2 = new google.maps.LatLng(laststop.x,laststop.y);
				marker2.setPosition(theLatLng2);

				// alert("you are at your destination");
			} else {

				//console.log("test google map ready");
				deleteRoutes(routesForStep);
				routesForStep = [];
				//console.log("delete route");

				var theLatLngRecal = new google.maps.LatLng(Session.get("currentLocation").x,Session.get("currentLocation").y);
				map.instance.setCenter(theLatLngRecal);
				markerCurrent.setPosition(theLatLngRecal);
				var theLatLng1 = new google.maps.LatLng(startstop.x,startstop.y);
				marker1.setPosition(theLatLng1);
				var theLatLng2 = new google.maps.LatLng(laststop.x,laststop.y);
				marker2.setPosition(theLatLng2);

				
				for(var j = 0; j<route.length - 1; j++){
					if (j != count){
						addRoutes(route[j],route[j+1],'stepMap', map,'#000000',routesForStep);
						console.log("draw route");
					} else {
						addRoutes(route[j],route[j+1],'stepMap', map,'#00FFFF',routesForStep);;
					}

				}

			// 	if (count == 0) {
			// // 	console.log("ready to add blue route: " + Session.get("countForStep"));
			// 		console.log("count before blue: " + count);
			//  		routesForStep[count].setOptions({strokeColor: '#00FFFF'});
			//  		//console.log("added blue route");
			//  		//count ++;
			// 	}
			}	

		})

		Tracker.autorun(function() {
			console.log("in the autorun now for countRefresh:" + Session.get("countRefresh"));
			var countRefresh = Session.get("countRefresh");
			getStepDescription(route);
			// if (countRefresh != 0 && routesForStep != []) {
			// 	routesForStep[countRefresh - 1].setOptions({strokeColor: '#000000'});
			// }
			
			// routesForStep[countRefresh].setOptions({strokeColor: '#00FFFF'});
			deleteRoutes(routesForStep);
			routesForStep = [];
			for(var j = 0; j<route.length - 1; j++){
				if (j != countRefresh){
					addRoutes(route[j],route[j+1],'stepMap', map,'#000000',routesForStep);
					console.log("draw route");
				} else {
					addRoutes(route[j],route[j+1],'stepMap', map,'#00FFFF',routesForStep);;
				}

			}
		})


		Tracker.autorun(function() {
			console.log("in the autorun now for countPrev:" + Session.get("countPrev"));
			var countPrev = Session.get("countPrev");
			getStepDescription(route);
			// if (countPrev != route.length && routesForStep != []) {
			// 	routesForStep[countPrev + 1].setOptions({strokeColor: '#000000'});
			// }
			
			// routesForStep[countPrev].setOptions({strokeColor: '#00FFFF'});
			deleteRoutes(routesForStep);
			routesForStep = [];
			for(var j = 0; j<route.length - 1; j++){
				if (j != countPrev){
					addRoutes(route[j],route[j+1],'stepMap', map,'#000000',routesForStep);
					console.log("draw route");
				} else {
					addRoutes(route[j],route[j+1],'stepMap', map,'#00FFFF',routesForStep);;
				}

			}
		})



		// 	if (count == 1) {
		// // 	console.log("ready to add blue route: " + Session.get("countForStep"));
		//  		routesForStep[count - 1].setOptions({strokeColor: '#00FFFF'});
		//  	//console.log("added blue route");
		// 	}

		Tracker.autorun(function() {
			//console.log("currentLocation changes");
			var theLatLng = new google.maps.LatLng(Session.get("currentLocation").x,Session.get("currentLocation").y);
			map.instance.setCenter(theLatLng);
			markerCurrent.setPosition(theLatLng);
				// console.log("set center: " + middlestop.x + "," + middlestop.y);
				// var theLatLngMiddle = new google.maps.LatLng(middlestop.x,middlestop.y);
				// map.instance.setCenter(theLatLngMiddle);
			//console.log("test run autorun in rendered");


			// nextstop = findId(route[count]);
			// if (autoNextStep(nextstop) == true) {
			// 	if (count < (route.length - 2)){
			// 		count ++;
			// 		//console.log("count:" + count);
			// 		//Session.set("countForStep", count);
			// 		getStepDescription(route);
			// 			//middlestop = findId(route[count]);
			// 		if (count != 0) {
			// 			routesForStep[count - 1].setOptions({strokeColor: '#000000'});
			// 		}
					
			// 		routesForStep[count].setOptions({strokeColor: '#00FFFF'});
							
			// 	} else {
			// 		alert("You reached your destination.");
			// 		//count --;
			// 	}

			// }

		})

	});



};

Template.steps.onCreated(function() {
	//Session.set("countForStep", count);
	count = 0;
	Session.set("countRefresh", count);
	Session.set("countPrev", count);
	routesForStep = [];
	graph = new Graph(Map.findOne());

});

// function autoNextStep(nextStop){
// 	var tfnext = false;
// 	var currentForAuto = Session.get("currentLocation");
// 	Meteor.call("distance", Session.get("currentLocation"), tfnext,
// 		function(error,data) {
// 			if (error) {
// 				console.log(error);
// 			}
// 			else {

// 				if (Session.get("unit") == "m"){
// 					if (Math.floor(data) < 2){
// 						tfnext = true;
// 					}
// 				} else {
// 					if ((Math.floor(data) / 3.28) < 2){
// 						tfnext = true;
// 					}
// 				}
// 			}
// 		});
// 	return tfnext;
// 	// Session.set("tfnext", tfnext);
// }


function getStepDescription(route) {
	var r = [];
		
	if (route != null && route != undefined && route.length != 1) {
		var getToPath = "";
		
		//console.log(route);
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
	Session.set("listenTo",r);
}

