locations_dorms = [
	ss567 = {
		"id":"ss567",
		"name":"567 South Street Apartments",
		"nickname":"567",
		"function":"The 567 Apartments provide two-person suite living for sophomores.",
		"description":"67 South Street is an apartment-style living option for sophomores, located next to Cappy's Pizza Parlor and conveniently located across from the Brandeis/Roberts Commuter Rail station. With only 30 residents, 567 South Street provides provides Brandeis students the privacy associated with apartment style living, while being within close distance to the main campus of Brandeis.",
		"coordinates":[
			new Point(42.36141,-71.261572), 
			new Point(42.361333,-71.261402), 
			new Point(42.361165,-71.261552), 
			new Point(42.36124,-71.261714)],
		"category":["dorm"],
		"entrances":["ss567_e01","ss567_e02","ss567_e03"],
		"nearby":["turner","commuterrail","epstein"],
		"area":["lower campus"]
	},
	{
		"id":"grad111",
		"name":"Ollie and Eleanore Cohen Building",
		"nickname":"Grad 111",
		"function":"Located at 110 Angleside Rd., Grad 111 provides suite-style living for upperclassmen.",
		"coordinates":[
			new Point(42.359859,-71.257805), 
			new Point(42.359894,-71.257695), 
			new Point(42.359111,-71.257282), 
			new Point(42.359074,-71.257394)],
		"category":["dorm"],
		"entrances":["grad111_e01","grad111_e02","grad111_e03","grad111_e04","grad111_e05","grad111_e06","grad111_e07","grad111_e08","grad111_e09","grad111_e010","grad111_e11","grad111_e12","grad111_e13","grad111_e14"],
		"nearby":["commuterrail,","grad112","grad113","grad114","charlesrivercommons"],
		"area":["lower campus","charles river"]
	},
	{
		"id":"charlesrivercommons",
		"name":"Charles River Commons",
		"nickname":"Charles River Commons",
		"function":"The Charles River Common is available for student and club use.",
		"description":"Charles River offers an apartment-style living environment located in an off campus setting while still providing residents an on campus community lifestyle. The Charles River Apartments are home to juniors and seniors who enjoy the privacy of the apartment style living as well as its on-campus feel. There are four buildings in the Charles River Quad, each commonly referred to by students by their address number. These buildings include: Morton May (110 Angleside Road), Max and Ann Coffman (150 Charles River Road), Ollie A. Cohen (164 Charles River Road), and George E. Lewis (178 Charles River Road). Each of the four Charles River apartment buildings accommodates a range from 70 to up to 110 students.",
		"coordinates":[
			new Point(42.359485, -71.257064),
			new Point(42.359356, -71.256937),
			new Point(42.359424, -71.256795),
			new Point(42.359560, -71.256919)
		],
		"category":["student life"],
		"entrances":["charlesrivercommons_e01","charlesrivercommons_e02"],
		"nearby":["commuterrail,","grad111","grad112","grad113","grad114"],
		"area":["lower campus","charles river"]
	},
	{
		"id":"grad112",
		"name":"Max and Ann Coffman Building",
		"nickname":"Grad 112",
		"function":"Located at 150 Charles River Rd., Grad 112 provides suite-style living for upperclassmen.",
		"coordinates":[
			new Point(42.359506, -71.257059), 
			new Point(42.359965, -71.257495), 
			new Point(42.360005, -71.257378), 
			new Point(42.359567, -71.256964)],
		"category":["dorm"],
		"entrances":["grad112_e01","grad112_e02","grad112_e03","grad112_e04","grad112_e05","grad112_e06","grad112_e07","grad112_e08","grad112_e09","grad112_e010"],
		"nearby":["commuterrail,","grad111","grad113","grad114","charlesrivercommons"],
		"area":["lower campus","charles river"]
	},
	{
		"id":"grad113",
		"name":"The George L. and Minnie Lewis Building",
		"nickname":"Grad 113",
		"function":"Located at 164 Charles River Rd., Grad 113 provides suite-style living for upperclassmen.",
		"coordinates":[
			new Point(42.360203,-71.257102), 
			new Point(42.359815,-71.256402), 
			new Point(42.359742,-71.25648), 
			new Point(42.36013,-71.257177)],
		"category":["dorm"],
		"entrances":["grad113_e01","grad113_e02","grad113_e03","grad113_e04","grad113_e05","grad113_e06","grad113_e07","grad113_e08","grad113_e09","grad113_e010"],
		"nearby":["commuterrail,","grad111","grad112","grad114","charlesrivercommons"],
		"area":["lower campus","charles river"]
		},
	{
		"id":"grad114",
		"name":"Morton May Building",
		"nickname":"Grad 114",
		"function":"Located at 178 Charles River Rd., Grad 114 provides suite-style living for upperclassmen.",
		"coordinates":[
			new Point(42.360515,-71.25694), 
			new Point(42.360223,-71.256167), 
			new Point(42.36015,-71.256216), 
			new Point(42.360431,-71.256994)],
		"category":["dorm"],
		"entrances":["grad114_e01","grad114_e02","grad114_e03","grad114_e04","grad114_e05","grad114_e06","grad114_e07","grad114_e08","grad114_e09","grad114_e010"],
		"nearby":["commuterrail,","grad111","grad112","grad113","charlesrivercommons"],
		"area":["lower campus","charles river"]
	},
	ridgewoodA = {
		"id":"ridgewoodA",
		"name":"Jehuda Reinharz Residence Hall",
		"nickname":"Ridgewood A",
		"function":"Ridgewood A provides suite-style living for upperclassmen.",
		"coordinates":[
			new Point(42.364163,-71.260638), 
			new Point(42.364036,-71.260324), 
			new Point(42.363893,-71.260338), 
			new Point(42.364028,-71.260729)],
		"category":["dorm"],
		"nearby":["ridgewoodB","ridgewoodC","admissions","village"],
		"entrances":["ridgewoodA_e01","ridgewoodA_e02","ridgewoodA_e03","ridgewoodA_e04","ridgewoodA_e05"],
		"area":["lower campus","ridgewood"]
		},
	ridgewoodB = {
		"id":"ridgewoodB",
		"name":"Ridgewood Residence Hall B",
		"nickname":"Ridgewood B",
		"function":"Ridgewood B provides suite-style living for upperclassmen.",
		"coordinates":[
			new Point(42.363939,-71.261456), 
			new Point(42.363978,-71.260872), 
			new Point(42.363844,-71.260957), 
			new Point(42.363788,-71.261432)],
		"category":["dorm"],
		"nearby":["ridgewoodA","ridgewoodC","admissions","village"],
		"entrances":["ridgewoodB_e01","ridgewoodB_e02"],
		"area":["lower campus","ridgewood"]
		},
	ridgewoodC = {
		"id":"ridgewoodC",
		"name":"Ridgewood Residence Hall C",
		"nickname":"Ridgewood C",
		"function":"Ridgewood C provides suite-style living for upperclassmen.",
		"coordinates":[
			new Point(42.363691,-71.260904), 
			new Point(42.363562,-71.260466), 
			new Point(42.363425,-71.260566), 
			new Point(42.363584,-71.261043)],
		"category":["dorm"],
		"nearby":["ridgewoodA","ridgewoodB","admissions","village"],
		"entrances":["ridgewoodC_e01","ridgewoodC_e02"],
		"area":["lower campus","ridgewood"]
		},
	rosieEast = {
		"id":"rosieeast",
		"name":"Rosenthal Residence Hall East",
		"nickname":"Rosie East",
		"function":"Rosie East provides suite-style living for sophomores.",
		"coordinates":[
			new Point(42.367225,-71.260011), 
			new Point(42.367225,-71.259817), 
			new Point(42.366945,-71.25979), 
			new Point(42.366962,-71.259988)],
		"category":["dorm"],
		"entrances":["rosieeast_e01"],
		"nearby":["rosienorth","rosiesouth","chapelsfield"],
		"area":["lower campus","rosenthal"]
		},
	rosieNorth = {
		"id":"rosienorth",
		"name":"Rosenthal Residence Hall North",
		"nickname":"Rosie North",
		"function":"Rosie North provides suite-style living for sophomores.",
		"coordinates":[
			new Point(42.367388,-71.26032), 
			new Point(42.367364,-71.259949), 
			new Point(42.367263,-71.25996), 
			new Point(42.367268,-71.260348)],
		"category":["dorm"],
		"entrances":["rosienorth_e01"],
		"nearby":["rosieeast","rosiesouth","chapelsfield"],
		"area":["lower campus","rosenthal"]
		},
	rosieSouth = {
		"id":"rosiesouth",
		"name":"Rosenthal Residence Hall South",
		"nickname":"Rosie South",
		"function":"Rosie South provides suite-style living for sophomores.",
		"coordinates":[
			new Point(42.366942,-71.260352), 
			new Point(42.366919,-71.25997), 
			new Point(42.366814,-71.259979), 
			new Point(42.36681,-71.260375)],
		"category":["dorm"],
		"entrances":["rosiesouth_e01"],
		"nearby":["rosienorth","rosieeast","chapelsfield"],
		"area":["lower campus","rosenthal"]
		},
	shapiroDorm = {
		"id":"shapirodorm",
		"name":"Shapiro Hall",
		"nickname":"Shapiro",
		"function":"Shapiro Hall provides traditional dorm living for freshmen.",
		"description":"Shapiro is split into Shapiro A and B and also contains Shapiro Lounge.",
		"coordinates":[
			new Point(42.367058,-71.261655), 
			new Point(42.367139,-71.261459), 
			new Point(42.366469,-71.26103), 
			new Point(42.366398,-71.261164)],
		"category":["dorm"],
		"entrances":["shapirodorm_e01","shapirodorm_e02","shapirodorm_e03","shapirodorm_e04"],
		"nearby":["deroy","usen","renfield","massellpond"],
		"area":["lower campus","massell"]
		},
	renfield = {
		"id":"renfield",
		"name":"Anna Renfield Hall",
		"nickname":"Renfield",
		"function":"Renfield provides traditional dorm style living for freshmen.",
		"coordinates":[
			new Point(42.367591, -71.261244), 
			new Point(42.367490, -71.261294), 
			new Point(42.367369, -71.260839), 
			new Point(42.367471, -71.260789)],
		"category":["dorm"],
		"entrances":["renfield_e01","renfield_e02"],
		"nearby":["deroy","usen","shapirodorm","massellpond"],
		"area":["lower campus","massell"]
		},
	deroy = {
		"id":"deroy",
		"name":"Helen L. Deroy Hall",
		"nickname":"Deroy",
		"function":"Deroy provides traditional dorm style living for freshmen.",
		"coordinates":[
			new Point(42.367526,-71.261539), 
			new Point(42.367458,-71.261429), 
			new Point(42.367238,-71.261668), 
			new Point(42.3673,-71.261778)],
		"category":["dorm"],
		"entrances":["deroy_e01","deroy_e02"],
		"nearby":["renfield","usen","shapirodorm","massellpond"],
		"area":["lower campus","massell"]
		},
	usen = {
		"id":"usen",
		"name":"Edyth and Irving Usen Hall",
		"nickname":"Usen",
		"function":"Usen provides traditional dorm style living for freshmen.",
		"coordinates":[
			new Point(42.367359,-71.260625), 
			new Point(42.367351,-71.260477), 
			new Point(42.367,-71.260499), 
			new Point(42.367012,-71.26066)],
		"category":["dorm"],
		"entrances":["usen_e01","usen_e02"],
		"nearby":["deroy","renfield","shapirodorm","massellpond"],
		"area":["lower campus","massell"]
		},
	{
		"id":"village",
		"name":"Village Residence Hall",
		"nickname":"The Village",
		"function":"The Village houses sophomores, mid-years, and students going abroad.",
		"description":"The Village houses 220 students in single and double occupancy rooms. The Village is broken down into three houses (A, B, and C).  For the full academic year, sophomores live in Village A. In the fall, juniors planning to study abroad live in B and C, with Mid-Year students taking their place in the spring semester. The Village is a traditional style residence hall with single and double occupancy rooms.  All rooms within the Village are gender neutral.  Single rooms in the Village range from approximately 110 to 130 square feet, and double rooms range from approximately 145 to 180 square feet.",
		"coordinates":[
			new Point(42.363419, -71.260057), 
			new Point(42.363532, -71.260042), 
			new Point(42.363519, -71.259851), 
			new Point(42.363774, -71.259797),
			new Point(42.363842, -71.260157),
			new Point(42.363718, -71.260141),
			new Point(42.363684, -71.260017),
			new Point(42.363627, -71.260030),
			new Point(42.363633, -71.260146),
			new Point(42.363458, -71.260160),
			
			new Point(42.363493, -71.260282), //front village B
			new Point(42.363393, -71.260298),
			new Point(42.363364, -71.260212),
			new Point(42.363297, -71.260257),
			new Point(42.363326, -71.260355),
			new Point(42.363176, -71.260446),
			
			new Point(42.363165, -71.260623), // village C
			new Point(42.362910, -71.260777),
			new Point(42.362855, -71.260649),
			new Point(42.363021, -71.260550),
			new Point(42.363038, -71.260459),
			new Point(42.362955, -71.260427),
			new Point(42.362958, -71.260298),
			
			new Point(42.363142, -71.260352), //back village B
			new Point(42.363209, -71.260303),
			new Point(42.363160, -71.260133),
			new Point(42.363388, -71.259976)],
		"category":["dorm"],
		"entrances":["villageA_e01","villageA_e02","villageA_e03","villageA_e04","villageA_e05","villageB_e01","villageB_e02","villageC_e01"],
		"nearby":["slosberg","ridgewoodC","ridgewoodA","ziv129","ziv130","lemberg","rabbSchool"],
		"area":["lower campus"]
	},
	{
		"id":"villageA",
		"name":"Lorraine and Jack N. Friedman House",
		"nickname":"Village A House",
		"function":"Village A houses sophomores, mid-years, and students going abroad. For the full academic year, sophomores live in Village A.",
		"coordinates":[
			new Point(42.363419, -71.260057), 
			new Point(42.363532, -71.260042), 
			new Point(42.363519, -71.259851), 
			new Point(42.363774, -71.259797),
			new Point(42.363842, -71.260157),
			new Point(42.363718, -71.260141),
			new Point(42.363684, -71.260017),
			new Point(42.363627, -71.260030),
			new Point(42.363633, -71.260146),
			new Point(42.363458, -71.260160)],
		"category":["dorm"],
		"entrances":["villageA_e01","villageA_e02","villageA_e03","villageA_e04","villageA_e05","villageA_ie01"],
		"nearby":["slosberg","ridgewoodC","ridgewoodA","ziv129","ziv130","lemberg","rabbSchool"],
		"area":["lower campus"]
	},
	{
		"id":"villageB",
		"name":"Melvin and Gale Nessel House",
		"nickname":"Village B House",
		"function":"Village B houses sophomores, mid-years, and students going abroad.",
		"description":" In the fall, juniors planning to study abroad live in B and C, with Mid-Year students taking their place in the spring semester.",
		"coordinates":[
			new Point(42.363493, -71.260282),
			new Point(42.363393, -71.260298),
			new Point(42.363364, -71.260212),
			new Point(42.363297, -71.260257),
			new Point(42.363326, -71.260355),
			new Point(42.363176, -71.260446),
			new Point(42.363142, -71.260352),
			new Point(42.363209, -71.260303),
			new Point(42.363160, -71.260133),
			new Point(42.363388, -71.259976)],
		"category":["dorm"],
		"entrances":["villageB_e01","villageB_e02","villageA_ie01","villageB_ie01"],
		"nearby":["slosberg","ridgewoodC","ridgewoodA","ziv129","ziv130","lemberg","rabbSchool"],
		"area":["lower campus"]
	},
	{
		"id":"villageC",
		"name":"Village C House",
		"nickname":"Village C House",
		"function":" In the fall, juniors planning to study abroad live in B and C, with Mid-Year students taking their place in the spring semester.",
		"description":" In the fall, juniors planning to study abroad live in B and C, with Mid-Year students taking their place in the spring semester.",
		"coordinates":[
			new Point(42.363142, -71.260352),
			new Point(42.363176, -71.260446),
			new Point(42.363165, -71.260623),
			new Point(42.362910, -71.260777),
			new Point(42.362855, -71.260649),
			new Point(42.363021, -71.260550),
			new Point(42.363038, -71.260459),
			new Point(42.362955, -71.260427),
			new Point(42.362958, -71.260298),
		],
		"category":["dorm"],
		"entrances":["villageC_e01","villageB_ie01"],
		"nearby":["slosberg","ridgewoodC","ridgewoodA","ziv129","ziv130","lemberg","rabbSchool"],
		"area":["lower campus"]
	},
	{
		"id":"ziv127",
		"name":"Ziv Residence Hall A",
		"nickname":"Ziv 127",
		"function":"Ziv 127 provides suite-style living for upperclassmen and students going abroad.",
		"description":" Ziv residents live in six-person suites. Each air-conditioned suite has six single bedrooms, a spacious common area and two private bathrooms.",
		"coordinates":[
			new Point(42.363544, -71.261652), 
			new Point(42.363305, -71.261828), 
			new Point(42.363262, -71.261713), 
			new Point(42.363335, -71.261663),
			new Point(42.363279, -71.261475),
			new Point(42.363352, -71.261420),
			new Point(42.363411, -71.261610),
			new Point(42.363510, -71.261544)],
		"category":["dorm"],
		"nearby":["ridgewoodB","ridgewoodC","ziv128","ziv129","ziv130","epstein"],
		"entrances":["ziv127_e01","ziv127_e02","ziv127_e03"],
		"area":["lower campus","ziv"]
	},
	{
		"id":"ziv128",
		"name":"Ziv Residence Hall B",
		"nickname":"Ziv 128",
		"function":"Ziv 128 provides suite-style living for upperclassmen and students going abroad.",
		"description":" Ziv residents live in six-person suites. Each air-conditioned suite has six single bedrooms, a spacious common area and two private bathrooms.",
		"coordinates":[
			new Point(42.363091, -71.261695), 
			new Point(42.363010, -71.261744), 
			new Point(42.362902, -71.261382), 
			new Point(42.362986, -71.261328),
			new Point(42.363034, -71.261469),
			new Point(42.363161, -71.261381),
			new Point(42.363201, -71.261489),
			new Point(42.363054, -71.261590)],
		"category":["dorm"],
		"nearby":["ridgewoodB","ridgewoodC","ziv127","ziv129","ziv130","epstein"],
		"entrances":["ziv128_e01","ziv128_e02","ziv128_e03"],
		"area":["lower campus","ziv"]
	},
	{
		"id":"ziv129",
		"name":"William and Helen Mazer Residence Hall",
		"nickname":"Ziv 129",
		"function":"Ziv 129, sometimes called Ziv C, provides suite-style living for upperclassmen and students going abroad.",
		"description":" Ziv residents live in six-person suites. Each air-conditioned suite has six single bedrooms, a spacious common area and two private bathrooms.",
		"coordinates":[
			new Point(42.362989, -71.261231), 
			new Point(42.362919, -71.261275), 
			new Point(42.362781, -71.260929), 
			new Point(42.362859, -71.260880),
			new Point(42.362903, -71.260992),
			new Point(42.363042, -71.260905),
			new Point(42.363087, -71.261010),
			new Point(42.362955, -71.261101)],
		"category":["dorm"],
		"nearby":["ridgewoodB","ridgewoodC","ziv127","ziv128","ziv130","epstein"],
		"entrances":["ziv129_e01","ziv129_e02","ziv129_e03","village"],
		"area":["lower campus","ziv"]
	},
	{
		"id":"ziv130",
		"name":"Ziv Residence Hall D",
		"nickname":"Ziv 130",
		"function":"Ziv 130 provides suite-style living for upperclassmen and students going abroad.",
		"description":" Ziv residents live in six-person suites. Each air-conditioned suite has six single bedrooms, a spacious common area and two private bathrooms.",
		"coordinates":[
			new Point(42.363353, -71.261089), 
			new Point(42.363300, -71.260968), 
			new Point(42.363179, -71.261039), 
			new Point(42.363141, -71.260940),
			new Point(42.363283, -71.260844),
			new Point(42.363249, -71.260732),
			new Point(42.363317, -71.260689),
			new Point(42.363425, -71.261041)],
		"category":["dorm"],
		"nearby":["ridgewoodB","ridgewoodC","ziv127","ziv128","ziv129","epstein"],
		"entrances":["ziv130_e01","ziv130_e02","ziv130_e03","village"],
		"area":["lower campus","ziv"]
	},
	eastShapiro = {
		"id":"eastShapiro",
		"nickname":"Shapiro Brothers",
		"name":"Shapiro Brothers Residence Hall",
		"coordinates":[
			new Point(42.367660, -71.254624), 
			new Point(42.367675, -71.254487), 
			new Point(42.367912, -71.254631), 
			new Point(42.368023, -71.254770),
			new Point(42.367949, -71.254845),
			new Point(42.367840, -71.254738),],
		"function":"Shapiro Brothers Residence is the middle of the buildings in East, but is often considered part of Hass. It provides traditional dorm living for sophomores.",
		"description":"Shapiro Brothers is one of the buildings in East Quad. East Quad is home to the majority of sophomores on campus. East Quad is comprised of four sections with six names: Hassenfeld-Krivof, Shapiro House, Pomerantz-Rubenstein and Swig, yet students refer to the main residence hall buildings as Hassenfeld and Pomerantz. East Quad is conveniently located across the street from Gosman Sports Center and steps away from the Health Center and the Intercultural Center. East was designed to maximize the potential of the residence living environment to become a tight-knit community. With open lounges on most floors, extended corridors, a community kitchen and large common areas, life in East is anything but dull. The top floors of East also provide residents with a clear, breathtaking view of the Boston skyline.",
		"category":["dorm"],
		"entrances":["eastHassenfeld_e02","eastShapiro_e01"],
		"nearby":["eastRubenstein","eastHassenfeld","icc"],
		"area":["upper campus","east"]
		},
	eastRubenstein = {
		"id":"eastRubenstein",
		"nickname":"Pom",
		"name":"Rubenstein-Pomerantz Residence Hall",
		"coordinates":[
			new Point(42.367674, -71.254822), 
			new Point(42.367690, -71.254675), 
			new Point(42.367574, -71.254671), 
			new Point(42.367492, -71.254699),
			new Point(42.367367, -71.254766),
			new Point(42.367370, -71.254793),
			new Point(42.367315, -71.254804),
			new Point(42.367225, -71.254787),
			new Point(42.367210, -71.254906),
			new Point(42.367331, -71.254930),
			new Point(42.367476, -71.254854),
			new Point(42.367581, -71.254801),
			new Point(42.367581, -71.254801),],
		"function":"Pom has traditional dorm living for sophomores.",
		"description":"Rubenstein-Pomerantz is one of the buildings in East Quad. East Quad is home to the majority of sophomores on campus. East Quad is comprised of four sections with six names: Hassenfeld-Krivof, Shapiro House, Pomerantz-Rubenstein and Swig, yet students refer to the main residence hall buildings as Hassenfeld and Pomerantz. East Quad is conveniently located across the street from Gosman Sports Center and steps away from the Health Center and the Intercultural Center. East was designed to maximize the potential of the residence living environment to become a tight-knit community. With open lounges on most floors, extended corridors, a community kitchen and large common areas, life in East is anything but dull. The top floors of East also provide residents with a clear, breathtaking view of the Boston skyline.",
		"category":["dorm"],
		"entrances":["eastRubenstein_e01"],
		"nearby":["eastShapiro","eastHassenfeld","icc"],
		"area":["upper campus","east"]
		},
	eastHassenfeld = {
		"id":"eastHassenfeld",
		"nickname":"Hass",
		"name":"Hassenfeld-Krivoff Residence Hall",
		"coordinates":[
			new Point(42.367949, -71.254845),
			new Point(42.368023, -71.254770),
			new Point(42.368088, -71.254948), 
			new Point(42.368194, -71.255178), 
			new Point(42.368133, -71.255269), 
			new Point(42.368049, -71.255182),
			new Point(42.367987, -71.255001),],
		"function":"Hass has traditional dorm living for sophomores.",
		"description":"Hassenfeld-Krivoff is one of the buildings in East Quad. East Quad is home to the majority of sophomores on campus. East Quad is comprised of four sections with six names: Hassenfeld-Krivof, Shapiro House, Pomerantz-Rubenstein and Swig, yet students refer to the main residence hall buildings as Hassenfeld and Pomerantz. East Quad is conveniently located across the street from Gosman Sports Center and steps away from the Health Center and the Intercultural Center. East was designed to maximize the potential of the residence living environment to become a tight-knit community. With open lounges on most floors, extended corridors, a community kitchen and large common areas, life in East is anything but dull. The top floors of East also provide residents with a clear, breathtaking view of the Boston skyline.",
		"category":["dorm"],
		"entrances":["eastHassenfeld_e01","eastHassenfeld_e02"],
		"nearby":["eastRubenstein","eastShapiro","icc"],
		"area":["upper campus","east"]
		},
	gordon = {
		"id":"gordon",
		"name":"Gordon Residence Hall",
		"nickname":"Gordon",
		"coordinates":[
			new Point(42.369957, -71.255900),
			new Point(42.369748, -71.256009),
			new Point(42.369755, -71.256049), 
			new Point(42.369677, -71.256090), 
			new Point(42.369671, -71.256048), 
			new Point(42.369415, -71.256188),
			new Point(42.369371, -71.256014),
			new Point(42.369503, -71.255945),
			new Point(42.369515, -71.255983),
			new Point(42.369921, -71.255774),],
		"function":"Gordon provides traditional dorm style living for freshmen.",
		"description": "Gordon is one of the buildings in North Quad, which is mainly for freshmen. Students living in North enjoy traditional-style residence hall living on single sex and mixed gender floors. North Quad sits at the top of campus next to the Rabb Academic Quad, housing most humanities classes, and the Kutz Hall administrative building, housing the University Registrar, Campus Card Office and International Students & Scholars Office, amongst others. Furthermore, North is only steps from the Usdan Student Center, home to Dining Services, Hillel, a convenience store, the campus mailroom, the Chaplaincy, Academic Services, Hiatt Career Center and the Department of Community Living.",
		"category":["dorm"],
		"entrances":["gordon_e01","gordon_e02"],
		"nearby":["reitman","cable","scheffres","kutz"],
		"area":["upper campus","north"]
	},
	reitman = {
		"id":"reitman",
		"name":"Reitman Residence Hall",
		"nickname":"Reitman",
		"coordinates":[
			new Point(42.369828, -71.255653),
			new Point(42.369732, -71.255706),
			new Point(42.369525, -71.254981), 
			new Point(42.369618, -71.254926), 
			new Point(42.369709, -71.255244), 
			new Point(42.369740, -71.255230),
			new Point(42.369783, -71.255377),
			new Point(42.369757, -71.255393),],
		"function":"Reitman provides traditional dorm style living for freshmen.",
		"description": "Reitman is one of the buildings in North Quad, which is mainly for freshmen. Students living in North enjoy traditional-style residence hall living on single sex and mixed gender floors. North Quad sits at the top of campus next to the Rabb Academic Quad, housing most humanities classes, and the Kutz Hall administrative building, housing the University Registrar, Campus Card Office and International Students & Scholars Office, amongst others. Furthermore, North is only steps from the Usdan Student Center, home to Dining Services, Hillel, a convenience store, the campus mailroom, the Chaplaincy, Academic Services, Hiatt Career Center and the Department of Community Living.",
		"category":["dorm"],
		"entrances":["reitman_e01","reitman_e02"],
		"nearby":["gordon","cable","scheffres","kutz"],
		"area":["upper campus","north"]
	},
	cable = {
		"id":"cable",
		"name":"Cable Residence Hall",
		"nickname":"Cable",
		"coordinates":[
			new Point(42.369470, -71.255235),
			new Point(42.368966, -71.255482),
			new Point(42.368935, -71.255353), 
			new Point(42.369157, -71.255244), 
			new Point(42.369148, -71.255206), 
			new Point(42.369263, -71.255150),
			new Point(42.369272, -71.255185),
			new Point(42.369430, -71.255103),],
		"function":"Cable provides traditional dorm style living for freshmen.",
		"description": "Cable is one of the buildings in North Quad, which is mainly for freshmen.Students living in North enjoy traditional-style residence hall living on single sex and mixed gender floors. North Quad sits at the top of campus next to the Rabb Academic Quad, housing most humanities classes, and the Kutz Hall administrative building, housing the University Registrar, Campus Card Office and International Students & Scholars Office, amongst others. Furthermore, North is only steps from the Usdan Student Center, home to Dining Services, Hillel, a convenience store, the campus mailroom, the Chaplaincy, Academic Services, Hiatt Career Center and the Department of Community Living",
		"category":["dorm"],
		"entrances":["cable_e01","cable_e02"],
		"nearby":["reitman","gordon","scheffres","kutz"],
		"area":["upper campus","north"]
	},
	scheffres = {
		"id":"scheffres",
		"name":"Scheffres Residence Hall",
		"nickname":"Scheffres",
		"coordinates":[
			new Point(42.369447, -71.256173),
			new Point(42.369482, -71.256295),
			new Point(42.369348, -71.256366), 
			new Point(42.369358, -71.256408), 
			new Point(42.369282, -71.256449), 
			new Point(42.369268, -71.256409),
			new Point(42.369061, -71.256518),
			new Point(42.369023, -71.256391),],
		"function":"Scheffres provides traditional dorm style living for freshmen.",
		"description": "Scheffres is one of the buildings in North Quad, which is mainly for freshmen. Students living in North enjoy traditional-style residence hall living on single sex and mixed gender floors. North Quad sits at the top of campus next to the Rabb Academic Quad, housing most humanities classes, and the Kutz Hall administrative building, housing the University Registrar, Campus Card Office and International Students & Scholars Office, amongst others. Furthermore, North is only steps from the Usdan Student Center, home to Dining Services, Hillel, a convenience store, the campus mailroom, the Chaplaincy, Academic Services, Hiatt Career Center and the Department of Community Living.",
		"category":["dorm"],
		"entrances":["scheffres_e01"],
		"nearby":["reitman","cable","gordon","kutz"],
		"area":["upper campus","north"]
	},
	{
		"id":"uppermods",
		"name":"Upper Foster Mods",
		"nickname":"Upper Mods",
		"coordinates":[new Point(42.366041, -71.253935),
			new Point(42.365984, -71.254039),
			new Point(42.366113, -71.254255),
			new Point(42.366176, -71.254274),
			new Point(42.366272, -71.254230),
			new Point(42.366344, -71.254103),
			new Point(42.366407, -71.253734),
			new Point(42.366360, -71.253612),
			new Point(42.366273, -71.253516),
			new Point(42.366166, -71.253488),
			new Point(42.366117, -71.253520),
			new Point(42.366055, -71.253626),
			new Point(42.366009, -71.253753),
			new Point(42.366086, -71.253840)],
		"function":"The Mods provide suite-style living for seniors.",
		"description":"The Foster Mods are comprised of four- and six-person town houses designed for independent living.  Each Mod includes a kitchen, dining room, living room, and one or two bathrooms.  All bedrooms are single occupancy, and these bedrooms may fall on the same floor or different floors depending on the layout of the Mod.  Single rooms within these apartments range from 95 square feet to 115 square feet.  Students are responsible for cleaning their own kitchens, bathrooms, and shared living areas.",
		"category":["dorm"],
		"entrances":["uppermods_e01"],
		"nearby":["lowermods","linsey","gosman","linseyparkinglot","gosmanparkinglot"],
		"area":["athletics","foster mods"]
	},
	{
		"id":"lowermods",
		"name":"Lower Foster Mods",
		"nickname":"Lower Mods",
		"coordinates":[new Point(42.365744, -71.253350),
			new Point(42.365636, -71.253089),
			new Point(42.365532, -71.253299),
			new Point(42.365445, -71.253213),
			new Point(42.365488, -71.253086),
			new Point(42.365547, -71.252979),
			new Point(42.365599, -71.252943),
			new Point(42.365707, -71.252979),
			new Point(42.365787, -71.253064),
			new Point(42.365840, -71.253202),
			new Point(42.365899, -71.253313),
			new Point(42.365976, -71.253389),
			new Point(42.366024, -71.253526),
			new Point(42.366009, -71.253593),
			new Point(42.365948, -71.253707),
			new Point(42.365859, -71.253784),
			new Point(42.365776, -71.253700),
			new Point(42.365840, -71.253585),
			new Point(42.365867, -71.253610),
			new Point(42.365922, -71.253506)],
		"function":"The Mods provide suite-style living for seniors.",
		"description":"The Foster Mods are comprised of four- and six-person town houses designed for independent living.  Each Mod includes a kitchen, dining room, living room, and one or two bathrooms.  All bedrooms are single occupancy, and these bedrooms may fall on the same floor or different floors depending on the layout of the Mod.  Single rooms within these apartments range from 95 square feet to 115 square feet.  Students are responsible for cleaning their own kitchens, bathrooms, and shared living areas.",
		"category":["dorm"],
		"entrances":["lowermods_e01"],
		"nearby":["uppermods","linsey","gosman","linseyparkinglot","gosmanparkinglot"],
		"area":["athletics","foster mods"]
	}

]

function Point(x,y) {
	this.x = x;
	this.y = y;
}