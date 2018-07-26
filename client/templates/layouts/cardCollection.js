Template.cardCollection.helpers({
	cards() {
		let c = CharacterCards.find({owner: { $in: ["public", Meteor.userId()]}}, { sort: { createAt: 1 } });
		return c;
	},

	getName(card) {
		return card[0].value;
	},

	getClass(card) {
		return card[1].value;
	},

	getXp(card) {
		return card[6].value;
	},

	getBg(card) {
		return card[2].value;
	},

	findId(id) {
		return "/view?id="+id;
	},

});

Template.cardCollection.onCreated(function() {
	Meteor.subscribe('getCards');
});


