
Template.graph.onCreated(function () {
	graph = new Graph(Map.findOne());
	console.log(graph);	
});

Template.graph.helpers({
	stops: function() {
		return Session.get("routeToTake");
	},
	settings:function() {
		return {
			position:"bottom",
			limit:10,
			rules:[{
				collection:Locations,
				matchAll:true,
				field:"name",
				template:Template.suggestions
			}]
		};
	}
});

Template.graph.events({
	"submit #navform": function(event){

		event.preventDefault();
		
		/*alert("test");*/
		var starts = startpoint.value;
		var ends = endpoint.value;
		// console.log(starts + " " + ends);
		
		var route = getShortestRoute(Locations.findOne({"name":starts}).entrances,Locations.findOne({"name":ends}).entrances);
		
		var r = [];
		for (var i = 0; i < route.length - 1; i++) {
			var thePath = Paths.findOne({"start":route[i],"end":route[i+1]});
			r.push(thePath);
		
		}
		
		Session.set("routeToTake",r);
	},
	"click input":function(event) {
		event.target.value = '';
	}

});

function getShortestRoute(startEntrances,endEntrances) {
	var theShortestDist = 1000000000;
	var shortestRoute = graph.findShortestPath(startEntrances[0],endEntrances[0]);
	
	var currentRouteDist = 0;

	if (startEntrances.length > 0 && endEntrances.length > 0) {
		startEntrances.forEach(function (startEntrance) {
			endEntrances.forEach(function (endEntrance) {
				var currentRoute = graph.findShortestPath(startEntrance, endEntrance);

				// if there's no route between the entrances, skip
				if (currentRoute != null) {
					for (var i = 0; i < currentRoute.length - 2; i++) {
						currentRouteDist += Paths.findOne({ "start": currentRoute[i], "end": currentRoute[i + 1] }).distance;
					}
	
					console.log(currentRoute + " " + currentRouteDist);
	
					if (currentRouteDist < theShortestDist) {
						theShortestDist = currentRouteDist;
						shortestRoute = currentRoute;
					}
				}

				currentRouteDist = 0;
			});
		});
	}

	return shortestRoute;
}
