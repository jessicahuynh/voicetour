Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	//waitOn: function() {return true;}   // later we'll add more interesting things here .... 
});

var IR_BeforeHooks = {
	removeBackBtn:function() {
		if ($(window).width() < 768) {
			$(".back").css("display","");
			$("#toggleBtn").css("display","");
		}
		this.next()
	}
}

var IR_AfterHooks = {
	addBackBtn: function() {
		if ($(window).width() < 768) {
			$(".back").css("display","block");
			$("#toggleBtn").css("display","none");
		}
		this.next();
	}
}

Router.onBeforeAction(IR_BeforeHooks.removeBackBtn);

Router.route('/', {name: 'welcome',
	waitOn:function() {
		return Meteor.subscribe("theLocations");
	}
});
Router.route('/about', {name: 'about'});
Router.route('/locationList', {name: 'locationList' ,
	waitOn:function() {
		return Meteor.subscribe("theLocations");
	}
});
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
  	},
	onAfterAction:IR_AfterHooks.addBackBtn
});


Router.route('/search',  {name:'search'});
Router.route('/settings',{name:'settings'});

Router.route('/viewLocation/:_id', {name:'locationProfile',
	data:function() {
		return Locations.find({_id:this.params._id});
	},
	onAfterAction:IR_AfterHooks.addBackBtn
});