import setScroll from './set-scroll';

let _handleInsert = ( message, event, template ) => {
  Meteor.call( 'insertMessage', message, ( error ) => {
    if ( error ) {
      Bert.alert( error.reason, 'danger' );
    } else {
      event.target.value = '';
    }
  });
};

let _buildMessage = ( template, text ) => {
  return {
    destination: FlowRouter.getParam( 'channel' ).replace( '@', '' ),
    isDirect: template.isDirect.get(),
    message: text
  };
};

let _checkIfCanInsert = ( message, event ) => {
  return message !== '';
};

let _getRollNum = ( template, sum ) => {
 let numDice = template.find( '[name="numDice"]' ).value;
 let diceNum = template.find( '[name="diceNum"]' ).value;
 let message = "Roll " + numDice + "D" + diceNum +  ": " + sum;
 return message;
};

export default function( event, template, sum ) {
  let text      = _getRollNum( template, sum ),
  canInsert = _checkIfCanInsert( text, event );

  if ( canInsert ) {
    setScroll( 'messages' );
    _handleInsert( _buildMessage( template, text ), event, template );
  }
}
