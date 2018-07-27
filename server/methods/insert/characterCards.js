Meteor.methods({
	insertCharacterCards( card ) {
		check(card, [Match.Any]);
		return CharacterCards.insert({
			card,
			createAt: new Date(),
			owner: Meteor.userId(),
		});
	},
});
