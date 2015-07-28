// points of gym, mailman, healthcenter and police station
points_gym = [
	{
		"id":"gosman_c01",
		"coordinate":new Point(42.365305, -71.256108),
		"type":"crossing"
	},
	{
		"id":"gosman_c02",
		"coordinate":new Point(42.364255, -71.254864),
		"type":"crossing"
	},
	{
	
		"id":"athleticslot_e01",
		"coordinate":new Point(42.365022, -71.255865),
		"type":"entrance"
	},
	{
		"id":"gosman_e01",
		"coordinate":new Point(42.365142, -71.255437),
		"type":"entrance"
	},
	{
		"id":"gosman_e02",
		"coordinate":new Point(42.365420, -71.254361),
		"type":"entrance"
	},
	{
		"id":"gosman_e03",
		"coordinate":new Point(42.364945, -71.254048),
		"type":"entrance"
	},
	{
		"id":"gosman_e04",
		"coordinate":new Point(42.365713, -71.254695),
		"type":"entrance"
	},	
	{
		"id":"linsey_e01",
		"coordinate":new Point(42.365797, -71.254562),
		"type":"entrance"
	},
	{
		"id":"linsey_e02",
		"coordinate":new Point(42.365980, -71.254454),
		"type":"entrance"
	},
	
	{
		"id":"linsey_c01",
		"coordinate":new Point(42.365969, -71.254845),
		"type":"crossing"
	},	
	{
		"id":"linsey_c02",
		"coordinate":new Point(42.365553, -71.254355),
		"type":"crossing"
	},
	{
		"id":"linsey_c03",
		"coordinate":new Point(42.365810, -71.253929),
		"type":"crossing"
	},
	{
		"id":"linsey_c04",
		"coordinate":new Point(42.366118, -71.254608),
		"type":"crossing"
	},
	{
		"id":"linseyparkinglot_e01",
		"coordinate":new Point(42.365682, -71.253661),
		"type":"entrance"
	},
	{
		"id":"gosmanparkinglot_e01",
		"coordinate":new Point(42.364890, -71.253780),
		"type":"entrance"
	},
	{
		"id":"gosmanparkinglot_e02",
		"coordinate":new Point(42.365364, -71.253399),
		"type":"entrance"
	},
	{
		"id":"mods_c01",
		"coordinate":new Point(42.366051, -71.253886),
		"type":"crossing"
	},

	{
		"id":"mailman_e01",
		"coordinate":new Point(42.365801, -71.255926),
		"type":"entrance"
	},
	{
    	"id": 'sstreet_c01',
    	"coordinate":new Point( 42.365759, -71.255193),
    	"type": 'crossing',
	},
	{
		"id":"healthcenter_c01",
		"coordinate":new Point(42.366295, -71.255105),
		"type":"crossing"
	},
	{
		"id":"healthcenter_e01",
		"coordinate":new Point(42.366189, -71.255242),
		"type":"entrance"
	},
	{
		"id":"police_e01",
		"coordinate":new Point(42.366250, -71.255440),
		"type":"entrance"
	},
	{
		"id":"castle_e01",
		"coordinate":new Point(42.367034, -71.255943),
		"type":"entrance"
	},
	{
		"id":"castle_e02",
		"coordinate":new Point(42.367427, -71.256041),
		"type":"entrance"
	},
	{
		"id":"superconducting_e01",
		"coordinate":new Point(42.365910, -71.255390),
		"type":"entrance"
	},


	// old south street
	{
		"id":"rabbSchool_c01", // intersection of south st and old south st
		"coordinate":new Point(42.362593, -71.260072),
		"type":"crossing"
	},
	{
		"id":"rabbSchool_c02", // intersection, crossing the street uphill
		"coordinate": new Point(42.362764, -71.259952),
		"type":"crossing"
	},
	{
		"id":"rabbSchool_c03", // driveway for boat house
		"coordinate":new Point(42.362760, -71.259653),
		"type":"crossing"	
	},
	{
		"id":"rabbSchool_c04", //driveway start for rabb school
		"coordinate":new Point(42.362770, -71.259480),
		"type":"crossing"
	},
	{
		"id":"rabbSchool_c05", // in front of main entrance
		"coordinate":new Point(42.362821, -71.259083),
		"type":"crossing"
	},
	{
		"id":"rabbSchool_c06", // in front of grad entrance
		"coordinate":new Point(42.362870, -71.258973),
		"type":"crossing"
	},
	// lemberg
	{
		"id":"lemberg_c01", // driveway of lemberg
		"coordinate":new Point(42.363239, -71.258606),
		"type":"crossing"
	},
	{
		"id":"lemberg_c02", // next to shuttle stop
		"coordinate":new Point(42.363234, -71.258538),
		"type":"crossing"
	},
	{
		"id":"lemberg_c03", //in front
		"coordinate":new Point(42.363434, -71.258563),
		"type":"crossing"
	},
	{
		"id":"lemberg_c04", //south street, path to lemberg playground
		"coordinate":new Point(42.363340, -71.259448),
		"type":"crossing"
	},
	{
		"id":"lemberg_c05", // next to playground
		"coordinate":new Point(42.363445, -71.259235),
		"type":"crossing"
	},
	{
		"id":"lemberg_c06", // on the side, next to stairs
		"coordinate":new Point(42.363331, -71.258897),
		"type":"crossing"
	}

]

function Point(x,y) {
	this.x = x;
	this.y = y;
}