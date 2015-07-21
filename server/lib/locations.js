locations = [
	{
		"id":"volen",
		"name": "Benjamin and Mae Volen National Center for Complex Systems",
		"nickname": "Volen",
		"coordinates": [
			new Point(42.367036,-71.259186), 
			new Point(42.367184,-71.259039),
			new Point(42.366944,-71.258458),
			new Point(42.366783,-71.258614)],
		"function": "Volen is home to Brandeis' computer science and linguistics departments.",
		"description": "The Volen Center, or National Center for Complex Systems, in which faculty \
						and students study the brain and intelligence. This center’s staff specialize \
						in artificial intelligence, cognitive science, and various neuroscience topics \
						(examples include experimental psychology, computational neuroscience, and cellular \
						and molecular neurobiology).",
		"category":["science","classroom","offices"],
		"entrances":["volen_e01","volen_ie02","volen_ie03","feldberg_ie01"],
		"nearby":["feldberg","gzang","goldsmith","chapelsfield"]
	},
	{
		"id":"scc",
		"name": "Carl and Ruth Shapiro Campus Center",
		"nickname": "SCC",
		"coordinates": [
			new Point(42.365528, -71.260574),
			new Point(42.365736, -71.260538),
			new Point(42.365733, -71.260315),
			new Point(42.365894, -71.260192),
			new Point(42.366005, -71.260338),
			new Point(42.366120, -71.260064),
			new Point(42.365793, -71.259663),
			new Point(42.365548, -71.259941),
		],
		"function": "The SCC is home to many of Brandeis' media clubs, the bookstore, and the Student Union. Students can access the SCC 24/7 and many can be found studying here.",
		"description":"green",
		"category":["student center"],
		"entrances":["scc_e01","scc_e02","scc_e03"]
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
		"entrances":['fellowsgarden_c01','fellowsgarden_c02','fellowsgarden_c03']
	},
	{
		"id":"greatlawn",
		"name": "The Great Lawn",
		"nickname": "Great Lawn",
		"coordinates": [
			new Point(42.365256, -71.260295),
			new Point(42.364860, -71.260703),
			new Point(42.365101, -71.261341),
			new Point(42.365428, -71.260770),],
		"function": "Great Lawn is a nice place to hangout with friends in nice weather",
		"description":"",
		"category":["lawn"],
		"entrances":['scc_c07','scc_c08','scc_c09','scc_c10']
	},
	{
		"id":"roseart",
		"name": "The Rose Art Museum",
		"nickname": "The Rose",
		"coordinates": [
			new Point(42.365986, -71.262427),
			new Point(42.365909, -71.262201),
			new Point(42.365627, -71.262362),
			new Point(42.365555, -71.262220),
			new Point(42.365439, -71.262283),
			new Point(42.365561, -71.262668),
			new Point(42.365437, -71.262762),
			new Point(42.365498, -71.262956),
			new Point(42.365797, -71.262774),
			new Point(42.365739, -71.262582),
			],
		"function": "The Rose Art Museum displays contemporary art with rotating exhibits.",
		"description":"The Museum",
		"category":["art"],
		"entrances":['museum_e01']
	},

	bassine = {
		"id":"bassine",
		"name": "Bassine Science Building",
		"nickname": "Bassine",
		"coordinates": [
			new Point(42.367122,-71.258208),
			new Point(42.366997,-71.258307),
			new Point(42.366656,-71.257562),
			new Point(42.366782,-71.257457), ],
		"function": "Bassine Science Building has many bio lab?",
		"description":"Lab",
		"category":["science","classroom"],
		"entrances":["bassine_e01","bassine_e02","bassine_e03"]

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
		"category":["science","offices"],
		"entrances":["feldberg_e01","feldberg_ie01"]
	},
	
	turner = {
		"id":"turner",
		"nickname":"Turner",
		"name":"60 Turner Street",
		"function":"Turner is home to the classrooms for the Osher Lifelong Learning Institute at Brandeis.",
		"coordinates":[
			new Point(42.362090, -71.264160), 
			new Point(42.362017, -71.263813),
			new Point(42.361845, -71.263886),
			new Point(42.361886, -71.264220)],
		"category":["administrative","classroom"],
		"entrances":["turner_e01"]
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
		"name":"Rubin and Ethel Epstein Center for Campus Services",
		"nickname":"Epstein",
		"function":"Epstein is home to facilities, the Women's Studies Research Center, and the Kniznick Gallery.",
		"coordinates":[
			new Point(42.362457,-71.261636), 
			new Point(42.362374,-71.260823), 
			new Point(42.362134,-71.260864), 
			new Point(42.362204,-71.261671)],
		"category":["classroom","offices"],
		"entrances":["epstein_e01","epstein_e02"]
		},
	facultycenter = {
		"id":"facultycenter",
		"name":"Faculty Center",
		"coordinates":[
			new Point(42.36569,-71.261466), 
			new Point(42.365861,-71.261069), 
			new Point(42.365651,-71.260898), 
			new Point(42.36548,-71.2613)],
		"category":["dining"]
		},
	goldman = {
		"id":"goldman",
		"name":"Goldman-Schwartz Fine Arts",
		"coordinates":[
			new Point(42.365001,-71.263157), 
			new Point(42.364799,-71.26258), 
			new Point(42.364525,-71.262821), 
			new Point(42.364628,-71.263304)],
		"category":["art"],
		"entrances":['goldman_e01','goldman_e02']
		},
	gryzmish = {
		"id":"gryzmish",
		"name":"Gryzmish Center",
		"coordinates":[
			new Point(42.365593,-71.259553), 
			new Point(42.365759,-71.25918), 
			new Point(42.365577,-71.259025), 
			new Point(42.365417,-71.259403)],
		"category":["administrative"]
		},
	sachar = {
		"id":"sachar",
		"name":"Sachar International Center",
		"coordinates":[
			new Point(42.364940, -71.265213), 
			new Point(42.364988, -71.265133), 
			new Point(42.365075, -71.265113), 
			new Point(42.365050, -71.264948), 
			new Point(42.365147, -71.264620), 
			new Point(42.365073, -71.264599), 
			new Point(42.364803, -71.264665), 
			new Point(42.364779, -71.264563), 
			new Point(42.364743, -71.264578), 
			new Point(42.364693, -71.264507), 
			new Point(42.364559, -71.264563), 
			new Point(42.364617, -71.264655), 
			new Point(42.364649, -71.264635), 
			new Point(42.364673, -71.264697), 
			new Point(42.364633, -71.264735), 
			new Point(42.364695, -71.264800), 
			new Point(42.364764, -71.264757), 
			new Point(42.364810, -71.264904), 
			new Point(42.364738, -71.265078), 
		],
		"category":["classroom","graduate"],
		"entrances":['sachar_e01']
		},
	irving = {
		"id":"irving",
		"name":"Irving Presidential Enclave",
		"coordinates":[
			new Point(42.365209,-71.259623), 
			new Point(42.365423,-71.259113), 
			new Point(42.36529,-71.259006), 
			new Point(42.365076,-71.259521)],
		"category":["administrative"]
		},
	info = {
		"id":"info",
		"name":"Information Booth",
		"nickname":"Info Booth",
		"coordinates":[
			new Point(42.365015,-71.258721), 
			new Point(42.365046,-71.258676), 
			new Point(42.365007,-71.258634),
			new Point(42.364978,-71.258681), 
			],
		"category":["informational"],
		"entrances":["info_e01"]
		},
	pollack = {
		"id":"pollack",
		"name":"Pollack Fine Arts Teaching Center",
		"coordinates":[
			new Point(42.365328,-71.26243), 
			new Point(42.365291,-71.262325), 
			new Point(42.365122,-71.262435), 
			new Point(42.365158,-71.262541)],
		"category":["art","classroom"],
		"entrances":['pollack_e01']
		},
	rabbSchool = {
		"id":"rabbSchool",
		"name":"The Rabb School of Continuing Studies",
		"coordinates":[
			new Point(42.363061,-71.258924),
			new Point(42.36298,-71.25929),  
			new Point(42.362872,-71.259233),
			new Point(42.362961,-71.258887)],
		"function":"The Rabb School is home to continuing education, graduate and professional programs, OLLI @ Brandeis, and summer programs, including the Justice Brandeis Semester (JBS).",
		"category":["graduate"],
		"nearby":["lemberg","slosberg"],
		"entrances":["rabbSchool_e01","rabbSchool_e02","rabbSchool_e03"]
		},
	admissions = {
		"id":"admissions",
		"name":"Carl and Ruth Shapiro Admissions Center",
		"nickname":"Admissions",
		"coordinates":[
			new Point(42.364604, -71.260664), 
			new Point(42.364611, -71.260819),
			new Point(42.364489, -71.260878), 
			new Point(42.364150, -71.261231), 
			new Point(42.364074, -71.261022),
			new Point(42.364386, -71.260705)],
		"function":"Admissions hosts tours and provides information about Brandeis to any interested parties.",
		"category":["offices","informational"],
		"entrances":["admissions_e01","admissions_e02"],
		"nearby":["spingold","slosberg","greatlawn","bernstein-marcus","ridgewoodA","ridgewoodB","ridgewoodC","village"]
		},	
	slosberg = {
		"id":"slosberg",
		"name":"Slosberg Music Center",
		"nickname":"Slosberg",
		"coordinates":[
			new Point(42.364412,-71.259683), 
			new Point(42.364319,-71.2594), 
			new Point(42.363891,-71.259666), 
			new Point(42.363985,-71.259942)],
		"function":"Slosberg is home to the Brandeis Concert Series.",
		"description":"The Brandeis Concert Series features about 50-70 student and professional concerts each year.",
		"category":["art","classroom"],
		"entrances":["slosberg_e01","slosberg_e02","slosberg_e03","slosberg_e04"],
		"nearby":["admissions","bernstein-marcus","lemberg","village"]
		},
	spingold = {
		"id":"spingold",
		"name":"Spingold Theater Center",
		"nickname":"Spingold",
		"coordinates":[
			new Point(42.364733, -71.261736), 
			new Point(42.364701, -71.261636), 
			new Point(42.364564, -71.261727), 
			new Point(42.364437, -71.261598),
			new Point(42.364222, -71.261593),
			new Point(42.364060, -71.261870),
			new Point(42.364113, -71.262185),
			new Point(42.364328, -71.262309),
			new Point(42.364550, -71.262137),
			new Point(42.364589, -71.261813),
			],
		"category":["art"],
		"entrances":['spingold_e01','spingold_e02']
		},
	abelson = {
		"id":"abelson",
		"name":"Abelson-Bass-Yalem",
		"nickname":"Abelson",
		"coordinates":[
			new Point(42.366623, -71.258532), 
			new Point(42.366547, -71.258397), 
			new Point(42.366157, -71.258709), 
			new Point(42.366220, -71.258861)],
		"category":["science","classroom"],
		"entrances":["abelson_e01","abelson_e02","abelson_c01","gzang_ie03"]
		},
	berlin = {
		"id":"berlin",
		"name":"Mendel and Leah Berlin Chapel",
		"nickname":"Berlin Chapel",
		"coordinates":[
			new Point(42.368284,-71.260708), 
			new Point(42.368244,-71.260593), 
			new Point(42.368082,-71.260705), 
			new Point(42.368135,-71.26081)],
		"category":["religious"],
		"entrances":["berlin_e01"]
		},
	bethlehem = {
		"id":"bethlehem",
		"name":"Bethlehem Chapel",
		"nickname":"Bethlehem Chapel",
		"coordinates":[
			new Point(42.368343,-71.260178), 
			new Point(42.368259,-71.259998), 
			new Point(42.368196,-71.260047), 
			new Point(42.368267,-71.260243)],
		"category":["religious"],
		"entrances":["bethlehem_e01"]
		},
	harlan = {
		"id":"harlan",
		"name":"John Marshall Harlan Chapel",
		"nickname":"Harlan Chapel",
		"coordinates":[
			new Point(42.368776,-71.260739), 
			new Point(42.368692,-71.260564), 
			new Point(42.36865,-71.2606), 
			new Point(42.368732,-71.260779)],
		"category":["religious"],
		"entrances":["harlan_e01"]
		},
	chapelsField = {
		"id":"chapelsField",
		"name":"Chapels Field",
		"nickname":"Chapels Field",
		"coordinates":[
			new Point(42.368103,-71.260244), 
			new Point(42.36763,-71.25901), 
			new Point(42.367281,-71.259034), 
			new Point(42.367681,-71.260542)],
		"category":["lawn"]
		},
	brown = {
		"id":"brown",
		"name":"Brown Social Science Center",
		"nickname":"Brown",
		"coordinates":[
			new Point(42.367383,-71.257225), 
			new Point(42.36728,-71.256666), 
			new Point(42.367169,-71.256718), 
			new Point(42.367266,-71.257265)],
		"category":["classroom"],
		"entrances":["brown_e01"],
		},
	farber = {
		"id":"farber",
		"name":"Farber Library",
		"nickname":"Farber",
		"coordinates":[
			new Point(42.367907,-71.258866), 
			new Point(42.368046,-71.25855), 
			new Point(42.367823,-71.258354), 
			new Point(42.367688,-71.25867)],
		"category":["library"],
		"entrances":["farber_e01"],
		},
	goldsmith = {
		"id":"goldsmith",
		"name":"Horace W. Goldsmith Mathematics Building",
		"nickname":"Goldsmith",
		"coordinates":[
			new Point(42.366987, -71.258249), 
			new Point(42.367149, -71.258613), 
			new Point(42.367281, -71.258526), 
			new Point(42.367103, -71.258148)],
		"function":"Goldsmith is home to the mathematics department.",
		"category":["science","classroom"],
		"entrances":["goldsmith_e01","goldsmith_ie02"]
		},
	{
		"id":"edison",
		"name":"Edison-Lecks Science Building",
		"nickname":"Edison",
		"coordinates":[
			new Point(42.366392, -71.258480),
			new Point(42.366531, -71.258364),
			new Point(42.366321, -71.257893),
			new Point(42.366182, -71.258006)
		],
		"function":"",
		"category":["science","classroom"],
		"entrances":["edison_e01","gzang_ie02"]
	},
	heller = {
		"id":"heller",
		"name":"Heller-Brown Building",
		"nickname":"Heller",
		"coordinates":[
			new Point(42.369326,-71.259107), 
			new Point(42.369187,-71.258417), 
			new Point(42.369025,-71.258474), 
			new Point(42.369158,-71.259171)],
		"function":"Heller-Brown is home to the Heller School for Social Policy and Management, one of the top ten schools of social policy in the United States and one of the eight approved U.S. training institutions for World Bank Scholars.",
		"category":["classroom","graduate"],
		"entrances":["heller_e01"],
		},
	rabb = {
		"id":"rabb",
		"name":"Rabb Graduate Center",
		"coordinates":[
			new Point(42.369289,-71.25762), 
			new Point(42.369127,-71.256792), 
			new Point(42.368996,-71.256845),
			new Point(42.36915,-71.257674), 
			],
		"category":["graduate"],
		"entrances":["rabb_e01"]
		},
	roseMedical = {
		"id":"roseMedical",
		"name":"Rosenstiel Basic Medical Sciences Research Center",
		"coordinates":[
			new Point(42.366103,-71.257429), 
			new Point(42.365901,-71.257013), 
			new Point(42.365724,-71.257239), 
			new Point(42.365884,-71.257585)],
		"category":["science"],
		"entrances":["rosenstiel_e01","rosenstiel_e02"]
		},
	schwartz = {
		"id":"schwartz",
		"name":"Schwartz Hall",
		"nickname":"Schwartz",
		"coordinates":[
			new Point(42.367642,-71.257438), 
			new Point(42.367563,-71.257024), 
			new Point(42.367418,-71.257072), 
			new Point(42.367494,-71.257484)],
		"category":["classroom"],
		"entrances":["schwartz_e01"]
		},
	scienceCenter = {
		"id":"ssc",
		"name":"Carl J. Shapiro Science Center",
		"nickname":"Science Center",
		"coordinates":[
			new Point(42.365962, -71.258665), 
			new Point(42.366050, -71.258434), 
			new Point(42.366101, -71.257962), 
			new Point(42.366146, -71.257913), 
			new Point(42.366045, -71.257711), 
			new Point(42.365870, -71.257891), 
			new Point(42.365841, -71.258311), 
			new Point(42.365741, -71.258570), 
		],
		"category":["science","classroom","student center"],
		"entrances":["ssc_e01","ssc_e02","ssc_e03","ssc_ie01"]
		},
	usdan = {
		"id":"usdan",
		"name":"Usdan Student Center",
		"nickname":"Usdan",
		"coordinates":[
			new Point(42.368296,-71.256585), 
			new Point(42.367852,-71.256794), 
			new Point(42.367777,-71.256451), 
			new Point(42.368243,-71.256259)],
		"category":["student center","dining"],
		"entrances":["usdan_e01"]
		
		},
	gosman = {
		"id":"gosman",
		"name":"Gosman Sports and Convocation Center",
		"nickname":"Gosman",
		"coordinates":[
			new Point(42.365193,-71.255688), 
			new Point(42.365761,-71.25482), 
			new Point(42.364998,-71.253952), 
			new Point(42.364449,-71.254864)],
		"category":["athletics"],
		"entrances":["gosman_e01"],
		},
	linsey = {
		"id":"linsey",
		"name":"Joseph M. Linsey Sports Center",
		"nickname":"Linsey",
		"coordinates":[
			new Point(42.366071, -71.254290), 
			new Point(42.365863, -71.254620), 
			new Point(42.365636, -71.254366),
			new Point(42.365844, -71.254032), ],
		"category":["athletics"],
		"entrances":["linsey_e01","linsey_e02"],
	},
	mailman = {
		"id":"mailman",
		"name":"Mailman House",
		"nickname":"Mailman",
		"coordinates":[
			new Point(42.365936, -71.255702), 
			new Point(42.365895, -71.255935), 
			new Point(42.365766, -71.255962),
			new Point(42.365809, -71.255654), ],
		"category":["health"],
		"entrances":["mailman_e01"],
	},
	castle = {
		"id":"castle",
		"name":"Usen Castle",
		"nickname":"Castle",
		"coordinates":[
			new Point(42.367726, -71.255875), 
			new Point(42.367516, -71.256036), 
			new Point(42.366953, -71.255936), 
			new Point(42.366929, -71.255488),
			new Point(42.367387, -71.255545)],
		"category":["art"],
		"entrances":["castle_e01","castle_e02"],
	},
	icc = {
		"id":"icc",
		"name":"Intercultural Center",
		"nickname":"ICC",
		"coordinates":[
			new Point(42.367807, -71.254980), 
			new Point(42.367790, -71.255139), 
			new Point(42.367576, -71.255094), 
			new Point(42.367591, -71.254939),],
		"category":["art"],
		"entrances":["icc_e01"],
	},

	kutz = {
		"id":"kutz",
		"name":"Kutz Hall",
		"nickname":"Kutz",
		"coordinates":[
			new Point(42.369162, -71.256163), 
			new Point(42.369043, -71.256226), 
			new Point(42.369012, -71.256130), 
			new Point(42.368903, -71.256184),
			new Point(42.368807, -71.255841),
			new Point(42.368912, -71.255787),
			new Point(42.368880, -71.255647),
			new Point(42.368997, -71.255590),
			new Point(42.369113, -71.256013),
			new Point(42.369151, -71.255997),
			new Point(42.369151, -71.256053),
			new Point(42.369131, -71.256053),],
		"category":["offices","administrative"],
		"entrances":["kutz_e01","Kutz_e02"],
	},
	mandel = {
		"id":"mandel",
		"name":"Mandel Center for the Humanities",
		"nickname":"Mandel",
		"coordinates":[
			new Point(42.369854, -71.258567), 
			new Point(42.369817, -71.258603), 
			new Point(42.369811, -71.258588), 
			new Point(42.369757, -71.258614),
			new Point(42.369751, -71.258594),
			new Point(42.369739, -71.258596),
			new Point(42.369728, -71.258563),
			new Point(42.369705, -71.258573),
			new Point(42.369575, -71.258092),
			new Point(42.369444, -71.258020),
			new Point(42.369496, -71.257939),
			new Point(42.369476, -71.257872),
			new Point(42.369467, -71.257794),
			new Point(42.369479, -71.257751),
			new Point(42.369491, -71.257723),
			new Point(42.369513, -71.257705),
			new Point(42.369535, -71.257709),
			new Point(42.369570, -71.257757),
			new Point(42.369589, -71.257849),
			new Point(42.369607, -71.257813),
			new Point(42.369629, -71.257896),
			new Point(42.369663, -71.257879),],
		"function": "Mandel is home to Brandeis' humanities and languages departments.",
		"description": "The Mandel Center for the Humanities was created as an interdisciplinary building \
						that specifically combines subjects in order for students to have a better understanding \
						of the major themes of the human experience. The Center’s courses include languages, \
						literature, philosophy, history, anthropology, sociology, and are \
						intended for undergraduate students, graduate students, faculty, and visitors. This \
						building regularly hosts an interdisciplinary seminar taught by several professors from \
						different areas of study. Classes in this building are taught in a round-table setting \
						as well as in lecture halls.",
		"category":["classroom"],
		"entrances":["mandel_e01"],
		"nearby":["olin-sang","golding","rabbGrad", "heller"],
	},
	golding = {
		"id":"golding",
		"name":"Golding Judaic Center",
		"nickname":"Golding",
		"coordinates":[
			new Point(42.370371, -71.257649), 
			new Point(42.370013, -71.258116), 
			new Point(42.369876, -71.257926), 
			new Point(42.370232, -71.257451),],
		"category":["classroom"],
		"entrances":["golding_e01"],
		"nearby":["olin-sang","mandel","lown","shiffman"]
	},
	shiffman = {
		"id":"shiffman",
		"name":"Shiffman Humanities Center",
		"nickname":"Shiffman",
		"coordinates":[
			new Point(42.369937, -71.257230), 
			new Point(42.369831, -71.257372), 
			new Point(42.369475, -71.256876), 
			new Point(42.369583, -71.256729),],
		"category":["classroom"],
		"entrances":["shiffman_e01"],
	},
	olinsang = {
		"id":"olin-sang",
		"name":"Olin-Sang American Civilization Center",
		"nickname":"Olin-Sang",
		"coordinates":[
			new Point(42.369899, -71.257850), 
			new Point(42.369778, -71.258012), 
			new Point(42.369392, -71.257481), 
			new Point(42.369507, -71.257322),],
		"category":["classroom"],
		"entrances":["olin-sang_e01"],
	},
	goldfarb = {
		"id":"goldfarb",
		"name":"Goldfarb Library",
		"nickname":"Goldfarb",
		"coordinates":[
			new Point(42.368789, -71.258209), 
			new Point(42.368123, -71.258451), 
			new Point(42.367935, -71.258283), 
			new Point(42.367945, -71.258188),
			new Point(42.367892, -71.258129),
			new Point(42.367823, -71.258152),
			new Point(42.367790, -71.257981),
			new Point(42.367993, -71.257914), 
			new Point(42.368135, -71.257891),
			new Point(42.368118, -71.257811),
			new Point(42.368674, -71.257622),],
		"category":["classroom"],
		"description": "A longer description",
		"entrances":["goldfarb_e01","goldfarb_e02"],
	},	
	gerstenzang = {
		"id":"gerstenzang",
		"name":"Gerstenzang Science Library",
		"nickname":"Gzang",
		"coordinates":[
			new Point(42.366974, -71.258330), 
			new Point(42.366653, -71.257549), 
			new Point(42.366304, -71.257812), 
			new Point(42.366647, -71.258526)],
		"category":["library","classroom"],
		"entrances":["gzang_e01","gzang_e02","gzang_ie01","gzang_ie02","gzang_ie03"],
	},
	pearlman = {
		"id":"pearlman",
		"name":"Pearlman Hall",
		"nickname":"Pearlman",
		"coordinates":[
			new Point(42.367619, -71.258118), 
			new Point(42.367577, -71.257855), 
			new Point(42.367302, -71.257938), 
			new Point(42.367367, -71.258206)],
		"category":["classroom"],
		"entrances":["pearlman_e01","pearlman_e02"],
	},

	{
		"id":"abraham",
		"name":"Abraham Shapiro Academic Complex",
		"coordinates":[
			new Point(42.369827, -71.259680), 
			new Point(42.369761, -71.259332), 
			new Point(42.369684, -71.259351),
			new Point(42.369666, -71.259279),  
			new Point(42.369609, -71.259300),
			new Point(42.369722, -71.259721),],
		"category":["offices"],
		"entrances":["abraham_e01"],
	},
	{
		"id":"mandelJewish",
		"name":"Mandel Center for Studies in Jewish Education",
		"coordinates":[
			new Point(42.369615, -71.259750), 
			new Point(42.369553, -71.259402), 
			new Point(42.369590, -71.259387),
			new Point(42.369577, -71.259318),
			new Point(42.369605, -71.259309),  
			new Point(42.369609, -71.259300),
			new Point(42.369722, -71.259721),],
		"category":["offices"],
		"entrances":["mandelJewish_e01"],
	},
	{
		"id":"schneider",
		"name":"The Heller School for Social Policy and Management, Schneider Building",
		"nickname":"Schneider Building",
		"coordinates":[
			new Point(42.369303, -71.259773), 
			new Point(42.369452, -71.259208), 
			new Point(42.369298, -71.259200),
			new Point(42.369289, -71.259155),
			new Point(42.369278, -71.259090),  
			new Point(42.369169, -71.259145),
			new Point(42.369148, -71.259343),
			new Point(42.369258, -71.259346),
			new Point(42.369166, -71.259735),],
		"category":["offices"],
		"entrances":["schneider_e01"],
	},
	{
		"id":"lown",
		"name":"Lown School of Near Eastern and Judaic Studies",
		"nickname":"Lown Building",
		"coordinates":[
			new Point(42.370321, -71.257312), 
			new Point(42.370185, -71.257497), 
			new Point(42.369941, -71.257161),
			new Point(42.370076, -71.256976),],
		"category":["classroom"],
		"entrances":["lown_e01"],
	},
	{
		"id":"levin",
		"name":"Levin Ballroom",
		"coordinates":[
			new Point(42.368350, -71.256863), 
			new Point(42.368408, -71.257168), 
			new Point(42.368260, -71.257223),
			new Point(42.368273, -71.257331),
			new Point(42.368280, -71.257333),
			new Point(42.368109, -71.257388),
			new Point(42.368090, -71.257274),
			new Point(42.367938, -71.257330),
			new Point(42.367883, -71.257026),],
		"category":[],
		"entrances":["levin_e01","levin_e02",],
	},
	{
		"id":"rosensweig",
		"name":"Kosow-Wolfson-Rosensweig",
		"nickname":"Rosensweig",
		"coordinates":[
			new Point(42.366323, -71.256866), 
			new Point(42.366046, -71.257092), 
			new Point(42.366027, -71.257055),
			new Point(42.365949, -71.257121),
			new Point(42.365901, -71.257018),
			new Point(42.365947, -71.256925),
			new Point(42.366248, -71.256689),],
		"category":["lab"],
		"entrances":["rosensweig_e01","rosensweig_e02","rosensweig_e03"],
	},
	{
		"id":"foster",
		"name":"Henry and Lois Foster Bio-Medical Research Center",
		"coordinates":[
			new Point(42.366149, -71.256427), 
			new Point(42.365998, -71.256557), 
			new Point(42.366021, -71.256622),
			new Point(42.365893, -71.256732),
			new Point(42.365884, -71.256773),
			new Point(42.365947, -71.256925),
			new Point(42.366274, -71.256662),],
		"category":["lab"],
		"entrances":["foster_e01"],
	},
	{
		"id":"safety",
		"name":"Stoneman Infirmary and Public Safety",
		"coordinates":[
			new Point(42.366291, -71.255616), 
			new Point(42.366332, -71.255391), 
			new Point(42.366273, -71.255372),
			new Point(42.366256, -71.255452),
			new Point(42.366163, -71.255420),
			new Point(42.366194, -71.255245),
			new Point(42.366161, -71.255235),
			new Point(42.366148, -71.255283),
			new Point(42.366087, -71.255263),
			new Point(42.365993, -71.255795),
			new Point(42.366084, -71.255826),
			new Point(42.366143, -71.255511),
			new Point(42.366241, -71.255544),
			new Point(42.366228, -71.255598),],
		"category":[],
		"entrances":["police_e01"],
	},
	{
		"id":"healthcenter",
		"nickname":"Health Center",
		"name":"Golding Health Center",
		"coordinates":[
			new Point(42.366174, -71.255160), 
			new Point(42.366151, -71.255285), 
			new Point(42.366057, -71.255249),
			new Point(42.366043, -71.255312),
			new Point(42.365981, -71.255289),
			new Point(42.366011, -71.255133),
			new Point(42.366046, -71.255147),
			new Point(42.366054, -71.255118),],
		"category":["health"],
		"entrances":["healthcenter_e01"],
	},
	{
		"id":"superconducting",
		"nickname":"Landsman",
		"name":"Landsman Research Facility",
		"coordinates":[
			new Point(42.366049, -71.255343), 
			new Point(42.366031, -71.255433), 
			new Point(42.365898, -71.255424),
			new Point(42.365927, -71.255305),],
		"category":["lab"],
		"entrances":["superconducting_e01"],
	},
	{
		"id":"mandelpeacegarden",
		"nickname":"Peace Circle",
		"name":"Mandel Peace Garden",
		"coordinates":[
			new Point(42.367868, -71.257631), 
			new Point(42.367728, -71.257779), 
			new Point(42.367751, -71.257513),],
		"category":["garden"],
	},
	{
		"id":"lemberg",
		"nickname":"Lemberg",
		"name":"Gersh and Sarah Lemberg Children's Center",
		"function":"Lemberg offers childcare for children under age seven. Brandeis students majoring in education can work and teach here.",
		"coordinates":[
			new Point(42.363665, -71.258979),
			new Point(42.363665, -71.259105),
			new Point(42.363508, -71.259228),
			new Point(42.363443, -71.259073),
			new Point(42.363404, -71.258886),
			new Point(42.363630, -71.258806)
		],
		"category":["classroom"],
		"nearby":["rabbSchool","slosberg"],
		"entrances":["lemberg_e01"]
	},
	{
		"id":"samuellemberg",
		"nickname":"Lemberg",
		"name":"Samuel Lemberg Academic Center",
		"function":"",
		"coordinates":[
			new Point(42.364705, -71.264387),
			new Point(42.364670, -71.264192),
			new Point(42.364538, -71.264051),
			new Point(42.364373, -71.264029),
			new Point(42.364363, -71.264184),
			new Point(42.364425, -71.264190),
			new Point(42.364495, -71.264491),
		],
		"category":["classroom"],
		"nearby":["sachar","goldman"],
		"entrances":['samuellemberg_e01','samuellemberg_e02']
	},


]

function Point(x,y) {
	this.x = x;
	this.y = y;
}