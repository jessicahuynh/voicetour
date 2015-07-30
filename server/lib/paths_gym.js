// include gym, mailman, health center, public safty and castle
paths_gym = [
	{
		"start":"gosman_c01",
		"end":"athleticslot_e01",
		"description":"Turn and go toward the South Street."
	},
	{
		"start":"athleticslot_e01",
		"end":"gosman_c01",
		"description":"Get off South street and go forward."
	},
	{
		"start":"athleticslot_e01",
		"end":"athleticslot_e02",
		"description":"Cut across the parking lot to the other side, where there is a sidewalk."
	},
	{
		"start":"athleticslot_e02",
		"end":"athleticslot_e01",
		"description":"Cut caross the parking lot to the other side, to the road next to Gosman."
	},
	// fields and stuff
	{
		"start":"athleticslot_e02",
		"end":"gordonfield_e02",
		"description":"Facing the track, take the rightmost concrete sidewalk."
	},
	{
		"start":"gordonfield_e02",
		"end":"athleticslot_e02",
		"description":"Leave Gordon Field and walk along the sidewalk towards the parking lot."
	},
	{
		"start":"gordonfield_e02",
		"end":"gordonfield_e03",
		"description":"Head straight down the track to the other side."
	},
	{
		"start":"gordonfield_e03",
		"end":"gordonfield_e02",
		"description":"Head straight up the track to the other side."
	},
	{
		"start":"gordonfield_e03",
		"end":"lemberg_c02",
		"description":"Walk out onto the dirt path and swing a right. Take the first left in the direction of Lemberg."
	},
	{
		"start":"lemberg_c02",
		"end":"gordonfield_e03",
		"description":"Walk down the dirt road then take a right. Follow the dirt road left to the entrance to Gordon Field."
	},
	{
		"start":"gordonfield_e03",
		"end":"commuterrail_c02",
		"description":"Cross the green field, heading for the fence gate closest to the train station."
	},
	{
		"start":"commuterrail_c02",
		"end":"gordonfield_e03",
		"description":"Cross the green field to the fence gate closest to the train station."
	},
	{
		"start":"lemberg_c02",
		"end":"commuterrail_c02",
		"description":"Head down the dirt road and then take a right. At the end of the dirt road, take a right across the green field towards the fence gate closet to the train station."
	},
	{
		"start":"commuterrail_c02",
		"end":"commuterrail_e02",
		"description":"Walk to the commuter rail ramp."
	},
	{
		"start":"commuterrail_e02",
		"end":"commuterrail_c02",
		"description":"Turn right and pass through the fence gate."
	},
	{
		"start":"commuterrail_c02",
		"end":"commuterrail_c01",
		"description":'Cross the parking lot and head for the sidewalk.'
	},
	{
		"start":"commuterrail_c01",
		"end":"commuterrail_c02",
		"description":'Cross the parking lot, heading to the gap in the fence closet to the train station.'
	},
	//gosman and linsey
	{
		"start":"gosman_c01",
		"end":"linsey_c01",
		"description":"Continue on South Street."
	},
	{
		"start":"linsey_c01",
		"end":"gosman_c01",
		"description":"Continue on South Street."
	},
	{
		"start":"gosman_e01",
		"end":"athleticslot_e01",
		"description":"Exit the gym and go around the small loop."
	},
	{
		"start":"athleticslot_e01",
		"end":"gosman_e01",
		"description":"Go around the small loop."
	},
	{
		"start":"gosman_c02",
		"end":"athleticslot_e01",
		"description":"Continue on this samll road."
	},
	{
		"start":"athleticslot_e01",
		"end":"gosman_c02",
		"description":"Continue on this samll road."
	},
	{
		"start":"linsey_c02",
		"end":"linsey_c01",
		"description":"Turn right and go straight to the South Street."
	},
	{
		"start":"linsey_c02",
		"end":"gosmanparkinglot_e01",
		"description":"Turn left and go straight on the smaller road."
	},	
	{
		"start":"gosmanparkinglot_e01",
		"end":"linsey_c02",
		"description":"Turn right and go straight along the path."
	},
	{
		"start":"linsey_c02",
		"end":"linsey_c03",
		"description":"Go forward and continue on this road."
	},
	{
		"start":"linsey_c03",
		"end":"linsey_c02",
		"description":"Go forward toward the building in front of you."
	},
	{
		"start":"gosman_e02",
		"end":"linsey_c02",
		"description":"Exit the Gosman Gym."
	},
	{
		"start":"gosman_e03",
		"end":"gosmanparkinglot_e01",
		"description":"Exit the Gosman Gym and turn right."
	},
	{
		"start":"gosman_e03",
		"end":"gosman_c02",
		"description":"Exit the Gosman Gym, turn left and walk along the path."
	},
	{
		"start":"gosman_e04",
		"end":"linsey_c02",
		"description":"Exit the Gosman Gym, turn left and walk along the building."
	},
	{
		"start":"gosman_e04",
		"end":"linsey_c01",
		"description":"Exit the Gosman Gym, turn right and walk toward South Street."
	},
	{
		"start":"gosman_e04",
		"end":"linsey_e01",
		"description":"Go up stairs and walk pass the bridge."
	},
	{
		"start":"linsey_e01",
		"end":"gosman_e04",
		"description":"Walk pass the bridge and go down the stairs."
	},
	{
		"start":"gosman_e04",
		"end":"linsey_c04",
		"description":"Exit Linsey Pool and go forward."
	},
	{
		"start":"linsey_c01",
		"end":"linsey_c04",
		"description":"Continue walk along South Street."
	},
	{
		"start":"linsey_c04",
		"end":"linsey_c01",
		"description":"Continue walk along South Street."
	},
	{
		"start":"linsey_e02",
		"end":"linsey_c04",
		"description":"Walk toward the South Street."
	},
	{
		"start":"linsey_c01",
		"end":"healthcenter_c01",
		"description":"Walk cross the road and go up the stairs."
	},
	{
		"start":"healthcenter_c01",
		"end":"linsey_c01",
		"description":"Walk down the stairs and cross the road."
	},
	// mods
	{
		"start":"linsey_c03",
		"end":"uppermods_e01",
		"description":"Walk up the slope."
	},
	{
		"start":"uppermods_e01",
		"end":"linsey_c03",
		"description":"Walk down the slope."
	},
	{
		"start":"linsey_c03",
		"end":"linseyparkinglot_e01",
		"description":"Follow the path toward the clump of trees."
	},
	{
		"start":"linseyparkinglot_e01",
		"end":"lowermods_e01",
		"description":"Veer left for the Lower Mods."
	},
	{
		"start":"lowermods_e01",
		"end":"linseyparkinglot_e01",
		"description":"Facing parallel to the tennis courts, turn right."
	},
	{
		"start":"gosmanparkinglot_e02",
		"end":"lowermods_e01",
		"description":"Veer right for the Lower Mods."
	},
	{
		"start":"lowermods_e01",
		"end":"gosmanparkinglot_e02",
		"description":"Facing parallel to the tennis courts, turn left."
	},
	{
		"start":"gosmanparkinglot_e01",
		"end":"rieger_e01",
		"description":"Head to the opening for the tennis courts."
	},
	{
		"start":"rieger_e01",
		"end":"gosmanparkinglot_e01",
		"description":"Exit the courts and walk out to the road."
	},
	// parking lots
	{
		"start":"linseyparkinglot_e01",
		"end":"linsey_c03",
		"description":"Follow the path beside the clump of trees."
	},
	{
		"start":"gosmanparkinglot_e02",
		"end":"linseyparkinglot_e01",
		"description":"Follow the path toward the clump of trees."
	},
	{
		"start":"linseyparkinglot_e01",
		"end":"gosmanparkinglot_e02",
		"description":"Follow the path beside the clump of trees."
	},
	{
		"start":"gosman_e01",
		"end":"mailman_e01",
		"description":"Follow the path along the gym, go up stairs across the bridge."
	},
	{
		"start":"mailman_c01",
		"end":"squirebridge_e02",
		"description":"Walk up to the bridge"
	},
	{
		"start":"squirebridge_e02",
		"end":"mailman_c01",
		"description":"Keep going for a bit, then turn right."
	},
	{
		"start":"gosman_e01",
		"end":"squirebridge_e01",
		"description":"Exit, veer right, and then climb up the stairs to the bridge."
	},
	{
		"start":"squirebridge_e01",
		"end":"gosman_e01",
		"description":"Walk down the stairs and walk to the flags. Turn right to the entrance of Gosman."
	},
	{
		"start":"squirebridge_e01",
		"end":"squirebridge_e02",
		"description":"Walk across the bridge."
	},
	{
		"start":"squirebridge_e02",
		"end":"squirebridge_e01",
		"description":"Walk across the bridge."
	},
	{
		"start":"rosenstiel_c01",
		"end":"mailman_c01",
		"description":"Go down the stairs to little plate form."
	},
	{
		"start":"mailman_c01",
		"end":"sstreet_c01",
		"description":"Go down the slope."
	},
	{
		"start":"sstreet_c01",
		"end":"mailman_c01",
		"description":"Go up the slope."
	},
	{
		"start":"mailman_c01",
		"end":"mailman_e01",
		"description":"Turn left."
	},
	{
		"start":"mailman_e01",
		"end":"mailman_c01",
		"description":"Turn right."
	},
	{
		"start":"castle_e02",
		"end":"usdan_c01",
		"description":"Walk toward the clump of trees on your right side."
	},
	{
		"start":"usdan_c01",
		"end":"castle_e02",
		"description":"Walk toward the castle in front of you."
	},
	{
		"start":"castle_e01",
		"end":"usdan_c01",
		"description":"Walk up the slope toward the clump of trees on your right side."
	},
	{
		"start":"usdan_c01",
		"end":"castle_e01",
		"description":"Walk down the slope toward the castle in front of you."
	},
	{
		"start":"healthcenter_c01",
		"end":"police_e01",
		"description":"Walk toward the parking lot near the buildings."
	},
	{
		"start":"police_e01",
		"end":"healthcenter_c01",
		"description":"Exit the public safety building and walk toward the paking lot."
	},
	{
		"start":"castle_e01",
		"end":"rosenstiel_c03",
		"description":"Walking down the slope with Castle on your left side."
	},
	{
		"start":"rosenstiel_c03",
		"end":"castle_e01",
		"description":"Walking up the slope with Castle on your right side."
	},
	{
		"start":"rubenstein_c01",
		"end":"healthcenter_c01",
		"description":"Walking down the slope toward the building in front of you."
	},
	{
		"start":"rosenstiel_c03",
		"end":"rubenstein_c01",
		"description":"Walking down the stairs."
	},
	{
		"start":"rubenstein_c01",
		"end":"rosenstiel_c03",
		"description":"Walking up the stairs."
	},
	{
		"start":"healthcenter_c01",
		"end":"rubenstein_c01",
		"description":"Waking up the slope toward the Loop Road."
	},
	{
		"start":"gosman_e01",
		"end":"gosman_e04",
		"description":"null"
	},
	{
		"start":"gosman_e04",
		"end":"gosman_e01",
		"description":"null"
	},
	{
		"start":"gosmanparkinglot_e02",
		"end":"gosmanparkinglot_e01",
		"description":"Pass through the parking lot."
	},
	{
		"start":"gosmanparkinglot_e01",
		"end":"gosmanparkinglot_e02",
		"description":"Pass through the parking lot."
	},
	{
		"start":"healthcenter_e01",
		"end":"healthcenter_c01",
		"description":"Walk toward the small parking lot."
	},
	{
		"start":"healthcenter_c01",
		"end":"healthcenter_e01",
		"description":"Walk toward the building near the stairway."
	},
	{
		"start":"healthcenter_c01",
		"end":"healthcenter_e01",
		"description":"Walk toward the building near the stairway."
	},
	{
		"start":"superconducting_e01",
		"end":"sstreet_c01",
		"description":"Walk toward the South Street."
	},
	{
		"start":"sstreet_c01",
		"end":"superconducting_e01",
		"description":"Walk the small path that turing right."
	},


	// old south street
	{
		"start":"commuterrail_c01",
		"end":"rabbSchool_c01",
		"description":"Walk along South Street up the hill, away from the train station."
	},
	{
		"start":"rabbSchool_c01",
		"end":"commuterrail_c01",
		"description":"Continue along South Street down the hill, in the direction of the train station."
	},
	{
		"start":"rabbSchool_c01",
		"end":"rabbSchool_c02",
		"description":"Cross Old South Street, continuing up the hill along South Street."
	},
	{
		"start":"rabbSchool_c02",
		"end":"rabbSchool_c01",
		"description":"Cross Old South Street and continue down the hill along South Street towards the train station."
	},
	{
		"start":"rabbSchool_c02",
		"end":"rabbSchool_c03",
		"description":"Turn onto Old South Street and follow the road."
	},
	{
		"start":"rabbSchool_c03",
		"end":"rabbSchool_c02",
		"description":"Continue along Old South Street until it meets South Street."
	},
	{
		"start":"rabbSchool_c03",
		"end":"rabbSchool_c04",
		"description":"Continue along Old South Street towards the Rabb School."
	},
	{
		"start":"rabbSchool_c04",
		"end":"rabbSchool_c03",
		"description":"Continue along Old South Street."
	},
	{
		"start":"rabbSchool_c04",
		"end":"rabbSchool_e01",
		"description":"Turn onto the driveway, cross the small parking lot, and head to the entrance of the Rabb School."
	},
	{
		"start":"rabbSchool_e01",
		"end":"rabbSchool_c04",
		"description":"Exit and turn right, walking through the small parking lot and down the driveway."
	},
	{
		"start":"rabbSchool_c04",
		"end":"rabbSchool_c05",
		"description":"Continue along Old Street Street, in front of the Rabb School."
	},
	{
		"start":"rabbSchool_c05",
		"end":"rabbSchool_c04",
		"description":"Continue along Old South Street."
	},
	{
		"start":"rabbSchool_c05",
		"end":"rabbSchool_e01",
		"description":"Walk up the sidewalk to the main entrance of the Rabb School."
	},
	{
		"start":"rabbSchool_e01",
		"end":"rabbSchool_c05",
		"description":"Exit and walk down the sidewalk to Old South Street."
	},
	{
		"start":"rabbSchool_c05",
		"end":"rabbSchool_c06",
		"description":"Keep going along Old South Street, passing in front of the Rabb School."
	},
	{
		"start":"rabbSchool_c06",
		"end":"rabbSchool_c05",
		"description":"Keep going along Old South Street, passing in front of the Rabb School."
	},
	{
		"start":"rabbSchool_c06",
		"end":"rabbSchool_e02",
		"description":"Walk up the sidewalk to the entrance of the Rabb School."
	},
	{
		"start":"rabbSchool_e02",
		"end":"rabbSchool_c06",
		"description":"Exit and go down the sidewalk to meet Old South Street."
	},
	{
		"start":"rabbSchool_c06",
		"end":"lemberg_c01",
		"description":"Continue along Old South Street towards Lemberg."
	},
	{
		"start":"lemberg_c01",
		"end":"rabbSchool_c06",
		"description":"Walk along Old South Street towards the Rabb School."
	},
	{
		"start":"lemberg_c01",
		"end":"lemberg_c02",
		"description":"Cross Old South Street."
	},
	{
		"start":"lemberg_c02",
		"end":"lemberg_c01",
		"description":"Cross old South Street."
	},
	{
		"start":"lemberg_c01",
		"end":"lemberg_c03",
		"description":"Continue along Old South Street, towards Lemberg."
	},
	{
		"start":"lemberg_c03",
		"end":"lemberg_c01",
		"description":"Continue along Old South Street."
	},
	{
		"start":"lemberg_c03",
		"end":"lemberg_e01",
		"description":"Walk up the stairs towards Lemberg's main entrance."
	},
	{
		"start":"lemberg_e01",
		"end":"lemberg_c03",
		"description":"Exit and walk down the stairs to Old South Street."
	},
	{
		"start":"rabbSchool_c02",
		"end":"lemberg_c04",
		"description":"Walk up the hill, continuing along South Street."
	},
	{
		"start":"lemberg_c04",
		"end":"rabbSchool_c02",
		"description":"Turn left and walk downhill, towards the train station."
	},
	{
		"start":"lemberg_c04",
		"end":"lemberg_c05",
		"description":"Turn onto the small sidewalk and walk towards the small stairs."
	},
	{
		"start":"lemberg_c05",
		"end":"lemberg_c04",
		"description":"Walk along the sidewalk towards South Street."
	},
	{
		"start":"lemberg_c05",
		"end":"lemberg_c06",
		"description":"Walk down the stairs and to the driveway."
	},
	{
		"start":"lemberg_c06",
		"end":"lemberg_c05",
		"description":"Walk up the stairs towards the sidewalk next to the playground."
	},
	{
		"start":"lemberg_c06",
		"end":"lemberg_c01",
		"description":"Walk down the driveway to Old South Street."
	},
	{
		"start":"lemberg_c01",
		"end":"lemberg_c06",
		"description":"Walk up the driveway."
	},
	{
		"start":"lemberg_c06",
		"end":"lemberg_e01",
		"description":"Go down the stairs to the main entrance of Lemberg."
	},
	{
		"start":"lemberg_e01",
		"end":"lemberg_c06",
		"description":"Exit and turn right and go up the stairs."
	}
]