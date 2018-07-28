const handleRedirect = ( routes, redirect ) => {
	let currentRoute = FlowRouter.getRouteName();
	if ( routes.indexOf( currentRoute ) > -1 ) {
		FlowRouter.go( redirect );
		return true;
	}
	return false;
};

Template.default.onRendered( () => {
	Tracker.autorun( () => {
		let isChannel   = FlowRouter.getParam( 'channel' ),
		bodyClasses = document.body.classList;
		
		return isChannel ? bodyClasses.add( 'is-channel' ) : bodyClasses.remove( 'is-channel' );
	});
});

Template.default.helpers({
	loggingIn() {
		return Meteor.loggingIn();
	},
	authenticated() {
		return !Meteor.loggingIn() && Meteor.userId();
	},
	redirectAuthenticated() {
		return handleRedirect([
			'login',
			'signup',
			'recover-password',
			'reset-password'
			], '/dashboard' );
	},
	redirectPublic() {
		return handleRedirect( [ 
			'channel',
			'dashboard',
			'cardCollection',
			'characterCard',
			'createRoom',
			'roomList',
			'characterCard',
			'cardCollection',
			'view',
			'roompage',
			'bugReport',
			'cardDecision',
			'cardSelection',
			'message',
			'view'
			], '/login' );
	},
});

