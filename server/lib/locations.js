locations = [
	volen = {
		"name": "The Volen National Center for Complex Systems",
		"nickname": "Volen",
		"coordinates": [
			new Point(42.367146,-71.258926), 
			new Point(42.366950,-71.258507),
			new Point(42.366815,-71.258593),
			new Point(42.367029,-71.259071)],
		"function": "Volen is home to Brandeis' computer science and linguistics departments.",
		"description": "A longer description",
		"category":"classroom"

	},
	scc = {
		"name": "Carl and Ruth Shapiro Campus Center",
		"nickname": "SCC",
		"coordinates": [
			new Point(42.366123,-71.260054),
			new Point(42.365798,-71.259665),
			new Point(42.365554,-71.259944),
			new Point(42.365522,-71.260561)],
		"function": "The SCC is home to many of Brandeis' media clubs, the bookstore, and the Student Union. Students can access the SCC 24/7 and many can be found studying here.",
		"description":"green",
		"category":"studentCenter"
	}
]

function Point(x,y) {
	this.x = x;
	this.y = y;
}
