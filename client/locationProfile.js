Template.locationProfile.helpers({
	location:function() {
		thisLoc = Locations.findOne({_id:Session.get("viewLocation")});
		console.log("^^^^^^^^"+thisLoc.coordinates);
		Session.set("thisLoc",thisLoc);
		return thisLoc;
	},
	categories:function() {
		var c = "";
		var catArray = this.category;
		for (var i = 0; i < catArray.length - 1; i++) {
			c += catArray[i] + ", ";
		}
		c+=catArray[i];
		return c;
	},
	locMapOptions:function() {
		if (GoogleMaps.loaded()) {
			return {
				center:new google.maps.LatLng(42.367014, -71.258943),
				zoom:17
			}
		}
	}
});

Template.locationProfile.events({
	'click .go-to-navigate':function(event) {
		Session.set("navigateTo",thisLoc.name);
	}
});

Template.locationProfile.rendered = function() {
	// this.autorun(function() {
	// 	Session.get("viewLocation");
	// 	var data=Template.currentData();
	// 	Session.set("pageTitle","Viewing " +thisLoc.nickname);
	// });
	var thisLoc = Session.get("thisLoc");
	Session.set("pageTitle","Viewing " +thisLoc.nickname);
	
	
	GoogleMaps.load();
	GoogleMaps.ready('locMap',function(map) {
		if (thisLoc.coordinates.length >1) {
			var bounds = new google.maps.LatLngBounds();
			var coords = [];
			var thisLocCoords = thisLoc.coordinates;
			thisLocCoords.forEach(function(coord) {
				coords.push(new google.maps.LatLng(coord.x,coord.y));
				bounds.extend(new google.maps.LatLng(coord.x,coord.y));
			});
			//repeat the first to close
			coords.push(new google.maps.LatLng(thisLoc.coordinates[0].x,thisLoc.coordinates[0].y));
			bounds.extend(new google.maps.LatLng(thisLoc.coordinates[0].x,thisLoc.coordinates[0].y));
			
			var polygon = new google.maps.Polygon({
				paths:coords,
				strokeColor:'#0000FF',
				strokeOpacity: 0.8,
			    strokeWeight: 3,
			    fillColor: '#0000FF',
			    fillOpacity: 0.35,
			});
			
			polygon.setMap(map.instance);
			
			map.instance.setCenter(bounds.getCenter())
;		}
		else {
			// just a point
		}
	});
	
	var listen = thisLoc.name + ". " + thisLoc.function + thisLoc.description;
	Session.set("listenTo",listen);
	
	$("#searchForm").hide();
	
	if ($(window).width() > 768) {
		$(".page-header").prepend("<a href='#' id='returnToList' class='back'><span class='glyphicon glyphicon-menu-left'></span></a>");
	}
	
}