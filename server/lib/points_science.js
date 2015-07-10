points_science = [
	{
		"id":"volen_e01",
		"coordinate":new Point(42.367081, -71.258740),
		"type":"entrance"
	},
	{
		"id":"volen_e02",
		"coordinate":new Point(42.366859, -71.258420),
		"type":"entrance"
	},
	{
		"id":"volen_c01", // the circle 
		"coordinate":new Point(42.367130, -71.258685),
		"type":"crossing"
	},
	{
		"id":"volen_c02", // directly outside volen, on the main path
		"coordinate":new Point(42.367171, -71.259152),
		"type":"crossing"		
	},
	{
	    "id": "gzang_e01",
	    "coordinate":new Point(42.366978, -71.258363),
	    "type": "entrance",
	},
	{
		"id":"gzang_i01",
		"coordinate":new Point(42.366213, -71.258016),
		"type":"inside"
	},
	{
		"id":"goldsmith_e01",
		"coordinate":new Point(42.367223, -71.258579),
		"type":"entrance"
	},
	{
		"id":"goldsmith_e02",
		"coordinate":new Point(42.367002, -71.258280),
		"type":"entrance"
	},
	{
	    "id": "goldsmith_c01", // in front of goldsmith
	    "coordinate":new Point(42.367320, -71.258527),
	    "type": "crossing",
	},
	{
	    "id": "goldsmith_c02", // fork on top of steps
	    "coordinate":new Point(42.367495, -71.258452),
	    "type": "crossing",
	},
	{
	    "id": "edison_e01",
	    "coordinate":new Point(42.366240, -71.257926),
	    "type": "entrance",
	},
	{
	    "id": "edison_c01", // intersection behind shapiro science, next to edison
	    "coordinate":new Point(42.366177, -71.257755),
	    "type": "crossing",
	},
	{
	    "id": "edison_c02", // entrance to parking lot
	    "coordinate":new Point(42.366236, -71.257479),
	    "type": "crossing",
	},
	{
	    "id": "ssc_e01", // on the stairs
	    "coordinate":new Point(42.365944, -71.258682),
	    "type": "entrance",
	},
	{
	    "id": "ssc_e02", // to right of stairs
	    "coordinate":new Point(42.365874, -71.258681),
	    "type": "entrance",
	},
	{
	    "id": "ssc_e03", // parking lot entrance
	    "coordinate":new Point(42.365993, -71.257679),
	    "type": "entrance",
	},
	{
		"id":"ssc_i01", // shapiro side of walkway
		"coordinate":new Point(42.366147, -71.257976),
		"type":"inside"
	},
	{
		"id":"ssc_i02", // branch between shapiro entrances on stairs and ground
		"coordinate":new Point(42.365982, -71.258543),
		"type":"inside"
	}

]

function Point(x,y) {
	this.x = x;
	this.y = y;
}