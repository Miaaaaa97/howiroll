Template.createRoom.events({
    'submit form': function(event){
        event.preventDefault();
        var roomname = event.target.roomname.value;
        var intro = event.target.intro.value;
        var password = event.target.password.value;
        var numplayers = event.target.numplayers.value;
        var public = false;
        if(event.target.choice.value == "yes") {
        	public = true;
        } 
        check(public, Boolean);
        Meteor.call('createRoom', roomname, intro, password, numplayers, public);
        Bert.alert('Your room has been created!', 'success');
        FlowRouter.go('/roomList');
    }
});