Meteor.subscribe('joinedrooms');
Meteor.subscribe('createdrooms');

Template.dashboard.events({
	'click .createdroom': function() {
		var roomId = this._id;
		var roomname = this.name;
		Session.set('dashboardSelect', roomId);
		Session.set('dashboardSelectName', roomname);
	},
	'click .joinedroom': function() {
		var roomId = this.roomId;
		var roomname = this.name;
		Session.set('dashboardSelect', roomId);
		Session.set('dashboardSelectName', roomname);
	},
	'click .enter': function() {
		var current = Session.get('dashboardSelect');
		Session.set('playingGame', current);
		FlowRouter.go('/messages/general');
	},
	'click. endgame': function() {
		console.log("you clicked delete");
		// var roomId = Session.get('dashboardSelect');
		// var currentUserId = Meteor.userId();
		// var joined = Roomjoin.findOne({roomId: roomId, playerId: currentUserId});
		// var created = Rooms.findOne({_id: roomId, createdBy: currentUserId});
		// if (joined) {
		// 	Bert.alert('Exited game successfully!', 'success');
		// 	Meteor.call('exitgame', roomId);
		// } else if (created) {
		// 	Bert.alert('Ended game successfully for all players!', 'success');
		// 	Meteor.call('deletegame', roomId);
		// } else {
		// 	Bert.alert('Unknown error, exit unsuccessful', 'danger');
		// }
	}
});

Template.dashboard.helpers({
	'joinedrooms': function() {
		return Roomjoin.find();
	},
	'createdrooms': function() {
		var currentUserId = Meteor.userId();
		return Rooms.find({createdBy: currentUserId});
	},
	'selectcreatedrm': function() {
		var roomId = this._id;
		var selected = Session.get('dashboardSelect');
		if(roomId == selected) {
			return "selected";
		}
	},
	'selectjoinedrm': function() {
		var roomId = this.roomId;
		var selected = Session.get('dashboardSelect');
		if(roomId == selected) {
			return "selected";
		}
	}
});