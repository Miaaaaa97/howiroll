Template.mysteriousaddress.onCreated(function() {
	Meteor.subscribe('bugs');
});

Template.mysteriousaddress.helpers({
	'bugs': function() {
		return Bugs.find();
	}
})