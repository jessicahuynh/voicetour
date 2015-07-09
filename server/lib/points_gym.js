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
/*	{
		"id":"superconducting_e01",
		"coordinate":new Point(42.365910, -71.255390),
		"type":"entrance"
	},
	{
		"id":"stoneman_e01",
		"coordinate":new Point(42.366141, -71.255637),
		"type":"entrance"
	},


*/




]

function Point(x,y) {
	this.x = x;
	this.y = y;
}