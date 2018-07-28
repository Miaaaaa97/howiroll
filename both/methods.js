Meteor.methods({
    'createRoom': function(name, intro, password, numplayers, public) {
    	var currentUserId = Meteor.userId();
        var currentUserName = Meteor.user().username;
        var timestring = moment().format('MMMM Do YYYY, h:mm:ss a');

        check(name, String);
        check(intro, String);
        check(password, String);
        check(numplayers, String);
        check(public, Boolean);
        check(timestring, String);
        Rooms.insert({
          name: name,
          intro: intro,
          password: password,
          numplayers: numplayers,
          public: public,
          createdBy: currentUserId,
          createdByname: currentUserName,
          createdAt: timestring,
          participants:[]
      });
    },
    'joinRoom': function(roomId, roomname) {
        var currentUserId = Meteor.userId();
        check(roomId, String);
        check(roomname, String);
        Rooms.update({_id: roomId},
            {$addToSet: {
                "participants": {
                    'name': currentUserId,
                    'card': "tobedefined",
                }
            }
        });
    },


    'selectCard': function(roomId, cardId) {
        var currentUserId = Meteor.userId();
        check(roomId, String);
        check(cardId, String);
        check(currentUserId, String);
        Rooms.update({"_id": roomId, "participants.name": currentUserId},
        {
            $set: {"participants.$.card": cardId}
        });
    },


    'exitgame': function(roomId) {
        check(roomId, String);
        var currentUserId = Meteor.userId();
        Rooms.update({_id: roomId},
            {$pull: {
                'participants': {
                    'name': currentUserId
                }
            }
        });
    },
    'deletegame': function(roomId) {
        check(roomId, String);
        Rooms.remove({_id: roomId});
    },
    'submitBug': function(bugmessage) {
        check(bugmessage, String);
        Bugs.insert({bug: bugmessage});
    }
});