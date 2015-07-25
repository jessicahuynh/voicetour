Template.feedback.events({
	'submit #feedbackForm':function(event) {
		event.preventDefault();
		$.ajax({
			url:"https://docs.google.com/a/brandeis.edu/forms/d/1bz7aA7XLWCJQgFFYcDEb_pvRZnR2ysjX2RalSHkMXT4/formResponse",
				data:{
					"entry_1215249245": $("#feedbackEmail").val(),
					"entry_641083817":$("#feedbackType").val(),
					"entry_38663783":$("#feedbackComment").val()
				},
				type:"POST",
				dataType:"xml"
		});
		
		$(".modal-body").html('<p>Thanks for your feedback!</p>');
		$("#submitFeedback").hide();
	}
});

Template.feedback.rendered = function() {
	$('#feedbackFormDiv').on('shown.bs.modal', function () {
	  $('#feedbackEmail').focus()
	});
}