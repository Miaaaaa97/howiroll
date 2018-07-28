Meteor.methods({
	removeBug( id ) {
		check( id, String );
		try {
			Bugs.remove(id);
		} catch ( exception ) {
			throw new Meteor.Error( '500', `${ exception }` );
		}
	},
});
