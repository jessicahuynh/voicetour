offCampus = {
	"name":"off campus",
	"nickname":"off campus",
	"function":"There's lots to do off campus but unfortunately I can't tell you all that much about it."
}

Template.welcome.helpers({

	currentLocation: function () {
		return Session.get("currentLocation");

	},
	inLocation: function () {
		var name = Locations.findOne({ "name": Session.get("inLocation")[0].name }).name;
		if (Session.get("inLocation")[1] == "in") {
			return "You're in " + name;
		}	
		else {
			return "You're about " + Math.round(Session.get("inLocation")[2]) + "m from " + name;
		}
		if (name == null) {
			return "You're off campus";
		}
	},
	inLocationFunction:function() {
		var loc = Locations.findOne({"name":Session.get("inLocation")[0].name}); 
		if (loc == null) {
			return offCampus.function;
		}
		else {
			return loc.function;
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
	}
});

Template.welcome.rendered = function() {
	Session.set("pageTitle","Discover Deis");
	
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
	'click #whereAmI': function(event) {
		event.preventDefault();

		navigator.geolocation.getCurrentPosition(function(position) {
			var current = new Point(position.coords.latitude,position.coords.longitude);
			Session.set("currentLocation",current);
		});
		

		Meteor.call("searchLocations",			
			Session.get("currentLocation"),
			function(error, data) {
				if (error) {
					console.log(error);
				}
				else {
					Session.set("inLocation",data);
				}
			}
			);

		if (Session.get("inLocation") == null) {
			window.speechSynthesis.speak(new SpeechSynthesisUtterance("You are off campus."));
		}
		else {
			var name = Session.get("inLocation")[0].name;

			if (Session.get("inLocation")[1] == "in") {
				readName = new SpeechSynthesisUtterance("You're in " + name);
			}
			else {
				readName = new SpeechSynthesisUtterance("You're about " + Math.round(Session.get("inLocation")[2]) + "m from " + name);
			}

			window.speechSynthesis.speak(readName);
		}

		
	},

	'click #whatIsHere': function(event) {
		event.preventDefault();

		if (Session.get("inLocation") == null) {
			window.speechSynthesis.speak(new SpeechSynthesisUtterance("There's lots to do off campus, but unfortunately I can't tell you all that much about it."));
		}
		else {
			var loc = Locations.findOne({"name":Session.get("inLocation")[0].name});
			//console.log(loc.function);
			readFunction = new SpeechSynthesisUtterance(loc.function);

			window.speechSynthesis.speak(readFunction);
		}
	}
});

// Template.compass.helpers({
//     byId: function (id) {
//         return document.getElementById(id);
//     },
//     text: function (id, value) {
//         byId(id).innerHTML = value;
//     },
//     transform: function (id, commands) {
//         var props = ['transform', 'webkitTransform', 'mozTransform',
//                      'msTransform', 'oTransform'];
//         var node  = byId(id);
//         for (var i = 0; i < props.length; i ++) {
//           	if ( typeof(node.style[props[i]]) != 'undefined' ) {
//             	node.style[props[i]] = commands;
//             	break;
//           	}
//         }
//     },
//     round: function (value) {
//         return Math.round(value * 100) / 100;
//     }
// })

//     Compass.noSupport(function () {
//         text('text', 'no support');
//     })
//     .needGPS(function () {
//         text('text', 'need GPS');
//     })
//     .needMove(function () {
//         text('text', 'need move');
//     })
//     .init(function (method) {
//         if ( method == 'orientationAndGPS' ) {
//           	text('meta', 'GPS diff: ' + round(Compass._gpsDiff));
//         }
//     })
//     .watch(function (heading) {
//         text('text', round(heading));
//         transform('compass', 'rotate(' + (-heading) + 'deg)');
//     });
    
//     Compass.watch(function (heading) {
// 	  $('.degrees').text(heading);
// 	  $('.compass').css('transform', 'rotate(' + (-heading) + 'deg)');
// 	});
// 	Compass.init(function (method) {
// 	  console.log('Compass heading by ' + method);
// 	});

