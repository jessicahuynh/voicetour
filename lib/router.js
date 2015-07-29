Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	//waitOn: function() {return true;}   // later we'll add more interesting things here .... 
});

var IR_BeforeHooks = {
	removeBackBtn:function() {
		if ($(window).width() < 769) {
			$(".back").css("display","");
			$("#toggleBtn").css("display","");
		}
		this.next()
	},
	read:function() {
		if (Session.get("readingmode")) {
			$("#listen").trigger("click");
		}
		this.next();
	}
}

var IR_AfterHooks = {
	addBackBtn: function() {
		if ($(window).width() < 769) {
			$(".back").css("display","block");
			$("#toggleBtn").css("display","none");
		}
		this.next();
	}
}

Router.onBeforeAction(IR_BeforeHooks.removeBackBtn);
Router.onBeforeAction(IR_BeforeHooks.read);

Router.route('/', {name: 'welcome'});
Router.route('/about', {name: 'about'});
Router.route('/debugger', {name: 'debugger',
	waitOn:function() {
		return Meteor.subscribe("thePaths");
	}
});
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
Router.route('/selfguide',{name:'selfguide'});

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
	waitOn:function() {
		return Meteor.subscribe("theHours");
	},
	onAfterAction:IR_AfterHooks.addBackBtn
});