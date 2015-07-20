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
},
// ridgewood
{
    "id":"ridgewoodA_e01", //main
    "coordinate":new Point(42.364108, -71.260479),
    "type":"entrance",
    "getTo":"Head to Ridgewood A's main entrance in Ridgewood Commons."
},
{
    "id":"ridgewoodA_e02",
    "coordinate":new Point(42.364148, -71.260593),
    "type":"entrance"
},
{
    "id":"ridgewoodA_e03",
    "coordinate":new Point(42.364005, -71.260684),
    "type":"entrance"
},
{
    "id":"ridgewoodA_e04",
    "coordinate":new Point(42.363994, -71.260643),
    "type":"entrance"
},
{
    "id":"ridgewoodA_e05",
    "coordinate":new Point(42.363962, -71.260562),
    "type":"entrance"
},
{
    "id":"ridgewoodB_e01", //main
    "coordinate":new Point(42.363851, -71.260931),
    "type":"entrance",
    "getTo":"Head to Ridgewood B's main entrance."
},
{
    "id":"ridgewoodB_e02", //back
    "coordinate":new Point(42.363798, -71.261373),
    "type":"entrance"
},
{
    "id":"ridgewoodC_e01", //main
    "coordinate":new Point(42.363693, -71.260909),
    'type':"entrance",
    "getTo":"Head to Ridgewood C's main entrance."
},
{
    "id":"ridgewoodC_e02", //back
    "coordinate":new Point(42.363521, -71.260831),
    "type":"entrance"
},
// ziv
{
    "id":"ziv127_e01", // main
    "coordinate":new Point(42.363408, -71.261613),
    "type":"entrance",
    "getTo":"Head to the main entrance of Ziv 127."
},
{
    "id":"ziv127_e02",
    "coordinate":new Point(42.363345, -71.261676),
    "type":"entrance"
},
{
    "id":"ziv127_e03",
    "coordinate":new Point(42.363417, -71.261746),
    "type":"entrance"
},
{
    "id":"ziv128_e01", //main
    "coordinate":new Point(42.363044, -71.261471),
    "type":"entrance",
    "getTo":"Head to the main entrance of Ziv 128."
},
{
    "id":"ziv128_e02",
    "coordinate":new Point(42.363062, -71.261581),
    "type":"entrance"
},
{
    "id":"ziv128_e03", //back
    "coordinate":new Point(42.362966, -71.261588),
    "type":"entrance",
    "getTo":"Head to the entrance of Ziv 128 facing Epstein."
},
{
    "id":"ziv129_e01", //main
    "coordinate":new Point(42.362953, -71.261076),
    "type":"entrance",
    "getTo":"Head to the main entrance of Ziv 129."
},
{
    "id":"ziv129_e02",
    "coordinate":new Point(42.362908, -71.260991),
    "type":"entrance"
},
{
    "id":"ziv129_e03",
    "coordinate": new Point(42.362843, -71.261080),
    "type":"entrance",
    "getTo":"Head to the entrance of Ziv 129 facing Epstein."   
},
{
    "id":"ziv130_e01", //main
    "coordinate":new Point(42.363293, -71.260951),
    "type":"entrance",
    "getTo":"Head to the main entrance of Ziv 130."
},
{
    "id":"ziv130_e02",
    "coordinate":new Point(42.363287, -71.260837),
    "type":"entrance"
},
{
    "id":"ziv130_e03", //back, facing Ridgewood
    "coordinate":new Point(42.363368, -71.260850),
    "type":"entrance",
    "getTo":"Head to the entrance of Ziv 128 facing Ridgewood C."
},
// village
{
    "id":"villageA_e01", // to the commons
    "coordinate":new Point(42.363497, -71.260154),
    "type":"entrance",
    'getTo':"Head to the entrance in the lobby between Village And and B with the double doors."
},
{
    "id":"villageA_e02", //courtyard
    "coordinate":new Point(42.363664, -71.260019),
    "type":"entrance",
    "getTo":"Head to the Village A entrance leading out to the courtyard."
},
{
    "id":"villageA_e03", //courtyard side
    "coordinate": new Point(42.363692, -71.260061),
    "type":"entrance"
},
{
    "id":"villageA_e04", //very top of stairs to fourth floor
    "coordinate":new Point(42.363681, -71.260001),
    "type":"entrance",
},
{
    "id":"villageA_e05", //middle of stairs, third floor
    "coordinate": new Point(42.363703, -71.260074),
    "type":"entrance"
},
{
    "id":"villageA_ie01", //between A and B
    "coordinate": new Point(42.363426, -71.260095),
    "type":"ientrance"
},
{
    "id":"villageB_e01",//main in courtyard
    "coordinate":new Point(42.363312, -71.260235),
    "type":"entrance",
    "getTo":"Head to the main courtyard entrance of Village B."   
},
{
    "id":"villageB_e02",
    "coordinate":new Point(42.363377, -71.260239),
    "type":"entrance",
    "getTo":"Head to the side courtyard entrance for Village B."
},
{
    "id":"villageB_ie01", //between B and C
    "coordinate":new Point(42.363153, -71.260385),
    "type":"ientrance",
},
{
    "id":"villageC_e01", //next to dunkins
    "coordinate":new Point(42.363150, -71.260377),
    "type":"entrance",
    "getTo":"Head to the entrance of Village C next to Dunkin Donuts."
}

]

function Point(x,y) {
    this.x = x;
    this.y = y;
}
