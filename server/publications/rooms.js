// Meteor.publish('createdrooms',function() {
// 	return Rooms.find();
// });

Meteor.publish( 'searchrooms', function( search ) {
  check( search, Match.OneOf( String, null, undefined ) );
  let query      = {},
      projection = { limit: 10, sort: { createdAt: -1 } };

  if ( search ) {
    let regex = new RegExp( search, 'i' );

    query = {
      $or: [
        { name: regex },
        { intro: regex },
        { createdByname: regex }
      ]
    };

    projection.limit = 100;
  }

  return Rooms.find( query, projection );
});