Template.dashboard.onCreated( () => {

    let template = Template.instance();
    template.autorun( () => {
        template.subscribe( 'createdrooms');
    });
});

Template.createRoom.events({
    'submit form': function(event){
        event.preventDefault();
        var currentUserId = Meteor.userId();
        var totalRooms = Rooms.find( { 'participants.name': currentUserId  }).count() + Rooms.find( { createdBy: currentUserId }).count();
        if (totalRooms >= 10) {
            Bert.alert("You have reached the maximum number of rooms can join, pls quit some first", "warning");
            return;
        }
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
        FlowRouter.go('/dashboard');
    }
});