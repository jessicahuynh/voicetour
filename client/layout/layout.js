Template.layout.events({
	'submit #searchForm': function(event) {
		event.preventDefault();
		var s = searchBox.value;
		Session.set("searchTerm",s);
		
		Router.go('/search');
	}
});