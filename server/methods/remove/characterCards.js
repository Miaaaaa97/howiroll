Meteor.methods({
	removeCharacterCards( id ) {
		check( id, String );
		try {
			CharacterCards.remove(id);
		} catch ( exception ) {
			throw new Meteor.Error( '500', `${ exception }` );
		}
	},
});
