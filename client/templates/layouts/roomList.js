Meteor.subscribe('joinedrooms');
Meteor.subscribe('createdrooms');

Template.roomList.events({
	'click .room': function() {
		var roomId = this._id;
		var roomname = this.name;
		Session.set('selectedRoom', roomId);
		Session.set('selectedRoomName', roomname);
	},
	'click .join': function() {
		var roomId = Session.get('selectedRoom');
		var roomname = Session.get('selectedRoomName');
		var currentUserId = Meteor.userId();
		var joined = Roomjoin.findOne({roomId: roomId, playerId: currentUserId});
		var created = Rooms.findOne({_id: roomId, createdBy: currentUserId});
		if (joined) {
			Bert.alert('You already joined this game!', 'warning');
		} else if (created) {
			Bert.alert('You are already the GameMaster!', 'warning');
		} else {
		    Meteor.call('joinRoom', roomId, roomname);
		    Bert.alert('Joined game successfully!', 'success');
		}
	}
});

Template.roomList.helpers({
	'roomlist': function() {
		return Rooms.find();
	},
	'selectrm': function() {
		var roomId = this._id;
		var selected = Session.get('selectedRoom');
		if(roomId == selected) {
			return "selected";
		}
	},
	'RoomsIndex': () => RoomsIndex
});