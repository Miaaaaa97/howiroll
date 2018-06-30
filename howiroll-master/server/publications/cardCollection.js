Meteor.publish( 'getCards', function() {
	return CharacterCards.find({});
});
