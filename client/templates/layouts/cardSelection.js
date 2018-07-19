Template.cardSelection.helpers({
	cards() {
		let c = CharacterCards.find({owner: Meteor.user()._id});
		return c;
	},

	getName(card) {
		return card[0].value;
	},

	findId(id) {
		var roomid = FlowRouter.getParam('roomid');
		return  "/cardDecision/"+roomid+"/"+id;
	},
});

Template.cardSelection.onCreated(function() {
	Meteor.subscribe('getCards');
	Meteor.subscribe('rooms');
});


