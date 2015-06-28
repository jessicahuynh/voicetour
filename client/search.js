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
	}
});

Template.search.events({
	'click .nav-tabs a':function(event) {
		event.preventDefault();
		$(event.target).tab('show');
		//console.log($(event.target).text());
		Session.set("searchCategory",$(event.target).text());
	}
});