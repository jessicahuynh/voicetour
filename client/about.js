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
	});
});