Template.bugReport.events({
	"submit #bug": function(event,instance) {
		event.preventDefault();
		var bug = event.target.report.value;

		Meteor.call('submitBug',bug, (error, result) => {
			if(error) {
				alert(error.reason);
			} else {
				Bert.alert('Bug report successful! Thank you:)', 'success');
			}
		});
		
		FlowRouter.go("/dashboard");
	}
});