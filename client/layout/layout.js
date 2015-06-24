Session.setDefault("searchCategory","All");

Template.layout.events({
	'submit #searchForm': function(event) {
		event.preventDefault();
		var s = searchBox.value;
		Session.set("searchTerm",s);

		
		Router.go('/search/'+Session.get("searchTerm"));
	},
	// changes category in the dropdown
	'click #selectSearchType li a':function(event) {
		event.preventDefault();
		$(event.target).parents('.btn-group').find('.btn').text($(event.target).text());
  		$(event.target).parents('.btn-group').find('.btn').val($(event.target).text());

  		// append the caret
  		$(event.target).parents('.btn-group').find('.btn').append('&nbsp;<span class="caret"></span>');

  		Session.set("searchCategory",$(event.target).text());
	}
});