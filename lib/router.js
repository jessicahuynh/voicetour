Router.configure({
	layoutTemplate: 'layout',
	//loadingTemplate: 'loading',
	//waitOn: function() {return true;}   // later we'll add more interesting things here .... 
});

Router.route('/', {name: 'welcome'});
Router.route('/about', {name: 'about'});
Router.route('/locationList', {name: 'locationList'});
Router.route('/navigate', {name: 'graph', 
	waitOn: function(){
    // waitOn makes sure that this publication is ready before rendering your template
    	return Meteor.subscribe("theMap");
  	}
});
Router.route('/selfguide',{name:'selfguide'});

Router.route('/steps', {name: 'steps', 
	waitOn: function(){
    // waitOn makes sure that this publication is ready before rendering your template
    	return Meteor.subscribe("theMap");
  	}
});

Router.route('/search',  {name:'search'});

Router.route('/viewLocation/:_id', {name:'locationProfile',
	data:function() {
		return Locations.find({_id:this.params._id});
	}
});