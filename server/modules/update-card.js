let _update = ( id, c ) => {
	return CharacterCards.update({"_id": id}, 
	{
		$set: {'card': c},
	});
};

export default function( id, card ) {
	_update(id, card );
}
