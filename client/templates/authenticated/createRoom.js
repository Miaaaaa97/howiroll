Template.dashboard.onCreated( () => {

    let template = Template.instance();
    template.autorun( () => {
        template.subscribe( 'createdrooms');
    });
    Session.set('private', false);
});

Template.createRoom.events({
    'click #yes': function(event, template) {
        Session.set('private', false);
    },
    'click #no': function(event, template) {
        Session.set('private', true);
    },
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
        if (Session.get('private')) {
            var password = event.target.password.value;
        } else {
            var password = "1";
        }
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

Template.createRoom.helpers({
    'private': function() {
        return Session.get('private');
    }
})