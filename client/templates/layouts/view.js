Template.view.onCreated(function() {
	Meteor.subscribe('getCards');
});

Template.view.events({
	'click #removeButton': function() {
		var id = Session.get("ID");
		Meteor.call('removeCharacterCards', id, (error) => {
			if(error) {
				alert(error.reason);
			} else {
				alert("You have successfully removed the card!");
				$('#characterCard').trigger('reset');
			}
		});
		FlowRouter.go('/cardCollection');
	},

	"submit #characterCardV":function(event,instance) {
		event.preventDefault();
		const formData = $("#characterCardV").serializeArray();
		var id = Session.get("ID");
		var owner = Session.get("owner");
		if (owner == "public") {
			Meteor.call('insertCharacterCards',formData, (error) => {
				if(error) {
					alert("error");
				} else {
					$('#characterCard').trigger('reset');
				}
			});
		} else {
			Meteor.call('updateCharacterCards',id, formData, (error) => {
				if(error) {
					alert(error.reason);
				} else {	
					$('#characterCard').trigger('reset');
				}
			});
		}
		FlowRouter.go('/cardCollection');
	},
});

Template.view.helpers({
	getName() {
		var id = FlowRouter.getQueryParam("id");  
		var data = CharacterCards.findOne({_id: id});
		var card = data.card;
		Session.set("owner", data.owner);
		Session.set("c", card);
		Session.set("ID", id);
		return card[0].value;
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

