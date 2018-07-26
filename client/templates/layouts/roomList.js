

Template.roomList.onCreated( () => {
  let template = Template.instance();

  template.searchQuery = new ReactiveVar();
  template.searching   = new ReactiveVar( false );

  template.autorun( () => {
    template.subscribe( 'searchrooms', template.searchQuery.get(), () => {
      setTimeout( () => {
        template.searching.set( false );
      }, 300 );
    });
  });
});

Template.roomList.events({
	'keyup [name="search"]' ( event, template ) {
        let value = event.target.value.trim();
        if ( value !== '' ) { // && event.keyCode === 13 
            template.searchQuery.set( value );
            template.searching.set( true );
        }
        if ( value === '' ) {
            template.searchQuery.set( value );
        }
    },

	'click #rooms': function() {
		var roomId = this._id;
		var roomname = this.name;
		var public = this.public;
		var password = this.password;
		Session.set('selectedRoom', roomId);
		Session.set('selectedRoomName', roomname);
		Session.set('selectedpublic', public);
		Session.set('selectedpw', password);
	},
	'click #join': function() {
		var roomId = Session.get('selectedRoom');
		var roomname = Session.get('selectedRoomName');
		var public = Session.get('selectedpublic');
		var pw = Session.get('selectedpw');
		var currentUserId = Meteor.userId();
		var joined = Rooms.findOne( {$and: [{_id: roomId}, { 'participants.name': currentUserId  }]});
		var created = Rooms.findOne({_id: roomId, createdBy: currentUserId});
		if (created) {
			Bert.alert('You are already the GameMaster!', 'warning');
		} else if (joined != undefined) {
			Bert.alert('You already joined this game!', 'warning');
		} else if (public != false) {
		    Meteor.call('joinRoom', roomId, roomname);
		    Bert.alert('Joined game successfully!', 'success');
		} else {
			var password = prompt("This is a private room. Please enter password: ", "password");
			if (password == pw) {
				Meteor.call('joinRoom', roomId, roomname);
		        Bert.alert('Joined game successfully!', 'success');
			} else {
				Bert.alert('Wrong password!', 'warning');
			}
		}
	}
});

Template.roomList.helpers({
	searching() {
        return Template.instance().searching.get();
    },
    query() {
        return Template.instance().searchQuery.get();
    },
    rooms() {
        var rooms = Rooms.find();
        if ( rooms ) {
            return rooms;
        }
    },

	'selectrm': function() {
		var roomId = this._id;
		var selected = Session.get('selectedRoom');
		if(roomId == selected) {
			return "selected";
		}
	}

});