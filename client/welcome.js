offCampus = {
	"name":"off campus",
	"nickname":"off campus",
	"function":"There's lots to do off campus but unfortunately I can't tell you all that much about it."
}

Template.welcome.helpers({
	inLocation: function () {
		var name = Locations.findOne({ "name": Session.get("inLocation")[0].name }).name;
		if (Session.get("inLocation")[1] == "in") {
			return name;
		}	
		else {
			if (Session.get("unit") == "m") {
				return Math.round(Session.get("inLocation")[2]) + "m from " + name;
			}
			else {
				return Math.floor(Math.round(Session.get("inLocation")[2]*3.28)) + "ft from " + name;
			}
			
		}
		if (name == null) {
			return "You're off campus";
		}
	},
	locationMapOptions: function() {
		if (GoogleMaps.loaded()) {
			//console.log(Session.get("currentLocation").x,Session.get("currentLocation").y);
			return {
				center:new google.maps.LatLng(Session.get("currentLocation").x,Session.get("currentLocation").y),
				zoom:16	
			}
			
		}
	},
	settings:function() {
		return {
			position:"bottom",
			limit:10,
			rules:[{
				collection:Locations,
				matchAll:true,
				field:"name",
				template:Template.suggestions,
				selector: function(match) {
                   var regex;
                   regex = new RegExp(match, 'i');
                   return {
                       $or: [
                          {
                              'name': regex
                          }, {
                              'nickname': regex
                          }, {
							  'category': regex
						  }, {
							  'function':regex
						  }
                       ]
                   };
                },
			}]
		};
	},
});

Template.welcome.rendered = function() {
	graph = new Graph(Map.findOne());
	Session.set("pageTitle","Discover Deis");
	Session.set("listenTo","Welcome to Discover Dice! You can navigate to any location on campus here and find out more.");
	
	GoogleMaps.load();	
	
	GoogleMaps.ready('locationMap',function(map) {
		var marker = new google.maps.Marker({
			position: map.options.center,
			map: map.instance
		});
		Tracker.autorun(function() {
			var theLatLng = new google.maps.LatLng(Session.get("currentLocation").x,Session.get("currentLocation").y);
			
			map.instance.setCenter(theLatLng);
			
			marker.setPosition(theLatLng);
		})
	});
	
}

Template.welcome.events({
	'submit #navform':function(event) {
		event.preventDefault();
		
		Session.set("navigateTo",document.getElementById("endpoint").value);
		Router.go('/navigate');
	}
});