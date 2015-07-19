points_grad = [
	{
		"id":"turner_e01",
		"coordinate":new Point(42.362048, -71.263937),
		"type":"entrance",
		"getTo":"Head to the main entrance of Turner."
	},
	{
		"id":"turner_c01",
		"coordinate":new Point(42.361986, -71.263398),
		"type":"crossing"
	},
	{
		"id":"turner_c02", //behind cappy's
		"coordinate":new Point(42.361666, -71.261535),
		"type":"crossing"
	},
	{
		"id":"turner_c03",
		"coordinate":new Point(42.361578, -71.261155),
		"type":"crossing"
	},
	{
		"id":"ss567_e01",
		"coordinate":new Point(42.361247, -71.261440),
		"type":"entrance",
		"getTo":"Head to the main entrance of 567."
	},
	{
		"id":"ss567_e02", //by cappy's
		"coordinate":new Point(42.361384, -71.261480),
		"type":"entrance",
		"getTo":"Head to the 567 entrance nearest to Cappy's."
	},
	{
		"id":"ss567_e03",
		"coordinate":new Point(42.361198, -71.261614),
		"type":"entrance",
		"getTo":"Head to the 567 entrance on the far side of Cappy's."
	},
	{
		"id":"ss567_c01", // right outside 567
		"coordinate":new Point(42.361178, -71.261461),
		"type":"crossing"
	},
	{
		"id":"ss567_c02",
		"coordinate":new Point(42.361341, -71.261331),
		"type":"crossing"
	},
	{
		"id":"epstein_e01", //facilities entrance
		"coordinate":new Point(42.362225, -71.260842),
		"type":"entrance",
		"getTo":"Head to the facilities entrance of Epstein."
	},
	{
		"id":"epstein_e02", // women's studies
		"coordinate":new Point(42.362447, -71.261181),
		"type":"entrance",
		"getTo":"Leave through the Women's Studies Research Center entrance."
	},
	{
		"id":"epstein_c01", // crosswalk
		"coordinate":new Point(42.362353, -71.260479),
		"type":"crossing"
	},
	{
		"id":"epstein_c02", //in front
		"coordinate":new Point(42.362222, -71.260585),
		"type":"crossing"
	},
	{
		"id":"epstein_c03", // side of epstein
		"coordinate":new Point(42.362027, -71.260744),
		"type":"crossing"
	},
	{
		"id":"epstein_c04", // right outside south street cafe
		"coordinate":new Point(42.361674, -71.261063),
		"type":"crossing"
	}
]

function Point(x,y) {
	this.x = x;
	this.y = y;
}