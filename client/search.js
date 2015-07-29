Locations.initEasySearch(['name','nickname','function','category'],
	{
		'limit':50
	}
);


Template.search.helpers({
	searchTerm:function(){
		
		displayVoiceSearchResults();
		
		return Session.get("searchTerm");
	}
});

Template.search.rendered = function() {
	Session.set("pageTitle","Search");
	$("#searchForm").show("slow");
	$("#searchBox").css("display","block").focus();
}

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
					console.log(data.results);
					Session.set("vresults",data.results);
				}
		});
	}
}