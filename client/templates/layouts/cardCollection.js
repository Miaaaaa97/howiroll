Template.cardCollection.helpers({
	cards() {
		let c = CharacterCards.find({owner: { $in: ["public", Meteor.userId()]}}, { sort: { createAt: 1 } });
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


