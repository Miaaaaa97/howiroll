Template.cardDecision.onCreated(function() {
	Meteor.subscribe('getCardsForGM');
	Meteor.subscribe('rooms');
});

Template.cardDecision.events({
	'click #copy': function() {
		event.preventDefault();
		const formData = $("#characterCardV").serializeArray();
		var roomid = FlowRouter.getParam('roomid');

		if (CharacterCards.find({owner: Meteor.userId()}).count() >= 9) {
			Bert.alert("You have reached the maximum number of characterCards allowed to hold, pls delete some first", "warning");
			FlowRouter.go("/cardCollection");
			return;
		}

		Meteor.call('insertCharacterCards',formData, (error, result) => {
			if(error) {
				alert(error.reason);
			} else {
				$('#characterCard').trigger('reset');
				Meteor.call('selectCard', roomid, result);
			}
		});

		FlowRouter.go("/messages/general/" + roomid);
	},

	"submit #characterCardV":function(event,instance) {
		event.preventDefault();
		const formData = $("#characterCardV").serializeArray();
		var id = Session.get("ID");
		var roomid = FlowRouter.getParam('roomid');
		var owner = Session.get("owner");

		if (owner == "public") { 
			if (CharacterCards.find({owner: Meteor.userId()}).count() >= 9) {
				Bert.alert("You have reached the maximum number of characterCards allowed to hold, pls delete some first", "warning");
				FlowRouter.go("/cardCollection");
				return;
			} else {
				Meteor.call('insertCharacterCards',formData, (error, result) => {
					if(error) {
						alert(error.reason);
					} else {
						$('#characterCard').trigger('reset');
						id = result;
						Meteor.call('selectCard', roomid, id);
					}
				});
			} 
		}else {
			Meteor.call('updateCharacterCards',id, formData, (error) => {
				if(error) {
					alert(error.reason);
				} else {	
					$('#characterCard').trigger('reset');
					Meteor.call('selectCard', roomid, id);
				}
			});
		}
		FlowRouter.go("/messages/general/" + roomid);
	},
});

Template.cardDecision.helpers({
	isPublic() {
		var owner = Session.get("owner");
		if (owner == "public") {
			return true;
		}
		return false;
	},

	isOwner() {
		var owner = Session.get("owner");
		if (owner == Meteor.userId()) {
			return true;
		}
		return false;
	},

	getName() {
		var id = FlowRouter.getParam("cardid");  
		var data = CharacterCards.findOne({_id: id});
		Session.set("owner", data.owner);
		Session.set("c", data.card);
		Session.set("ID", id);
		return data.card[0].value;
	},

	getClass() {
		var card = Session.get("c");
		return card[1].value;
	},

	getBG() {
		var card = Session.get("c");
		return card[2].value;
	},

	getEN() {
		var card = Session.get("c");
		return card[3].value;
	},

	getrace() {
		var card = Session.get("c");
		return card[4].value;
	},

	getAlighment() {
		var card = Session.get("c");
		return card[5].value;
	},

	getEP() {
		var card = Session.get("c");
		return card[6].value;
	},

	getstr() {
		var card = Session.get("c");
		return card[7].value;
	},

	getdex() {
		var card = Session.get("c");
		return card[8].value;
	},

	getcon() {
		var card = Session.get("c");
		return card[9].value;
	},

	getint() {
		var card = Session.get("c");
		return card[10].value;
	},

	getwis() {
		var card = Session.get("c");
		return card[11].value;
	},

	getcha() {
		var card = Session.get("c");
		return card[12].value;
	},

	getInspiration() {
		var card = Session.get("c");
		return card[13].value;
	},

	getPB() {
		var card = Session.get("c");
		return card[14].value;
	},

	getststr() {
		var card = Session.get("c");
		return card[15].value;
	},

	getstdex() {
		var card = Session.get("c");
		return card[16].value;
	},

	getstcon() {
		var card = Session.get("c");
		return card[17].value;
	},

	getstint() {
		var card = Session.get("c");
		return card[18].value;
	},

	getstwis() {
		var card = Session.get("c");
		return card[19].value;
	},

	getstcha() {
		var card = Session.get("c");
		return card[20].value;
	},

	getacro() {
		var card = Session.get("c");
		return card[21].value;
	},

	getanim() {
		var card = Session.get("c");
		return card[22].value;
	},

	getarca() {
		var card = Session.get("c");
		return card[23].value;
	},

	getathl() {
		var card = Session.get("c");
		return card[24].value;
	},

	getdece() {
		var card = Session.get("c");
		return card[25].value;
	},

	gethist() {
		var card = Session.get("c");
		return card[26].value;
	},

	getinsi() {
		var card = Session.get("c");
		return card[27].value;
	},

	getinti() {
		var card = Session.get("c");
		return card[28].value;
	},

	getinve() {
		var card = Session.get("c");
		return card[29].value;
	},

	getmedi() {
		var card = Session.get("c");
		return card[30].value;
	},

	getnatu() {
		var card = Session.get("c");
		return card[31].value;
	},

	getperc() {
		var card = Session.get("c");
		return card[32].value;
	},

	getperf() {
		var card = Session.get("c");
		return card[33].value;
	},

	getpers() {
		var card = Session.get("c");
		return card[34].value;
	},

	getreli() {
		var card = Session.get("c");
		return card[35].value;
	},

	getslei() {
		var card = Session.get("c");
		return card[36].value;
	},

	getstea() {
		var card = Session.get("c");
		return card[37].value;
	},

	getsurv() {
		var card = Session.get("c");
		return card[38].value;
	},

	getpins() {
		var card = Session.get("c");
		return card[39].value;
	},

	getpper() {
		var card = Session.get("c");
		return card[40].value;
	},

	getAC() {
		var card = Session.get("c");
		return card[41].value;
	},

	getinitiative() {
		var card = Session.get("c");
		return card[42].value;
	},

	getspeed() {
		var card = Session.get("c");
		return card[43].value;
	},

	getHP() {
		var card = Session.get("c");
		return card[44].value;
	},

	gettHP() {
		var card = Session.get("c");
		return card[45].value;
	},

	getHD() {
		var card = Session.get("c");
		return card[46].value;
	},

	getDS() {
		var card = Session.get("c");
		return card[47].value;
	},

	getAS() {
		var card = Session.get("c");
		return card[48].value;
	},

	getPT() {
		var card = Session.get("c");
		return card[49].value;
	},

	getideals() {
		var card = Session.get("c");
		return card[50].value;
	},

	getbonds() {
		var card = Session.get("c");
		return card[51].value;
	},

	getflaws() {
		var card = Session.get("c");
		return card[52].value;
	},

	gettreasures() {
		var card = Session.get("c");
		return card[53].value;
	},

	getlan() {
		var card = Session.get("c");
		return card[54].value;
	},

	getequip() {
		var card = Session.get("c");
		return card[55].value;
	},

	getFT() {
		var card = Session.get("c");
		return card[56].value;
	},

	getAO() {
		var card = Session.get("c");
		return card[57].value;
	},

	getSC() {
		var card = Session.get("c");
		return card[58].value;
	},

	getSCA() {
		var card = Session.get("c");
		return card[59].value;
	},

	getSSDC() {
		var card = Session.get("c");
		return card[60].value;
	},

	getSAB() {
		var card = Session.get("c");
		return card[61].value;
	},

	getspells() {
		var card = Session.get("c");
		return card[62].value;
	},
});

