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
		var roomid = FlowRouter.getParam('roomid');
		let messages = Messages.find( {roomid: roomid}, { sort: { timestamp: 1 } } );
		if ( messages ) {
			return sortMessages( messages );
		}
	},
	isPC() {
		var roomid = FlowRouter.getParam('roomid');
		var currentUser = Meteor.userId();
		var currentRoom = Rooms.findOne(roomid);
		if (currentUser != currentRoom.createdBy) {
			return true;
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
		handleRoll(event, template, sum);
	},

	'click #selectCard': function(event){
		event.preventDefault();
		FlowRouter.go("/cardSelection/" + FlowRouter.getParam('roomid'));
	},

	'click #viewCard': function(event){
		event.preventDefault();
		var roomid = FlowRouter.getParam('roomid');
		var currentUser = Meteor.userId();
		var currentRoom = Rooms.findOne(roomid);
		var cardid;
		var participants = currentRoom.participants;
		for (j=0; j < currentRoom.participants.length; j++) {
			if (participants[j].name == currentUser) {
				cardid = participants[j].card;
			}
		}
		if (cardid != "tobedefined") {
			FlowRouter.go("/cardDecision/" + currentRoom._id + "/" + cardid);
			return;
		}
		Bert.alert("Pls select a card for this room first", "warning");
	},
});
