var Graph = (function (undefined) {

	var extractKeys = function (obj) {
		var keys = [], key;
		for (key in obj) {
		    Object.prototype.hasOwnProperty.call(obj,key) && keys.push(key);
		}
		return keys;
	}

	var sorter = function (a, b) {
		return parseFloat (a) - parseFloat (b);
	}

	var findPaths = function (map, start, end, infinity) {
		infinity = infinity || Infinity;

		var costs = {},
		    open = {'0': [start]},
		    predecessors = {},
		    keys;

		var addToOpen = function (cost, vertex) {
			var key = "" + cost;
			if (!open[key]) open[key] = [];
			open[key].push(vertex);
		}

		costs[start] = 0;

		while (open) {
			if(!(keys = extractKeys(open)).length) break;

			keys.sort(sorter);

			var key = keys[0],
			    bucket = open[key],
			    node = bucket.shift(),
			    currentCost = parseFloat(key),
			    adjacentNodes = map[node] || {};

			if (!bucket.length) delete open[key];

			for (var vertex in adjacentNodes) {
			    if (Object.prototype.hasOwnProperty.call(adjacentNodes, vertex)) {
					var cost = adjacentNodes[vertex],
					    totalCost = cost + currentCost,
					    vertexCost = costs[vertex];

					if ((vertexCost === undefined) || (vertexCost > totalCost)) {
						costs[vertex] = totalCost;
						addToOpen(totalCost, vertex);
						predecessors[vertex] = node;
					}
				}
			}
		}

		if (costs[end] === undefined) {
			return null;
		} else {
			return predecessors;
		}

	}

	var extractShortest = function (predecessors, end) {
		var nodes = [],
		    u = end;

		while (u) {
			nodes.push(u);
			predecessor = predecessors[u];
			u = predecessors[u];
		}

		nodes.reverse();
		return nodes;
	}

	var findShortestPath = function (map, nodes) {
		var start = nodes.shift(),
		    end,
		    predecessors,
		    path = [],
		    shortest;

		while (nodes.length) {
			end = nodes.shift();
			predecessors = findPaths(map, start, end);

			if (predecessors) {
				shortest = extractShortest(predecessors, end);
				if (nodes.length) {
					path.push.apply(path, shortest.slice(0, -1));
				} else {
					return path.concat(shortest);
				}
			} else {
				return null;
			}

			start = end;
		}
	}

	var toArray = function (list, offset) {
		try {
			return Array.prototype.slice.call(list, offset);
		} catch (e) {
			var a = [];
			for (var i = offset || 0, l = list.length; i < l; ++i) {
				a.push(list[i]);
			}
			return a;
		}
	}

	var Graph = function (map) {
		this.map = map;
	}

	Graph.prototype.findShortestPath = function (start, end) {
		if (Object.prototype.toString.call(start) === '[object Array]') {
			return findShortestPath(this.map, start);
		} else if (arguments.length === 2) {
			return findShortestPath(this.map, [start, end]);
		} else {
			return findShortestPath(this.map, toArray(arguments));
		}
	}

	Graph.findShortestPath = function (map, start, end) {
		if (Object.prototype.toString.call(start) === '[object Array]') {
			return findShortestPath(map, start);
		} else if (arguments.length === 3) {
			return findShortestPath(map, [start, end]);
		} else {
			return findShortestPath(map, toArray(arguments, 1));
		}
	}

	return Graph;

})();



/*var map = {};
 console.log("test1");
 var l = Locations.find().fetch();
 console.log("test2");
 var i = 0;
 var count = l.length;
 var name = Locations.find().fetch();

var lo2 = name[0];
console.log(count);

console.log(lo2.nickname);
 for(i=0;i<count;i++) {
   console.log("Hi");
   console.log(Locations.find().fetch()[i].nickname);
   map[Locations.find().fetch()[i].nickname] = l[i].route;
};
*/
/*while (i<l.length()) {
	console.log("Hi");
	map[l[i].nickname] = l[i].route;
	i ++;
};
console.log("test6");*/

/*l.forEach(function(location){
	console.log("test4");
	map[location.nickname] = location.route;
});*/

/*console.log(map);*/
/*var map = {a:{c:1},b:{a:2,c:1},c:{a:4,b:1}},*/
var map = {"volen":{"fellowsgarden": 2,
					"bassine": 1,
					"feldberg":1,},
			"scc":{"fellowsgarden": 1,
					"rose" : 2,},
			"fellowsgarden":{"volen": 2,
					"scc" : 1,
					"feldberg" : 3,},
			"rose":{"scc": 2,},
			"bassine":{"volen": 1,
					"feldberg": 1,},
			"feldberg":{"volen": 1,
					"fellowsgarden": 3,
					"bassine":2,},
		}
	graph = new Graph(map);


Template.graph.helpers({
	stops: function() {
		return graph.findShortestPath(Session.get("starts"), Session.get("ends"));

	}
});

Template.graph.events({
	"click #search": function(event){
		event.preventDefault();
		var starts = document.getElementById('startpoint').value;
		var ends = document.getElementById('endpoint').value;
		Session.set("starts",starts);
		Session.set("ends",ends);
		console.log(graph.findShortestPath(starts, ends));	
	}

});