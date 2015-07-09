Locations.initEasySearch(['name','nickname','function','description','category'],
	{
		'limit':30
	}
);


Template.search.helpers({
	searchTerm:function(){
		return Session.get("searchTerm");
	}
});
