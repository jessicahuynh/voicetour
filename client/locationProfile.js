Template.locationProfile.helpers({
	location:function() {
		var thisLoc = Locations.findOne({_id:Session.get("viewLocation")});
		Session.set("navigateTo",thisLoc.name);
		return thisLoc;
	},
	categories:function() {
		var c = "";
		var catArray = this.category;
		for (var i = 0; i < catArray.length - 1; i++) {
			c += catArray[i] + ", ";
		}
		c+=catArray[i];
		return c;
	}
});

Template.locationProfile.rendered = function() {
	if ($(window).width() > 768) {
		$(".page-header").prepend("<a href='#' id='returnToList'><span class='glyphicon glyphicon-menu-left'></span></a>");
	}
}

Template.locationProfile.events({
	'click #returnToList':function(event) {
		event.preventDefault();
		history.back();
	}
});

/*a#back {
	font-size:1.2em;
	display:block;	
	float:left;
	width:30px;
	height:100%;
	padding-top:5px;
	padding-left:5px;
	
	span {
		color:@off-white;
		font-size:2em;
	}
}
	
input#searchBox {
	display:block;
	width:calc(~'100% - 50px');
	float:left;
	margin-left:12px;
}*/