Template.view.helpers({
	getId() {
		var id = FlowRouter.getQueryParam("id");  
		var currentCard = CharacterCards.find({_id: "B2zBeFraJ8KjjZvNZ"}).fetch();
		console.log(currentCard);
		//console.log(currentCard[0].value);
	},
});
