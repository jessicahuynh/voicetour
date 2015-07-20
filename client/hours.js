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
		var loc = Locations.findOne({"id":JSON.stringify(this).replace(/"([^"]+(?="))"/g, '$1')});
		if(loc.hour){
			var x;
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
			var startH=x[0];
			var startMin=x[1];
			var endH=x[2];
			var endMin=x[4];
			var openPeriod=d+startH+":"+startMin+"-"+endH+":"+endMin;
			return openPeriod;
		} else {
			return "N/A"; 
		}
		return loc;
	},
	status: function(){

	},
	now: function(){
		hour=new Date().getHours();
		minute=new Date().getMinutes();
		var nowTime=hour+":"+minute;
		return nowTime;
	}
})

