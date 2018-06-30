Template.cardCollection.helpers({
	cards() {
		let c = CharacterCards.find({owner: Meteor.user()._id});
		return c;
	},

	getName(card) {
		return card[0].value;
	},

	findId(id) {
		return "/view?id="+id;
	},

});

Template.cardCollection.onCreated(function() {
	Meteor.subscribe('getCards');
});


