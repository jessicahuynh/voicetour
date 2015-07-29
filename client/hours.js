function getToday(schedule){
	// var thisId=Session.get("thisLoc").id;
	// console.log(thisId);
	// schedule=Hours.findOne({id:thisId});
	// console.log("schedule:"+schedule);
	var today=[];
	var day = new Date().getDay();
	if(day==0){
		today=schedule.Sun;
	} else if (day==1){
		today=schedule.Mon;
	} else if (day==2){
		today=schedule.Tue;
	} else if (day==3){
		today=schedule.Wed;
	} else if (day==4){
		today=schedule.Thu;
	} else if (day==5){
		today=schedule.Fri;
	} else if (day==6){
		today=schedule.Sat;
	}
	console.log("getToday"+today);
	return today;
}

function eachPeriod(i){
	sH=today[i];
	sM=today[i+1];
	eH=today[i+2];
	eM=today[i+3];
}
function stateF(h,m,sH,sM,eH,eM){
	if(h==sH&&m>=sM){
		return true;
	} else if(h>sH&&h<eH){
		return true;
	} else if(h>sH&&h==eH&&m<eM){
		return true;
	} else {
		return false;
	}
}


Template.hours.onCreated (function() {
	var thisId=Session.get("thisLoc").id;
	console.log(thisId);
	schedule=Hours.findOne({id:thisId});
	console.log("schedule:"+schedule);

	if(schedule!=null){
		today=getToday(schedule);
		openPeriod="";
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
		state=stateF(h,m,sH,sM,eH,eM);
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
	}	
});
Template.hours.helpers({
	period:function(){
		if(schedule == null){
			return "N/A";
		} else return openPeriod;
	},
	status: function(){
		if(schedule != null){
			if(!state){
				return "Closed";
			} else return "Open";
		} else return "N/A";		
	}
});

	

// today: function(){
	// 	d = new Date().getDay();
	// 	day = "";
	// 	if(d==0){
	// 		day="Sunday";
	// 	} else if (d==1){
	// 		day=="Monday";
	// 	} else if (d==2){
	// 		day=="Tuesday";
	// 	} else if (d==3){
	// 		day=="Wednesday";
	// 	} else if (d==4){
	// 		day=="Thursday";
	// 	} else if (d==5){
	// 		day=="Friday";
	// 	} else if (d==6){
	// 		day=="Saturday";
	// 	}
	// 	return day;
	// },
	// now: function(){
	// 	h=new Date().getHours();
	// 	m=new Date().getMinutes();
	// 	var nowTime=h+":"+m;
	// 	return nowTime;
	// }

