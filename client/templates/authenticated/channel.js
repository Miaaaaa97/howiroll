import handleChannelSwitch from '../../modules/handle-channel-switch';
import sortMessages from '../../modules/sort-messages';
import handleMessageInsert from '../../modules/handle-message-insert';
import handleRoll from '../../modules/handle-roll';


Template.channel.onCreated( () => {
	let template = Template.instance();
	handleChannelSwitch( template );
});

Template.channel.helpers({
	isLoading() {
		return Template.instance().loading.get();
	},
	isDirect() {
		return Template.instance().isDirect.get();
	},
	username() {
		return FlowRouter.getParam( 'channel' );
	},
	messages() {
		let messages = Messages.find( {}, { sort: { timestamp: 1 } } );
		if ( messages ) {
			return sortMessages( messages );
		}
	}
});

Template.channel.events({
	'keyup [name="message"]' ( event, template ) {
		handleMessageInsert( event, template );
	},

	"submit #rollDice":function(event, template) {
		event.preventDefault();
		var numDice = Number($("input[name=numDice]").val());
		var diceNum = Number($("input[name=diceNum]").val());
		var sum = 0;
		for (var i = 0; i < numDice; i++) {
			sum += 1 + Math.round(Math.random() * (diceNum - 1));
		}
		handleRoll( event, template, sum);
	},
});
