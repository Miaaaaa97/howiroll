Meteor.methods({
    'createRoom': function(name, intro, password, numplayers, public) {
    	var currentUserId = Meteor.userId();
    	check(name, String);
    	check(intro, String);
    	check(password, String);
    	check(numplayers, String);
    	check(public, Boolean);
    	Rooms.insert({
    		name: name,
    		intro: intro,
    		password: password,
    		numplayers: numplayers,
    		public: public,
    		createdBy: currentUserId,
    	});
    },
    'joinRoom': function(roomId, roomname) {
        var currentUserId = Meteor.userId();
        check(roomId, String);
        check(roomname, String);
        Roomjoin.insert({
            roomId: roomId,
            roomname: roomname,
            playerId: currentUserId,
        });
    },
    'exitgame': function(roomId) {
        check(roomId, String);
        var currentUserId = Meteor.userId();
        Roomjoin.remove({roomId: roomId, playerId: currentUserId});
    },
    'deletegame': function(roomId) {
        check(roomId, String);
        Rooms.remove({_id: roomId});
        Roomjoin.remove({roomId: roomId});
    }
});