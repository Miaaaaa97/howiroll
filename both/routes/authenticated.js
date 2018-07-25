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

authenticatedRoutes.route( '/dashboard', {
	name: 'dashboard',
	action() {
		BlazeLayout.render( 'default', { yield: 'dashboard' } );
	}
});

authenticatedRoutes.route( '/createRoom', {
	name: 'createRoom',
	action() {
		BlazeLayout.render( 'default', { yield: 'createRoom' } );
	}
});

authenticatedRoutes.route( '/roomList', {
	name: 'roomList',
	action() {
		BlazeLayout.render( 'default', { yield: 'roomList' } );
	}
});

authenticatedRoutes.route( '/characterCard', {
	name: 'characterCard',
	action() {
		BlazeLayout.render( 'default', { yield: 'characterCard' } );
	}
});


authenticatedRoutes.route( '/cardCollection', {
	name: 'cardCollection',
	action() {
		BlazeLayout.render( 'default', { yield: 'cardCollection' } );
	}
});


authenticatedRoutes.route( '/view', {
	name: 'view',
	action() {
		BlazeLayout.render( 'default', { yield: 'view' } );
	}
});


authenticatedRoutes.route( '/roompage', {
	name: 'roompage',
	action() {
		BlazeLayout.render( 'default', { yield: 'roompage' } );
	}
});
