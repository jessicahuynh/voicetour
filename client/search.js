Locations.initEasySearch(['name','nickname','function','description','category'],
	{
		'limit':30
	});

Template.search.helpers({
	searchTerm:function(){
		return Session.get("searchTerm");
	},
	searchCategory:function(){
		return Session.get("searchCategory");
	},
	locationId:function() {
		return Session.get("viewLocation");
	}
});

Template.search.events({
	'click a.go-to-location':function(event) {
		Session.set("viewLocation",this._id);
	},
	'click .nav-tabs a':function(event) {
		event.preventDefault();
		$(event.target).tab('show');
		//console.log($(event.target).text());
		Session.set("searchCategory",$(event.target).text());
	}
});