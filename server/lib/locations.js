locations = [
	volen = {
		"name": "The Volen National Center for Complex Systems",
		"nickname": "Volen",
		"coordinates": [
			new Point(42.367036,-71.259186), 
			new Point(42.367184,-71.259039),
			new Point(42.366944,-71.258458),
			new Point(42.366783,-71.258614)],
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
		"category":"Student center"
	},
	fellowsgarden = {
		"name": "Fellows Garden",
		"nickname": "Fellows Garden",
		"coordinates": [
			new Point(42.366813,-71.259628),
			new Point(42.366375,-71.260151),
			new Point(42.365813,-71.259543),
			new Point(42.366023,-71.259101)],
		"function": "Fellows Garden is a nice place to hangout with friends in nice weather",
		"description":"Nobody knows the name",
		"category":"Lawn"
	},
	rose = {
		"name": "The Rose Art Museum",
		"nickname": "Rose",
		"coordinates": [
			new Point(42.366033,-71.262631),
			new Point(42.365498,-71.262948),
			new Point(42.365442,-71.262288),
			new Point(42.365902,-71.262218)],
		"function": "The Rose Art Museum displays contemporary art with rotating exhibits.",
		"description":"The Museum",
		"category":"Other"
	},
	bassine = {
		"name": "Bassine Science Building",
		"nickname": "Bassine",
		"coordinates": [
			new Point(42.367122,-71.258208),
			new Point(42.366997,-71.258307),
			new Point(42.366782,-71.257457),
			new Point(42.366656,-71.257562)],
		"function": "Bassine Science Building has many bio lab?",
		"description":"Lab",
		"category":"Classroom"
	},
	feldberg = {
		"name":"Feldberg Communications Center",
		"nickname":"Feldberg",
		"coordinates": [
			new Point(42.366985,-71.259075),
			new Point(42.366800,-71.258632),
			new Point(42.366546,-71.258833),
			new Point(42.366751,-71.259269)],
		"function":"Feldberg contains offices and is home to Library and Technology Services.",
		"description":"stuff",
		"category":"Offices"
	}
]

function Point(x,y) {
	this.x = x;
	this.y = y;
}
