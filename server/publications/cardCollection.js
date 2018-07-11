Meteor.publish( 'getCards', function() {
	return CharacterCards.find({owner: this.userId});
});
