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
        var currentUserId = Meteor.userId();
        Roomjoin.deleteOne({roomId: roomId, playerId: currentUserId});
    },
    'deletegame': function(roomId) {
        Rooms.deleteOne({_id: roomId});
        Roomjoin.deleteMany({roomId: roomId});
    }
});