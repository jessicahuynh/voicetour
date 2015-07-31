locations_transport = [
	{
		"id":"stop_charlesriver",
		"name":"Lower Charles River Road Bus Stop",
		"nickname":"Grad bus stop",
		"coordinates":[new Point(42.359553, -71.256634)],
		"function":"The Grad stop services both the campus and Waltham BranVan.",
		"category":["transportation"],
		"area":["lower campus","charles river"],
		"nearby":["charlesrivercommons"]
	},
	{
		"id":"stop_c-lot",
		"name":"Charles River Lot shuttle stop",
		"nickname":"C-Lot stop",
		"coordinates":[new Point(42.359316, -71.258342)],
		"function":"The C-Lot stop services the campus BranVan.",
		"category":["transportation"],
		"area":["lower campus","charles river"]
	},
	{
		"id":"stop_567",
		"name":"567 shuttle stop",
		"nickname":"567 shuttle stop",
		"coordinates":[new Point(42.361128, -71.261215)],
		"function":"The 567 shuttle stop serves the campus BranVan.",
		"category":["transportation"],
		"area":["lower campus"]
	},
	{
		"id":"stop_trainstation",
		"name":"Train station shuttle stop",
		"nickname":"Train station stop",
		"coordinates":[new Point(42.361712, -71.260823)],
		"function":"The shuttle stop across from the train station serves the campus BranVan.",
		"category":["transportation"],
		"area":["lower campus"]
	},
	{
		"id":"commuterrail",
		"name":"Brandeis/Roberts Commuter Rail Station",
		"nickname":"Brandeis/Roberts",
		"coordinates":[
			new Point(42.361970, -71.260281),
			new Point(42.361833, -71.260277),
			new Point(42.361942, -71.258913),
			new Point(42.362388, -71.257145),
			new Point(42.362498, -71.257250),
			new Point(42.362066, -71.259011)
		],
		"function":"Brandeis/Roberts station is on the Fitchburg line and is in MBTA fare zone 2.",
		"description":"The inbound platform towards Boston is on the side furthest from campus. Outbound is on the side closest to campus.",
		"category":["transportation"],
		"entrances":["commuterrail_e01","commuterrail_e02"],
		"nearby":["epstein","ss567","grad111","grad112","grad113","grad114"],
		"area":["lower campus"]
	},
	{
		"id":"stop_admissions",
		"name":"Admissions Bus Shelter",
		"nickname":"Admissions shuttle stop",
		"coordinates":[new Point(42.364636, -71.260225)],
		"function":"The Admissions bus shelter serves the campus and Waltham BranVans, along with the Boston and Riverside shuttles.",
		"description":"The bus shelter itself was a gift of the Student Union 2013-2014.",
		"category":["transportation"],
		"nearby":["admissions","slosberg","bernstein-marcus","greatlawn","scc","ridgewoodA"],
		"area":["lower campus"]
	},
	{
		"id":"stop_lemberg",
		"name":"Lemberg Shuttle Stop",
		"nickname":"Lemberg stop",
		"coordinates":[new Point(42.363194, -71.258541)],
		"function":"The Lemberg stop serves the campus BranVan.",
		"category":["transportation"],
		"nearby":["lemberg","rabbSchool","gordonfield"],
		"area":["lower campus"]
	}
]

function Point(x,y) {
	this.x = x;
	this.y = y;
}