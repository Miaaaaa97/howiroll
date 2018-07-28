Template.bugDisplay.onCreated(function() {
	Meteor.subscribe('bugs');
	Meteor.subscribe('userData');
});

Template.bugDisplay.events({
	'click #bugs': function() {
		var bugId = this._id;
		Session.set('id', bugId);
	},

	'click #remove': function() {
		Meteor.call('removeBug', Session.get("id"), (error, result) => {
			if (error) {
				alert(error.reason);
			}
		});
	},
});

Template.bugDisplay.helpers({
	redirectOut() {
		var user = Meteor.users.findOne(Meteor.userId());
		if (!user.roles) {
			FlowRouter.go("/dashboard");
		}
		if (user.roles.indexOf('admin') < 0 || !user.roles) {
			FlowRouter.go("/dashboard");
		}
	},

	bugs() {
		return Bugs.find({}, { sort: { createAt: 1 } });
	},

	getBug(bug) {
		return bug;
	},

});