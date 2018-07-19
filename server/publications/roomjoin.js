Meteor.publish('joinedrooms',function() {
	var currentUserId = this.userId;
	return Roomjoin.find({playerId: currentUserId});
});