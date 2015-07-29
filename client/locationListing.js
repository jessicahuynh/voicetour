Template.locationListing.helpers({
	locationId:function() {
		return this._id;
	},
	status:function() {
		var thisId = this._id;
		var schedule = Hours.findOne({id:thisId});
		if (schedule != null) {
			// show open or closed
			var today=getToday(schedule);
			var openPeriod="";
			if(today.length>=4){
				eachPeriod(0);
				openPeriod+= sH+":"+sM+"-"+eH+":"+eM;
			} else if(today.length>=8){
				eachPeriod(4);
				openPeriod+= ","+sH+":"+sM+"-"+eH+":"+eM;
			}else if(today.length==12){
				eachPeriod(8);
				openPeriod+= ","+sH+":"+sM+"-"+eH+":"+eM;
			}
			console.log("period :"+openPeriod);
	
			var h=new Date().getHours();
			var m=new Date().getMinutes();
			
			eachPeriod(0);
			var state=stateF(h,m,sH,sM,eH,eM);
			if(!state){
				if(today.length>=8){
					eachPeriod(4);
					state=stateF(h,m,sH,sM,eH,eM);
					if(!state){
						if(today.length==12){
							eachPeriod(8);
							state=stateF(h,m,sH,sM,eH,eM);
						}
					} 
				}
			}
			return openPeriod;
		}
		else {
			return "";
		}
	}
});

Template.locationListing.events({
	'click a.go-to-location':function(event) {
		Session.setPersistent("viewLocation",this._id);
		Session.set("prev",Router.current().route.path());
	},
	'click a.go-to-navigate':function(event) {
		Session.set("navigateTo",this.name);
	}
});
