Template.nearbyLocs.helpers({
	nearbyname:function() {
		var loc = Locations.findOne({"id":JSON.stringify(this).replace(/"([^"]+(?="))"/g, '$1')});
		if (loc.name) {
			if (loc.nickname != undefined) {
				return loc.nickname + " ("+loc.name+")";
			}
			else {
				return loc.name;
			}
			
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
						if (Session.get("unit") == "m") {
							$(classname).html("about "+ Math.floor(data)+"m");
						}
						else {
							$(classname).html("about "+Math.round(Math.floor(data*3.28))+"ft");
						}
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


Template.nearbyLocs.events({
	'click .visitnearby':function(event) {
		event.preventDefault();
		var loc = Locations.findOne({"id":JSON.stringify(this).replace(/"([^"]+(?="))"/g, '$1')});
		
		var currentPage = Router.current().route.path();
		if (currentPage == "/selfguide") {
			Session.set("prev","/selfguide");
		}
		else {
			Session.set("prev","/locationList");
		}
		
		Session.set("viewLocation",loc._id);
		
		console.log(Session.get("viewLocation"));
		console.log(Session.get("prev"));
		
		Router.go('/viewLocation/'+loc._id);
		
		Session.set("pageTitle","Viewing " + loc.nickname);
	}
});