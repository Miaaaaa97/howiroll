const publicRoutes = FlowRouter.group( { name: 'public' } );

publicRoutes.route( '/', {
  action() {
    FlowRouter.go( '/login' );
  }
});

publicRoutes.route( '/signup', {
  name: 'signup',
  action() {
    BlazeLayout.render( 'default', { yield: 'signup' } );
  }
});

publicRoutes.route( '/login', {
  name: 'login',
  action() {
    BlazeLayout.render( 'default', { yield: 'login' } );
  }
});

publicRoutes.route( '/recover-password', {
  name: 'recover-password',
  action() {
    BlazeLayout.render( 'default', { yield: 'recoverPassword' } );
  }
});

publicRoutes.route( '/reset-password/:token', {
  name: 'reset-password',
  action() {
    BlazeLayout.render( 'default', { yield: 'resetPassword' } );
  }
});

publicRoutes.route( '/dashboard', {
  name: 'dashboard',
  action() {
    BlazeLayout.render( 'default', { yield: 'dashboard' } );
  }
});

publicRoutes.route( '/createRoom', {
  name: 'createRoom',
  action() {
    BlazeLayout.render( 'default', { yield: 'createRoom' } );
  }
});

publicRoutes.route( '/roomList', {
  name: 'roomList',
  action() {
    BlazeLayout.render( 'default', { yield: 'roomList' } );
  }
});

