Meteor.publish('bugs', function(){
	return Bugs.find({});
});