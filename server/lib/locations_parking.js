locations_parking = [
	{
		"id":"athleticslot",
		"name":"Athletics Parking Lot",
		"nickname":"Athletics Lot",
		"coordinates":[
			new Point(42.365088,-71.256173), 
			new Point(42.364422,-71.257879),
			new Point(42.364272,-71.257766),
			new Point(42.364914,-71.256057), ],
		"category":["parking"],
		"entrances":["athleticslot_e01"]
	},
	{
		"id":"gosmanparkinglot",
		"name":"Gosman Parking Lot",
		"nickname":"Gosman Lot",
		"coordinates":[
			new Point(42.365056,-71.253832), 
			new Point(42.365541,-71.252837),
			new Point(42.365393,-71.252676),
			new Point(42.364858,-71.253718), ],
		"category":["parking"],
		"entrances":["gosmanparkinglot_e01","gosmanparkinglot_e02"]
	},
	{
		"id":"linseyparkinglot",
		"name":"Linsey Parking lot",
		"nickname":"Linsey Lot",
		"coordinates":[
			new Point(42.365568,-71.254114), 
			new Point(42.365449,-71.253988), 
			new Point(42.365645,-71.253642), 
			new Point(42.365739,-71.253857)],
		"category":["parking"],
		"entrances":["linseyparkinglot_e01"]
	},
	{
		"id":"towerlot",
		"name":"Tower Parking lot",
		"nickname":"T-Lot",
		"coordinates":[
			new Point(42.370790, -71.258274), 
			new Point(42.370909, -71.258726), 
			new Point(42.370091, -71.259134), 
			new Point(42.369904, -71.258646)],
		"category":["parking"],
		"entrances":["towerlot_e01"]
	},
	{
		"id":"librarylot",
		"name":"Library Parking lot",
		"nickname":"Library Lot",
		"coordinates":[
			new Point(42.369333, -71.258163), 
			new Point(42.369143, -71.258346), 
			new Point(42.368845, -71.257814), 
			new Point(42.368924, -71.257598)],
		"category":["parking"],
		"entrances":["librarylot_e01"]
	},
	{
		"id":"kutzlot",
		"name":"Kutz Parking Lot",
		"nickname":"Kutz Lot",
		"coordinates":[
			new Point(42.368797, -71.256007), 
			new Point(42.368885, -71.256314), 
			new Point(42.368675, -71.256459), 
			new Point(42.368580, -71.256135)],
		"category":["parking"],
		"entrances":["kutzlot_e01"]
	},
	{
		"id":"northquadlot",
		"name":"North Quad Parking Lot",
		"nickname":"North Quad Parking Lot",
		"coordinates":[
			new Point(42.370431, -71.256786), 
			new Point(42.370211, -71.256866), 
			new Point(42.369640, -71.254723), 
			new Point(42.369763, -71.254697)],
		"category":["parking"],
		"entrances":["northquadlot_e01"]
	},
	{
		"id":"sciencevisitorlot",
		"name":"Science Visitor Parking Lot",
		"nickname":"Science Visitor Parking Lot",
		"coordinates":[
			new Point(42.366635, -71.257073), 
			new Point(42.366314, -71.257357), 
			new Point(42.366187, -71.257086), 
			new Point(42.366530, -71.256810)],
		"category":["parking"],
		"entrances":["sciencevisitorlot_e01"]
	},
	{
		"id":"sciencespeciallot",
		"name":"Science Special Access Parking Lot",
		"nickname":"Science Special Access Parking Lot",
		"coordinates":[
			new Point(42.366639, -71.257279), 
			new Point(42.366364, -71.257566), 
			new Point(42.366308, -71.257368), 
			new Point(42.366636, -71.257060)],
		"category":["parking"],
		"entrances":["sciencespeciallot_e01"]
	},
	{
		"id":"sciencelot",
		"name":"Science Parking Lot",
		"nickname":"Science Parking Lot",
		"coordinates":[
			new Point(42.366284, -71.256297), 
			new Point(42.366137, -71.256153), 
			new Point(42.366481, -71.255527), 
			new Point(42.366629, -71.255677)],
		"category":["parking"],
		"entrances":["sciencelot_e01","sciencelot_e02"]
	},
	{
		"id":"stonemanlot",
		"name":"Stoneman Parking Lot",
		"nickname":"Stoneman Parking Lot",
		"coordinates":[
			new Point(42.366284, -71.254980), 
			new Point(42.366829, -71.254753), 
			new Point(42.366836, -71.254822), 
			new Point(42.366331, -71.255020)],
		"category":["parking"],
		"entrances":["stonemanlot_e01"]
	},
	{
		"id":"eastquadlot",
		"name":"East Quad Parking Lot",
		"nickname":"East Quad Parking Lot",
		"coordinates":[
			new Point(42.367559, -71.254144), 
			new Point(42.367339, -71.254362), 
			new Point(42.367139, -71.254406), 
			new Point(42.366950, -71.254004),
			new Point(42.367311, -71.253783),],
		"category":["parking"],
		"entrances":["eastquadlot_e01","eastquadlot_e02"]
	},
	{
		"id":"charlesriverlot",
		"name":"Charles River Lot",
		"nickname":"C-Lot",
		"coordinates":[
			new Point(42.359381, -71.258471),
			new Point(42.359402, -71.258644),
			new Point(42.359345, -71.258710),
			new Point(42.359387, -71.259058),
			new Point(42.360113, -71.259882),
			new Point(42.360318, -71.259650),
			new Point(42.360366, -71.259618),
			new Point(42.360383, -71.259398),
			new Point(42.360321, -71.259344),
			new Point(42.360267, -71.258557),
			new Point(42.360233, -71.258358),
			new Point(42.360294, -71.258064),
			new Point(42.360028, -71.257795),
			new Point(42.359894, -71.258162),
			new Point(42.359378, -71.258467)
		],
		"category":["parking"],
		"entrances":["clot_e01","clot_e02","clot_e03"]
	}
]

function Point(x,y) {
	this.x = x;
	this.y = y;
}