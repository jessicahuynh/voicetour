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
Router.route('/selfguide',{name:'selfguide',
	waitOn:function() {
		return Meteor.subscribe("theLocations");
	}	
});

Router.route('/steps', {name: 'steps', 
	waitOn: function(){
    // waitOn makes sure that this publication is ready before rendering your template
    	return Meteor.subscribe("theMap");
  	}
});

Router.route('/search',  {name:'search'});
Router.route('/settings',{name:'settings'});

Router.route('/viewLocation/:_id', {name:'locationProfile',
	data:function() {
		return Locations.find({_id:this.params._id});
	},
	onBeforeAction:function() {
		$("#back").css({
			"font-size":"2em",
			"display":"block",
			"float":"left",
			"width":"30px",
			"height":"100%",
			"padding-top":"5px",
			"padding-left":"8px",
			"color":"#eeeeee"
		});
		var boxWidth = $(window).width()-80;
		$("#searchBox").css({
			"display":"block",
			"width":JSON.stringify(boxWidth),
			"float":"left",
			"margin-left":"12px"
		});
		$("#clearBack").css("display","block");
		this.next();
	},
	onAfterAction:function(){
		$("#back").css({
			"font-size":"",
			"display":"",
			"float":"",
			"width":"",
			"height":"",
			"padding-top":"",
			"padding-left":"",
			"color":""
		});
		$("#searchBox").css({
			"display":"",
			"width":"",
			"float":"",
			"margin-left":""
		});
		$("#clearBack").css("display","");
	}
});