Template.nearbyLocs.helpers({
	nearbyname:function() {
		var loc = Locations.findOne({"id":JSON.stringify(this).replace(/"([^"]+(?="))"/g, '$1')});
		if (loc.name) {
			return loc.nickname + " ("+loc.name+")";
		}
		else {
			return "N/A";
		}
	},
	nearbyindex:function() {
		return "nearbydist"+this;
	},
	dist:function() {
		var loc = Locations.findOne({"id":JSON.stringify(this).replace(/"([^"]+(?="))"/g, '$1')});
		if (loc.entrances != null && loc.entrances != undefined) {
			Meteor.call("distance",
				Session.get("currentLocation"),
				Intersections.findOne({"id":loc.entrances[0]}).coordinate,
				function(error,data) {
					if (error) {
						console.log(error);
					}
					else {
						var classname = ".nearbydist"+loc.id;
						$(classname).html("about "+ Math.floor(data)+"m");
						return "about "+ Math.floor(data)+"m";
					}
				});
		}
		else {
			var classname = ".nearbydist"+loc.id;
			$(classname).append("N/A");
			return "N/A";
		}
	}
});


Template.selfguide.events({
	'click .visitnearby':function(event) {
		event.preventDefault();
		var loc = Locations.findOne({"id":JSON.stringify(this).replace(/"([^"]+(?="))"/g, '$1')});
		Session.set("prev","/selfguide");
		Session.set("viewLocation",loc._id);
		Router.go('/viewLocation/'+loc._id);
	}
});