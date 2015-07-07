Router.configure({
	layoutTemplate: 'layout',
	//loadingTemplate: 'loading',
	//waitOn: function() {return true;}   // later we'll add more interesting things here .... 
});

Router.route('/', {name: 'welcome'});
Router.route('/about', {name: 'about'});
Router.route('/locationList', {name: 'locationList'});
Router.route('/navigate', {name: 'graph'});

Router.route('/search/:_term', {name: 'search',
	data:function(){
		return Session.get("searchTerm");
	}
});

Router.route('/viewLocation/:_id', {name:'locationProfile',
	data:function() {
		return Locations.find({_id:this.params._id});
	}
});