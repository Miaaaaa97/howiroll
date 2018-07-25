Meteor.publish( 'getCards', function() {
	return CharacterCards.find({owner: { $in: ["public", this.userId]}});
});
