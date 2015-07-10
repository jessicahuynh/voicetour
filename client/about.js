Template.about.helpers({
	dataMapOptions: function() {
		if (GoogleMaps.loaded()) {
			//console.log(Session.get("currentLocation").x,Session.get("currentLocation").y);
			return {
				center: new google.maps.LatLng(42.367014, -71.258943), // somewhere in Volen
				zoom:16
			};
		}
	}
});

Template.about.onCreated(function() {
	GoogleMaps.load();
	GoogleMaps.ready('dataMap',function(map) {
		/* POINTS */
		var outsideCrossings = Intersections.find({"type":"crossing"}).fetch();
		outsideCrossings.forEach(function(point) {
			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(point.coordinate.x,point.coordinate.y),
				map:map.instance,
				title:point.id,
				icon:'/GoogleMapsMarkers/red_MarkerC.png'
			});
		});
		
		var outsideEntrances = Intersections.find({"type":"entrance"}).fetch();
		outsideEntrances.forEach(function(point) {
			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(point.coordinate.x,point.coordinate.y),
				map:map.instance,
				title:point.id,
				icon:'/GoogleMapsMarkers/red_MarkerE.png'
			});
		});
		
		var insideCrossings = Intersections.find({"type":"icrossing"}).fetch();
		insideCrossings.forEach(function(point) {
			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(point.coordinate.x,point.coordinate.y),
				map:map.instance,
				title:point.id,
				icon:'/GoogleMapsMarkers/yellow_MarkerC.png'
			});
		});
		
		var insideEntrances = Intersections.find({"type":"ientrance"}).fetch();
		insideEntrances.forEach(function(point) {
			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(point.coordinate.x,point.coordinate.y),
				map:map.instance,
				title:point.id,
				icon:'/GoogleMapsMarkers/yellow_MarkerE.png'
			});
		});
		
		/* ROUTING */
		var thePaths = Paths.find().fetch();
		thePaths.forEach(function(path) {	  
			var start = Intersections.findOne({"id":path.start});
			var end = Intersections.findOne({"id":path.end});
			var theRoute = [
				new google.maps.LatLng(start.coordinate.x,start.coordinate.y),
				new google.maps.LatLng(end.coordinate.x,end.coordinate.y)	
			];
			var route = new google.maps.Polyline({
				path:theRoute,
				geodesic:true,
				strokeColor: '#00FF00',
			    strokeOpacity: 1.0,
			    strokeWeight: 3,
				popUpText:new String("Starting from " + path.start + " to " + path.end+": "+path.description)
			});
			
			route.setMap(map.instance);
			
			google.maps.event.addListener(route, 'click', function (event) {
			  alert(this.popUpText);
			});  
		});
		
		/* BUILDINGS */
		var theLocs = Locations.find().fetch();
		for (var i = 0; i < theLocs.length; i++) {
			var coords = [];
			var locCoords = theLocs[i].coordinates;
			locCoords.forEach(function(coord) {
				coords.push(new google.maps.LatLng(coord.x,coord.y));
			});
			// repeat the first to close it up
			coords.push(new google.maps.LatLng(locCoords[0].x,locCoords[0].y));
			
			var polygon = new google.maps.Polygon({
				paths: coords,
			    strokeColor: '#0000FF',
			    strokeOpacity: 0.8,
			    strokeWeight: 3,
			    fillColor: '#0000FF',
			    fillOpacity: 0.35,
				name:theLocs[i].name
			});
			
			polygon.setMap(map.instance);
			
			google.maps.event.addListener(polygon, 'click', function (event) {
			  alert(this.name);
			});  
		}
	});
});