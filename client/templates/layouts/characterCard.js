Template.characterCard.events({
	"submit #characterCard":function(event,instance) {
		event.preventDefault();
		const formData = $("#characterCard").serializeArray();
		Meteor.call('insertCharacterCards',formData, (error) => {
			if(error) {
				alert("error");
			} else {
				alert("You have successfully create a card!");
				$('#characterCard').trigger('reset');
				FlowRouter.go('/dashboard');
			}
		});
	},
});
