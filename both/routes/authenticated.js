const authenticatedRoutes = FlowRouter.group( { name: 'authenticated' } );

authenticatedRoutes.route( '/messages/:channel/:roomid', {
	name: 'channel',
	action() {
		BlazeLayout.render( 'default', { yield: 'channel' } );
	}
});

authenticatedRoutes.route( '/cardSelection/:roomid', {
	name: 'cardSelection',
	action() {
		BlazeLayout.render( 'default', { yield: 'cardSelection' } );
	}
});

authenticatedRoutes.route( '/cardDecision/:roomid/:cardid', {
	name: 'cardDecision',
	action() {
		BlazeLayout.render( 'default', { yield: 'cardDecision' } );
	}

});
