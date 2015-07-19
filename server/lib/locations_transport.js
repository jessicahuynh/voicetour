locations_transport = [
	{
		"id":"stop_charlesriver",
		"name":"Lower Charles River Road Bus Stop",
		"nickname":"Grad bus stop",
		"coordinates":[new Point(42.359553, -71.256634)],
		"function":"The Grad stop services both the campus and Waltham BranVan.",
		"category":["transportation"],
		"entrances":[]
	},
	{
		"id":"stop_c-lot",
		"name":"Charles River Lot Shuttle Stop",
		"nickname":"C-Lot stop",
		"coordinates":[new Point(42.359316, -71.258342)],
		"function":"The C-Lot stop services the campus BranVan.",
		"category":["transportation"]
	},
	{
		"id":"stop_567",
		"name":"567 Shuttle Stop",
		"nickname":"567 shuttle stop",
		"coordinates":[new Point(42.361128, -71.261215)],
		"function":"The 567 shuttle stop serves the campus BranVan.",
		"category":["transportation"]
	}
]

function Point(x,y) {
	this.x = x;
	this.y = y;
}