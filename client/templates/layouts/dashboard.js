// Meteor.subscribe('createdrooms');

Template.dashboard.onCreated( () => {
  let template = Template.instance();

  template.autorun( () => {
    template.subscribe( 'createdrooms');
  });
});

Template.dashboard.events({
	'click .rooms': function() {
		var roomId = this._id;
		var roomname = this.name;
		Session.set('dashboardSelect', roomId);
		Session.set('dashboardSelectName', roomname);
	},
	'click .enter': function() {
		var current = Session.get('dashboardSelect');
		FlowRouter.go('/messages/general/' + current);
	},
	'click .endgame': function() {
		var roomId = Session.get('dashboardSelect');
		var currentUserId = Meteor.userId();
		var joined = Rooms.findOne( {$and: [{_id: roomId}, { 'participants.name': currentUserId  }]});
		var created = Rooms.findOne({_id: roomId, createdBy: currentUserId});
		if (joined) {
			Bert.alert('Exited game successfully!', 'success');
			Meteor.call('exitgame', roomId);
		} else if (created) {
			Bert.alert('Ended game successfully for all players!', 'success');
			Meteor.call('deletegame', roomId);
		} else {
			Bert.alert('Unknown error, exit unsuccessful', 'danger');
		}
	}
});

Template.dashboard.helpers({
	'rooms': function() {
		var currentUserId = Meteor.userId();
		return Rooms.find({$or: [{createdBy: currentUserId}, { 'participants.name': currentUserId  }]});
	},
	'selectrm': function() {
		var roomId = this._id;
		var selected = Session.get('dashboardSelect');
		if(roomId == selected) {
			return "selected";
		}
	},
});