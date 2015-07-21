Template.hours.helpers({
	today: function(){
		d = new Date().getDay();
		day = "";
		if(d==0){
			day="Sunday";
		} else if (d==1){
			day=="Monday";
		} else if (d==2){
			day=="Tuesday";
		} else if (d==3){
			day=="Wednesday";
		} else if (d==4){
			day=="Thursday";
		} else if (d==5){
			day=="Friday";
		} else if (d==6){
			day=="Saturday";
		}
		return day;
	},
	period: function(){
		if(loc.hour){
			x=[];
			if(d==0){
				x=loc.Sun;
			} else if (d==1){
				x=loc.Mon;
			} else if (d==2){
				x=loc.Tue;
			} else if (d==3){
				x=loc.Wed;
			} else if (d==4){
				x=loc.Thu;
			} else if (d==5){
				x=loc.Fri;
			} else if (d==6){
				x=loc.Sat;
			}
			var sH=x[0];
			var sM=x[1];
			var eH=x[2];
			var eM=x[3];
			var openPeriod=d+sH+":"+sM+"-"+eH+":"+eM;
			return openPeriod;
		} else {
			return "N/A"; 
		}
		return loc;
	},
	status: function(){
		return this.id;
		// get id of the building
		// find whether the id exists in collection of hours
		// var state;
		// if(h==sH&&m>=sM){
		// 	state=true;
		// } else if(h>sH&&h<eH){
		// 	state=true;
		// } else if(h>sH&&h==eH&&m<eM){
		// 	state=true;
		// } else {
		// 	state=false;
		// }
		// return state;
		// if(x.length==4){

		// }
		// else if(x.length==8){

		// }
		// else if(x.length==12){

		// }
	},
	now: function(){
		h=new Date().getHours();
		m=new Date().getMinutes();
		var nowTime=h+":"+m;
		return nowTime;
	}
})

