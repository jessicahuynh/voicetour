Meteor.publish("theLocations", function(){return Locations.find()});
Meteor.publish("theCornerPoints",function() {return CornerPoints.find()});