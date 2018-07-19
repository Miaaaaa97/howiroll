Meteor.publish( 'getCardsForGM', function() {
	return CharacterCards.find({});
});
