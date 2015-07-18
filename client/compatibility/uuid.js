if (Session.get("uuid") == undefined || Session.get("uuid") == null || Session.get("uuid") == "") {
	var theID = uuid.v4();
	theID = theID.split('-').join('_');
	Session.setPersistent("uuid",theID);
}
else {
	console.log(Session.get("uuid"));
}