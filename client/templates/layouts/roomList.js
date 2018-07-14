Meteor.subscribe('createdrooms');

Template.roomList.helpers({
	'roomlist': function() {
		return Rooms.find();
	}
})