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
    }
});