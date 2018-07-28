Template.bugReport.events({
	'click #submitbug': function() {
		// Meteor.call('submitBug', report);
		Bert.alert('Successfully reported bug! Thank you:)', 'success');
		FlowRouter.go("/dashboard");
	}
});