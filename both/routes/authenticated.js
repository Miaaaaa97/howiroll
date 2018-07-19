const authenticatedRoutes = FlowRouter.group( { name: 'authenticated' } );

authenticatedRoutes.route( '/messages/:channel/:roomid', {
  name: 'channel',
  action() {
    BlazeLayout.render( 'default', { yield: 'channel' } );
  }
});
