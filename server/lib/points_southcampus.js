/*some points of south campus, data from brandeisgps*/
points_southcampus = [
{
    "id": "fellowsgarden_c01",
    "coordinate":new Point(42.365913, -71.259108),
    "type": "crossing",
},
{
    "id": "fellowsgarden_c02",
    "coordinate":new Point(42.366166, -71.259091),
    "type": "crossing",
},
{
    "id": "fellowsgarden_c03",
    "coordinate":new Point(42.366702, -71.259497),
    "type": "crossing",
},
{
    "id": "scc_e01",
    "coordinate":new Point(42.365886, -71.259818),
    "type": "entrance",
},
{
    "id": "scc_c01",
    "coordinate":new Point(42.366161, -71.259982),
    "type": "crossing",
},
{
    "id": "scc_c02",
    "coordinate":new Point(42.365797, -71.259547),
    "type": "crossing",
},
{
    "id": "scc_c03",
    "coordinate":new Point(42.365935, -71.259767),
    "type": "crossing",
},
{
    "id": "scc_e02",
    "coordinate":new Point(42.365703, -71.259938),
    "type": "entrance",
},
{
    "id": "scc_e03",
    "coordinate":new Point(42.365570, -71.260160),
    "type": "entrance",
},
{
    "id": "scc_c04",
    "coordinate":new Point(42.365625, -71.259762),
    "type": "crossing",
},
{
    "id": "scc_c05",
    "coordinate":new Point(42.365501, -71.259873),
    "type": "crossing",
},
{
    "id": "scc_c06",
    "coordinate":new Point(42.365332, -71.260075),
    "type": "crossing",
},
{
    "id": "scc_c07",
    "coordinate":new Point(42.365256, -71.260295),
    "type": "crossing",
},
{
    "id": "scc_c08",
    "coordinate":new Point(42.364860, -71.260703),
    "type": "crossing",
},
{
    "id": "scc_c09",
    "coordinate":new Point(42.365428, -71.260770),
    "type": "crossing",
},
{
    "id": "scc_c10",
    "coordinate":new Point(42.365101, -71.261341),
    "type": "crossing",
},
{
    "id": "scc_c11",
    "coordinate":new Point(42.366090, -71.260341),
    "type": "crossing",
},
{
    "id": "scc_i01",
    "coordinate":new Point(42.365748, -71.260027),
    "type": "inside",
},
{
    "id": "scc_c12",
    "coordinate":new Point(42.365839, -71.259635),
    "type": "crossing",
},
{
    "id": "scc_c13",
    "coordinate":new Point(42.365523, -71.260149),
    "type": "crossing",
},
{
    "id": "theaterlot_e01",
    "coordinate":new Point(42.363930, -71.261732),
    "type": "entrance",
},
{
    "id": "theaterlot_c01",
    "coordinate":new Point(42.364019, -71.261467),
    "type": "crossing",
},
// admissions
{
    "id": "admissions_c01",
    "coordinate":new Point(42.364743, -71.260767),
    "type": "crossing",
},
{
    "id":"admissions_e01", // the main one
    "coordinate": new Point(42.364413, -71.260716),
    "type":"entrance",
    "getTo":"Head to the main entrance of Admissions."
},
{
    "id":"admissions_e02", // secondary
    "coordinate":new Point(42.364535, -71.260677),
    "type":"entrance",
    "getTo":"Head to Admissions's smaller entrance, in the area with the displays."
},
//slosberg
{
    "id":"slosberg_e01", // main
    "coordinate":new Point(42.364098, -71.259915),
    "type":"entrance",
    "getTo":"Head to Slosberg's main entrance."
},
{
    "id":"slosberg_e02", //side entrance closest to admissions
    "coordinate":new Point(42.364428, -71.259636),
    "type":"entrance"
},
{
    "id":"slosberg_e03", //other side entrance
    "coordinate":new Point(42.364369, -71.259453),
    "type":"entrance"
},
{
    "id":"slosberg_e04", //back entrance
    "coordinate":new Point(42.364191, -71.259483),
    "type":"entrance"
},
//lemberg
{
    "id":"lemberg_e01", //main
    "coordinate":new Point(42.363525, -71.258831),
    "type":"entrance",
    "getTo":"Head to Lemberg's main entrance."
},
//rabb school
{
    "id":"rabbSchool_e01", //main
    "coordinate":new Point(42.362924, -71.259146),
    "type":"entrance",
},
{
    "id":"rabbSchool_e02", //grad
    "coordinate":new Point(42.362937, -71.259009),
    "type":"entrance"
},
{
    "id":"rabbSchool_e03", //ide
    "coordinate":new Point(42.363010, -71.258962),
    "type":"entrance"
}

]

function Point(x,y) {
    this.x = x;
    this.y = y;
}
