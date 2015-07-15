Locations.initEasySearch(['name','nickname','function','description','category'],
	{
		'limit':30
	}
);


Template.search.helpers({
	searchTerm:function(){
		
		displayVoiceSearchResults();
		
		return Session.get("searchTerm");
	}
});

Template.voiceResults.helpers({
	vresults:function() {
		console.log(Session.get("vresults"));
		return Session.get("vresults");
	}
});

function displayVoiceSearchResults() {
	if (Session.get("searchTerm") != "") {
		EasySearch.search('locations', Session.get("searchTerm"), function (err, data) {
		    	if (err) {
					console.log(err);
				}
				else {
					$("#searchForSomething").css({"display":"none"});
					console.log(data.results);
					Session.set("vresults",data.results);
				}
		});
	}
}