import updateCard from '../../modules/update-card';

Meteor.methods({
	updateCharacterCards(id, card) {
		check(card, [Match.Any]);
		check(id, String);
		try {
			updateCard( id, card );
		} catch ( exception ) {
			throw new Meteor.Error( '500', `${ exception }` );
		}
	},
});
