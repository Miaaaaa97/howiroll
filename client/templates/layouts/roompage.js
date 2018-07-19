Template.roompage.helpers({
	'chatId': function() {
		return Session.get('dashboardSelect');
	},
	'userId': function() {
		return Meteor.userId();
	}
})