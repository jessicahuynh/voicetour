locations = [
	{
		"id":"volen",
		"name": "The Volen National Center for Complex Systems",
		"nickname": "Volen",
		"coordinates": [
			new Point(42.367036,-71.259186), 
			new Point(42.367184,-71.259039),
			new Point(42.366944,-71.258458),
			new Point(42.366783,-71.258614)],
		"function": "Volen is home to Brandeis' computer science and linguistics departments.",
		"description": "A longer description",
		"route": {"fellowsgarden": 2,
					"bassine": 1,
					"feldberg":1,},
		"category":["science","classroom","offices"]
	},
	{
		"id":"scc",
		"name": "Carl and Ruth Shapiro Campus Center",
		"nickname": "SCC",
		"coordinates": [
			new Point(42.366123,-71.260054),
			new Point(42.365798,-71.259665),
			new Point(42.365554,-71.259944),
			new Point(42.365522,-71.260561)],
		"function": "The SCC is home to many of Brandeis' media clubs, the bookstore, and the Student Union. Students can access the SCC 24/7 and many can be found studying here.",
		"description":"green",
		"route": {"fellowsgarden": 1,
					"rose" : 2,},
		"category":["student center"]
	},
	{
		"id":"fellowsgarden",
		"name": "Fellows Garden",
		"nickname": "Fellows Garden",
		"coordinates": [
			new Point(42.366813,-71.259628),
			new Point(42.366375,-71.260151),
			new Point(42.365813,-71.259543),
			new Point(42.366023,-71.259101)],
		"function": "Fellows Garden is a nice place to hangout with friends in nice weather",
		"description":"Nobody knows the name",
		"category":["art"],
		"route": {"volen": 2,
					"scc" : 1,
					"feldberg" : 3,}
	},
	{
		"id":"roseart",
		"name": "The Rose Art Museum",
		"nickname": "the Rose",
		"coordinates": [
			new Point(42.366033,-71.262631),
			new Point(42.365498,-71.262948),
			new Point(42.365442,-71.262288),
			new Point(42.365902,-71.262218)],
		"function": "The Rose Art Museum displays contemporary art with rotating exhibits.",
		"description":"The Museum",
		"route": {"scc": 2,},
		"category":["art"]
	},

	bassine = {
		"id":"bassine",
		"name": "Bassine Science Building",
		"nickname": "Bassine",
		"coordinates": [
			new Point(42.367122,-71.258208),
			new Point(42.366997,-71.258307),
			new Point(42.366782,-71.257457),
			new Point(42.366656,-71.257562)],
		"function": "Bassine Science Building has many bio lab?",
		"description":"Lab",
		"route": {"volen": 1,
					"feldberg": 1,},
		"category":["science","classroom"]

	},

	feldberg = {
		"id":"feldberg",
		"name":"Feldberg Communications Center",
		"nickname":"Feldberg",
		"coordinates": [
			new Point(42.366985,-71.259075),
			new Point(42.366800,-71.258632),
			new Point(42.366546,-71.258833),
			new Point(42.366751,-71.259269)],
		"function":"Feldberg contains offices and is home to Library and Technology Services.",
		"route": {"volen": 1,
					"fellowsgarden": 3,
					"bassine":2,},
		"category":["science","offices"]
	},
	
	turner = {
		"id":"turner",
		"name":"60 Turner Street",
		"coordinates":[
			new Point(42.362028,-71.264118), 
			new Point(42.361976,-71.263828),
			new Point(42.361834,-71.26386),
			new Point(42.361889,-71.264187)],
		"category":["administrative"]
	},
	bernstein = {
		"id":"bernstein-marcus",
		"name":"Bernstein-Marcus Administration Center",
		"nickname":"Bernstein-Marcus",
		"coordinates":[
			new Point(42.365077,-71.25998), 
			new Point(42.365222,-71.259642), 
			new Point(42.365046,-71.259492), 
			new Point(42.36489,-71.259837)],
		"category":["administrative"]
		},
	epstein = {
		"id":"epstein",
		"name":"Epstein Building",
		"nickname":"Epstein",
		"coordinates":[
			new Point(42.362457,-71.261636), 
			new Point(42.362374,-71.260823), 
			new Point(42.362134,-71.260864), 
			new Point(42.362204,-71.261671)],
		"category":["classroom","offices"]
		},
	facultyCenter = {
		"name":"Faculty Center",
		"coordinates":[
			new Point(42.36569,-71.261466), 
			new Point(42.365861,-71.261069), 
			new Point(42.365651,-71.260898), 
			new Point(42.36548,-71.2613)],
		"category":["dining"]
		},
	goldman = {
		"name":"Goldman-Schwartz Fine Arts",
		"coordinates":[
			new Point(42.365001,-71.263157), 
			new Point(42.364799,-71.26258), 
			new Point(42.364525,-71.262821), 
			new Point(42.364628,-71.263304)],
		"category":["art"]
		},
	gryzmish = {
		"name":"Gryzmish Center",
		"coordinates":[
			new Point(42.365593,-71.259553), 
			new Point(42.365759,-71.25918), 
			new Point(42.365577,-71.259025), 
			new Point(42.365417,-71.259403)],
		"category":["administrative"]
		},
	sachar = {
		"name":"Sachar International Center",
		"coordinates":[
			new Point(42.365064,-71.25997), 
			new Point(42.365424,-71.259121), 
			new Point(42.365279,-71.258993), 
			new Point(42.364897,-71.25983)],
		"category":["classroom","graduate"]
		},
	irving = {
		"name":"Irving Presidential Enclave",
		"coordinates":[
			new Point(42.365209,-71.259623), 
			new Point(42.365423,-71.259113), 
			new Point(42.36529,-71.259006), 
			new Point(42.365076,-71.259521)],
		"category":["administrative"]
		},
	info = {
		"name":"Information Booth",
		"nickname":"Info Booth",
		"coordinates":[
			new Point(42.365015,-71.258721), 
			new Point(42.365046,-71.258676), 
			new Point(42.364978,-71.258681), 
			new Point(42.365007,-71.258634)],
		"category":["informational"]
		},
	pollack = {
		"name":"Pollack Fine Arts Teaching Center",
		"coordinates":[
			new Point(42.365328,-71.26243), 
			new Point(42.365291,-71.262325), 
			new Point(42.365122,-71.262435), 
			new Point(42.365158,-71.262541)],
		"category":["art","classroom"]
		},
	rabbSchool = {
		"name":"The Rabb School of Continuing Studies",
		"coordinates":[
			new Point(42.36298,-71.25929), 
			new Point(42.363061,-71.258924), 
			new Point(42.362961,-71.258887), 
			new Point(42.362872,-71.259233)],
		"function":"The Rabb School is home to",
		"category":["graduate"]
		},
	admissions = {
		"name":"Carl and Ruth Shapiro Admissions Center",
		"nickname":"Admissions",
		"coordinates":[
			new Point(42.36615,-71.260189), 
			new Point(42.365803,-71.259658), 
			new Point(42.365546,-71.259934), 
			new Point(42.36552,-71.260634)],
		"category":["offices","informational"]
		},	
	slosberg = {
		"name":"Slosberg Music Center",
		"nickname":"Slosberg",
		"coordinates":[
			new Point(42.364412,-71.259683), 
			new Point(42.364319,-71.2594), 
			new Point(42.363891,-71.259666), 
			new Point(42.363985,-71.259942)],
		"category":["art","classroom"]
		},
	spingold = {
		"name":"Spingold Theater Center",
		"nickname":"Spingold",
		"coordinates":[
			new Point(42.364788,-71.262031), 
			new Point(42.364612,-71.261474), 
			new Point(42.364008,-71.261774), 
			new Point(42.364194,-71.262415)],
		"category":["art"]
		},
	abelson = {
		"name":"Abelson-Bass-Yalem",
		"nickname":"Abelson",
		"coordinates":[
			new Point(42.366696,-71.258464), 
			new Point(42.366554,-71.258437), 
			new Point(42.366157,-71.258726), 
			new Point(42.366226,-71.258882)],
		"category":["science","classroom"]
		},
	berlin = {
		"id":"berlin",
		"name":"Mendel and Leah Berlin Chapel",
		"coordinates":[
			new Point(42.368284,-71.260708), 
			new Point(42.368244,-71.260593), 
			new Point(42.368082,-71.260705), 
			new Point(42.368135,-71.26081)],
		"category":["religious"]
		},
	bethlehem = {
		"id":"bethlehem",
		"name":"Bethlehem Chapel",
		"coordinates":[
			new Point(42.368343,-71.260178), 
			new Point(42.368259,-71.259998), 
			new Point(42.368196,-71.260047), 
			new Point(42.368267,-71.260243)],
		"category":["religious"]
		},
	harlan = {
		"id":"harlan",
		"name":"John Marshall Harlan Chapel",
		"coordinates":[
			new Point(42.368776,-71.260739), 
			new Point(42.368692,-71.260564), 
			new Point(42.36865,-71.2606), 
			new Point(42.368732,-71.260779)],
		"category":["religious"]
		},
	chapelsField = {
		"name":"Chapels Field",
		"coordinates":[
			new Point(42.368103,-71.260244), 
			new Point(42.36763,-71.25901), 
			new Point(42.367281,-71.259034), 
			new Point(42.367681,-71.260542)],
		"category":["lawn"]
		},
	brown = {
		"name":"Brown Social Science Center",
		"nickname":"Brown",
		"coordinates":[
			new Point(42.367383,-71.257225), 
			new Point(42.36728,-71.256666), 
			new Point(42.367169,-71.256718), 
			new Point(42.367266,-71.257265)],
		"category":["classroom"]
		},
	edison = {
		"name":"Edison-Lecks Science Building",
		"nickname":"Edison-Lecks",
		"coordinates":[
			new Point(42.36652,-71.25835), 
			new Point(42.366312,-71.25788), 
			new Point(42.366168,-71.258001), 
			new Point(42.366374,-71.258462)],
		"category":["science","classroom"]
		},
	farber = {
		"name":"Farber Library",
		"nickname":"Farber",
		"coordinates":[
			new Point(42.367907,-71.258866), 
			new Point(42.368046,-71.25855), 
			new Point(42.367823,-71.258354), 
			new Point(42.367688,-71.25867)],
		"category":["library"]
		},
	goldsmith = {
		"name":"Horace W. Goldsmith Mathematics Building",
		"nickname":"Goldsmith",
		"coordinates":[
			new Point(42.367263,-71.258512), 
			new Point(42.365328,-71.26243), 
			new Point(42.367122,-71.258208), 
			new Point(42.366997,-71.258307)],
		"function":"Goldsmith is home to the mathematics department.",
		"category":["science","classroom"],
		},
	heller = {
		"name":"Heller-Brown Building",
		"nickname":"Heller",
		"coordinates":[
			new Point(42.369326,-71.259107), 
			new Point(42.369187,-71.258417), 
			new Point(42.369025,-71.258474), 
			new Point(42.369158,-71.259171)],
		"function":"Heller-Brown is home to the Heller School for Social Policy and Management, one of the top ten schools of social policy in the United States and one of the eight approved U.S. training institutions for World Bank Scholars.",
		"category":["classroom","graduate"]
		},
	rabbGrad = {
		"name":"Rabb Graduate Center",
		"coordinates":[
			new Point(42.369289,-71.25762), 
			new Point(42.369127,-71.256792), 
			new Point(42.36915,-71.257674), 
			new Point(42.368996,-71.256845)],
		"category":["graduate"]
		},
	roseMedical = {
		"name":"Rosenstiel Basic Medical Sciences Research Center",
		"coordinates":[
			new Point(42.366103,-71.257429), 
			new Point(42.365901,-71.257013), 
			new Point(42.365724,-71.257239), 
			new Point(42.365884,-71.257585)],
		"category":["science"]
		},
	schwartz = {
		"name":"Schwartz Hall",
		"nickname":"Schwartz",
		"coordinates":[
			new Point(42.367642,-71.257438), 
			new Point(42.367563,-71.257024), 
			new Point(42.367418,-71.257072), 
			new Point(42.367494,-71.257484)],
		"category":["classroom"]
		},
	scienceCenter = {
		"name":"Carl J. Shapiro Science Center",
		"nickname":"Science Center",
		"coordinates":[
			new Point(42.36595,-71.258617), 
			new Point(42.366115,-71.257734), 
			new Point(42.365759,-71.258559), 
			new Point(42.365894,-71.257864)],
		"category":["science","classroom","student center"]
		},
	usdan = {
		"name":"Usdan Student Center",
		"nickname":"Usdan",
		"coordinates":[
			new Point(42.368296,-71.256585), 
			new Point(42.367852,-71.256794), 
			new Point(42.367777,-71.256451), 
			new Point(42.368243,-71.256259)],
		"category":["student center","dining"]
		},
	gosman = {
		"name":"Gosman Sports and Convocation Center",
		"nickname":"Gosman",
		"coordinates":[
			new Point(42.365193,-71.255688), 
			new Point(42.365761,-71.25482), 
			new Point(42.364998,-71.253952), 
			new Point(42.364449,-71.254864)],
		"category":["athletics"]
		}

]

function Point(x,y) {
	this.x = x;
	this.y = y;
}
