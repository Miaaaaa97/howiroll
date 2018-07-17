import insertMessage from '../../modules/insert-message';

Meteor.methods({
  insertMessage( message ) {
    check( message, {
      destination: String,
      isDirect: Boolean,
      message: String,
      roomid: String
    });

    try {
      insertMessage( message );
    } catch ( exception ) {
      throw new Meteor.Error( '500', `${ exception }` );
    }
  }
});
