import insertRoll from '../../modules/insert-roll';

Meteor.methods({
  insertRolls( message ) {
    check( message, {
      destination: String,
      isDirect: Boolean,
      message: String,
      roomid: String,
    });

    try {
      insertRoll( message );
    } catch ( exception ) {
      throw new Meteor.Error( '500', `${ exception }` );
    }
  }
});
