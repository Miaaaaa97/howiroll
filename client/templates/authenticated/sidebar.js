Template.sidebar.onCreated( () => {
  let template = Template.instance();
  template.subscribe( 'sidebar' );
  Meteor.subscribe('rooms');
  Meteor.subscribe('getCardsForGM');
  Session.set("c", null);
});

Template.sidebar.helpers({
  displayCard(participant) {
    var user = Meteor.users.findOne(participant.name);
    var card = CharacterCards.findOne(participant.card).card;
    return user.profile.name.first + " " + user.profile.name.last + " (" + card[0].value + ")";
  },

  getIds(participant) {
    var roomid = FlowRouter.getParam('roomid');
    return "/cardDecision/" + roomid + "/" + participant.card;
  },

  participants() {
   var roomid = FlowRouter.getParam('roomid');
   var currentRoom = Rooms.findOne(roomid);
   return currentRoom.participants;
 },

 hasCard() {
  var roomid = FlowRouter.getParam('roomid');
  var currentUser = Meteor.userId();
  var currentRoom = Rooms.findOne(roomid);
  var cardid;
  var participants = currentRoom.participants;
  for (j=0; j < currentRoom.participants.length; j++) {
    if (participants[j].name == currentUser) {
      cardid = participants[j].card;
    }
  }
  var card = CharacterCards.findOne(cardid).card;
  if (card) {
    Session.set("c", card);
    return true;
  }
  return false;
},

characterName() {
  var card = Session.get("c");
  return card[0].value;
},

getStr() {
  var card = Session.get("c");
  return card[7].value;
},

getDex() {
  var card = Session.get("c");
  return card[8].value;
},

getCons() {
  var card = Session.get("c");
  return card[9].value;
},

getInt() {
  var card = Session.get("c");
  return card[10].value;
},

getWis() {
  var card = Session.get("c");
  return card[11].value;
},

getCha() {
  var card = Session.get("c");
  return card[12].value;
},

currentChannel( name ) {
  let current = FlowRouter.getParam( 'channel' );
  if ( current ) {
    return current === name || current === `@${ name }` ? 'active' : false;
  }
},
channels() {
  let channels = Channels.find();
  if ( channels ) {
    return channels;
  }
},
users() {
  let users = Meteor.users.find( { _id: { $ne: Meteor.userId() } } );
  if ( users ) {
    return users;
  }
},
fullName( name ) {
  if ( name ) {
    return `${ name.first } ${ name.last }`;
  }
},

dirChannel(name) {
  var roomid = FlowRouter.getParam('roomid');
  var currentUser = Meteor.userId();
  var currentRoom = Rooms.findOne(roomid);
  if ((name == "PCs" && currentUser == currentRoom.createdBy) || (name == "GMs" && currentUser != currentRoom.createdBy)) {
    return "#";
  }
  return "/messages/" + name + "/" + roomid;
},

isGM() {
  var roomid = FlowRouter.getParam('roomid');
  var currentUser = Meteor.userId();
  var currentRoom = Rooms.findOne(roomid);
  if (currentUser == currentRoom.createdBy) {
    return true;
  }
},


});
