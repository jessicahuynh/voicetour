Template.debugger.helpers({
	dataMapOptions: function() {
		if (GoogleMaps.loaded()) {
			//console.log(Session.get("currentLocation").x,Session.get("currentLocation").y);
			return {
				center: new google.maps.LatLng(42.367014, -71.258943), // somewhere in Volen
				zoom:17
			};
		}
	},
	loc: function() {
		return Locations.find({"entrances":undefined}).fetch();
	},
	numPoints: function() {
		return Intersections.find().count();
	},
	numEntrances: function() {
		return Intersections.find({"type":"entrance"}).count()+Intersections.find({"type":"ientrance"}).count();
	},
	numIEntrances: function() {
		return Intersections.find({"type":"ientrance"}).count();
	},
	numCrossings:function() {
		return Intersections.find({"type":"crossing"}).count()+Intersections.find({"type":"icrossing"}).count();
	},
	numICrossings:function() {
		return Intersections.find({"type":"icrossing"}).count();
	},
	numLocs:function() {
		return Locations.find().count();
	},
	numPaths:function() {
		return Paths.find().count();
	}
});

Template.debugger.rendered = function() {
	Session.set("pageTitle","Debugger");
	
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
			
			putIMarker(point,map,marker);
		});
		
		var outsideEntrances = Intersections.find({"type":"entrance"}).fetch();
		outsideEntrances.forEach(function(point) {
			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(point.coordinate.x,point.coordinate.y),
				map:map.instance,
				title:point.id,
				icon:'/GoogleMapsMarkers/red_MarkerE.png'
			});
			
			putIMarker(point,map,marker);
		});
		
		var insideCrossings = Intersections.find({"type":"icrossing"}).fetch();
		insideCrossings.forEach(function(point) {
			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(point.coordinate.x,point.coordinate.y),
				map:map.instance,
				title:point.id,
				icon:'/GoogleMapsMarkers/yellow_MarkerC.png'
			});
			
			putIMarker(point,map,marker);
		});
		
		var insideEntrances = Intersections.find({"type":"ientrance"}).fetch();
		insideEntrances.forEach(function(point) {
			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(point.coordinate.x,point.coordinate.y),
				map:map.instance,
				title:point.id,
				icon:'/GoogleMapsMarkers/yellow_MarkerE.png'
			});
			
			putIMarker(point,map,marker);
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
			
			var contentString = "<b>" + path.start + "</b> to <b>" + path.end+"</b>: "+path.description+"<br>";
			var reverse = Paths.findOne({"start":path.end,"end":path.start});
			if (reverse != undefined) {
				contentString+="<b>" + path.end + "</b> to <b>" + path.start+"</b>: "+reverse.description;
			}
			
			var route = new google.maps.Polyline({
				path:theRoute,
				geodesic:true,
				strokeColor: '#00FF00',
			    strokeOpacity: 1.0,
			    strokeWeight: 4
			});
			
			route.setMap(map.instance);
			
			google.maps.event.addListener(route, 'click', function () {
			  new google.maps.InfoWindow({
			      content: contentString,
			      maxWidth: 200,
				  position:new google.maps.LatLng(start.coordinate.x,start.coordinate.y)
			  }).open(map.instance,this);
			});  
		});
		
		/* BUILDINGS */
		var theLocs = Locations.find().fetch();
		for (var i = 0; i < theLocs.length; i++) {
			if (theLocs[i].coordinates.length > 1) {
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
					index:i
				});
				
				polygon.setMap(map.instance);
				
				google.maps.event.addListener(polygon, 'click', function () {
					new google.maps.InfoWindow({
				      content: theLocs[this.index].nickname + " (" + theLocs[this.index].name + ")<br>Entrances: "+theLocs[this.index].entrances+"<br>I Crossings: "+theLocs[this.index].icrossings,
				      maxWidth: 200,
					  position:new google.maps.LatLng(theLocs[this.index].coordinates[0].x,theLocs[this.index].coordinates[0].y)
				  }).open(map.instance,this);
				});  
			}
			else {
				var marker = new google.maps.Marker({
					position: new google.maps.LatLng(theLocs[i].coordinates[0].x,theLocs[i].coordinates[0].y),
					map:map.instance,
					title:theLocs[i].name,
					index:i,
					icon:'/GoogleMapsMarkers/blue_MarkerL.png'
				});
				
				google.maps.event.addListener(marker, 'click', function () {
					new google.maps.InfoWindow({
				      content: theLocs[this.index].nickname + " (" + theLocs[this.index].name + ")<br>Entrances: "+theLocs[this.index].entrances,
				      maxWidth: 200,
					  position:new google.maps.LatLng(theLocs[this.index].coordinates[0].x,theLocs[this.index].coordinates[0].y)
				  }).open(map.instance,this);
				});  
			}
		}
	});
}

function putIMarker(point,map,marker) {
	google.maps.event.addListener(marker, 'click',function() {
		new google.maps.InfoWindow({
	      content: "ID: <b>" + point.id+"</b><br>Type: " + point.type+"<br>getTo: " + point.getTo,
	      maxWidth: 200,
	  }).open(map.instance,marker);
	});
}