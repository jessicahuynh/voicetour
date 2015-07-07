points_science = [
	{
		"id":"volen_e01",
		"coordinate":new Point(42.367081, -71.258740),
		"type":"entrance"
	},
	{
		"id":"volen_c01", /* the circle */
		"coordinate":new Point(42.367130, -71.258685),
		"type":"crossing"
	},
	{
		"id":"volen_c02", /* directly outside volen, on the main path */
		"coordinate":new Point(42.367215, -71.259050),
		"type":"crossing"		
	}
]

function Point(x,y) {
	this.x = x;
	this.y = y;
}