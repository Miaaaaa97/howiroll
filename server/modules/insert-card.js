let _insertCard = ( card ) => {
	return CharacterCards.insert({
		card,
		createAt: new Date(),
		owner: Meteor.userId(),
	});
};

export default function( card ) {
	_insertCard( card );
}
