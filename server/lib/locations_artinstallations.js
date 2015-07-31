locations_artinstallations = [
	{
		"id":"squirebridge",
		"name":"Squire Bridge",
		"nickname":"Squire Bridge",
		"function":"This bridge links Upper Campus with the Athletics complex.",
		"description":"",
		"coordinates":[new Point(42.365600, -71.256160),
			new Point(42.365625, -71.256119),
			new Point(42.365320, -71.255759),
			new Point(42.365284, -71.255838)],
		"nearby":["gosman","mailman"],
		"category":["art"],
		"entrances":["squirebridge_e01","squirebridge_e02"],
		"area":["athletics"]
	},
	{
		"id":"lightofreason",
		"name":"Light of Reason, 2014",
		"nickname":"Light of Reason",
		"function":"This permanent sculpture was commissioned for the Rose Art Museum and Brandeis by Chris Burden.",
		"description":"The structure of the sculpture was inspired by the three torches, three hills and three Hebrew letters in the Brandeis University seal, while the work's title borrows from a well-known quote by the university's namesake, Supreme Court Justice Louis Dembitz Brandeis: \"If we would guide by the light of reason, we must let our minds be bold.\" Light of Reason was made possible through a special museum endowment committed solely to the acquisition of works of art.",
		"coordinates":[new Point(42.365401, -71.262062),
			new Point(42.365491, -71.262014),
			new Point(42.365491, -71.261783),
			new Point(42.365376, -71.261814),
			new Point(42.365278, -71.261920)],
		"nearby":["roseart","facultycenter","goldman","pollack","greatlawn"],
		"category":["art"],
		"entrances":["lightofreason_e01"],
		"area":["lower campus"]
	},
	{
		"id":"magnolias",
		"name":"Six Magnolia Trees",
		"nickname":"Six Magnolia Trees",
		"function":"These six magnolia trees were planted in memory of the Holocaust.",
		"description":"They are both symbolic of the past and representative of our optimism for the future. Planted by the students of Brandeis University Yom HaShoah at April 22, 2004.",
		"coordinates":[new Point(42.368132, -71.260572)],
		"category":["landscape"],
		"area":["upper campus","chapels"]
	},
	{
		"id":"ruach_yisrael",
		"nickname":"Ruach Yisrael",
		"name":"Ruach Yisrael: The Spirit of Israel",
		"coordinates":[new Point(42.368080, -71.260727)],
		"category":["art"],
		"area":["upper campus","chapels"]
	},
	{
		"id":"holocaust_rememberance",
		"name":"Memorial to the Martyrs of the Holocaust",
		"nickname":"Martyrs of the Holocaust Memorial",
		"function":"This monument is in memory of the six million Jews who perished in the Holocaust.",
		"coordinates":[new Point(42.368295, -71.260781)],
		"category":["art"],
		"area":["upper campus","chapels"]
	},
	{
		"id":"chapelstriangle",
		"name":"Chapels Pond Triangle",
		"nickname":"Chapels Pond Triangle",
		"coordinates":[new Point(42.368235, -71.260346)],
		"category":["art"],
		"area":["upper campus","chapels"]
	},
	{
		"id":"praying_human",
		"name":"Submitting human in front of the Chapels",
		"nickname":"Praying human",
		"coordinates":[new Point(42.368463, -71.260944)],
		"category":["art"],
		"area":["upper campus","chapels"]
	},
	{
		"id":"inspiration",
		"name":"Inspiration, 1993",
		"nickname":"Inspiration",
		"function":"Inspiration is a steel piece by American Rita Blitt.",
		"description":"The description on the plaque reads \"Gift of the artist in memory of her mother, Dorothy Sofnas Copaken, who devoted her life to the establishment of Israel as a national Jewish homeland.\" There is a larger version of Inspiration installed in Kansas City, Missouri.",
		"coordinates":[new Point(42.362478, -71.260400)],
		"category":["art"],
		"area":["lower campus"]
	},
	{
		"id":"chopelas",
		"name":"Tree in Memory of Mark S. Chopelas",
		"nickname":"Mark S. Chopelas memorial tree",
		"coordinates":[new Point(42.362997, -71.260077)],
		"function":"This tree was planted in memory of Mark S. Chopelas (1963-2003).",
		"description":"The inscription on the plaque reads \"The Student Union of Brandeis University has planted this tree in memory of Mark S. \"Choppa\" Chopelas (April 3, 1963 - March 1, 2003). A devoted friend, mentor, and coach to all who knew him.\" A quote at the bottom of the plaque reads \"What we remember from childhood we remember forever...\" - Cynthia O'Nick\n\nThere is a fund in his name, the Mark Chopelas Youth Benefit Fund, that aids the children of Malden.",
		"category":["landscape"],
		"area":["lower campus"]
	},
	{
		"id":"familyatplay",
		"name":"Family At Play, 1968",
		"nickname":"Family at Play",
		"coordinates":[new Point(42.365552, -71.258741)],
		"function":"This bronze sculpture by Chaim Gross was the gift of Antje and Leonard L. Farber.",
		"category":["art"],
		"area":["lower campus"]
	}

	
]

function Point(x,y) {
	this.x = x;
	this.y = y;
}