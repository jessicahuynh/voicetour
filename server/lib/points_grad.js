points_grad = [
	{
		"id":"turner_e01",
		"coordinate":new Point(42.362048, -71.263937),
		"type":"entrance"
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
		"type":"entrance"
	},
	{
		"id":"ss567_e02", //by cappy's
		"coordinate":new Point(42.361384, -71.261480),
		"type":"entrance"
	},
	{
		"id":"ss567_e03",
		"coordinate":new Point(42.361198, -71.261614),
		"type":"entrance"
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
	}
]

function Point(x,y) {
	this.x = x;
	this.y = y;
}