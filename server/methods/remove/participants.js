Meteor.methods({
	removeParticipant( user, room ) {
		check( user, String );
		check( room, String);
		try {
			Rooms.update({_id: room},
				{$pull: {
					'participants': {
						'name': user
					}
				}
			});
		} catch ( exception ) {
			throw new Meteor.Error( '500', `${ exception }` );
		}
	},
});
