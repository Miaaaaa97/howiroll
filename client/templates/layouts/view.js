Template.view.helpers({
	"submit #characterCardV":function(event,instance) {
		event.preventDefault();
		const formData = $("#characterCard").serializeArray();
		var id = Session.get("ID");
		Meteor.call('updateCharacterCards',id, formData, (error) => {
			if(error) {
				alert("error");
			} else {
				alert("You have successfully create a card!");
				$('#characterCard').trigger('reset');
			}
		});
		FlowRouter.go('/cardCollection');
	},

	getName() {
		var id = FlowRouter.getQueryParam("id");  
		var data = CharacterCards.findOne({_id: id});
		var card = data.card;
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

	getststr() {
		var card = Session.get("c");
		return card[13].value;
	},

	getstdex() {
		var card = Session.get("c");
		return card[14].value;
	},

	getstcon() {
		var card = Session.get("c");
		return card[15].value;
	},

	getstint() {
		var card = Session.get("c");
		return card[16].value;
	},

	getstwis() {
		var card = Session.get("c");
		return card[17].value;
	},

	getstcha() {
		var card = Session.get("c");
		return card[18].value;
	},

	getacro() {
		var card = Session.get("c");
		return card[19].value;
	},

	getanim() {
		var card = Session.get("c");
		return card[20].value;
	},

	getarca() {
		var card = Session.get("c");
		return card[21].value;
	},

	getathl() {
		var card = Session.get("c");
		return card[22].value;
	},

	getdece() {
		var card = Session.get("c");
		return card[23].value;
	},

	gethist() {
		var card = Session.get("c");
		return card[24].value;
	},

	getinsi() {
		var card = Session.get("c");
		return card[25].value;
	},

	getinti() {
		var card = Session.get("c");
		return card[26].value;
	},

	getinve() {
		var card = Session.get("c");
		return card[27].value;
	},

	getmedi() {
		var card = Session.get("c");
		return card[28].value;
	},

	getnatu() {
		var card = Session.get("c");
		return card[29].value;
	},

	getperc() {
		var card = Session.get("c");
		return card[30].value;
	},

	getperf() {
		var card = Session.get("c");
		return card[31].value;
	},

	getpers() {
		var card = Session.get("c");
		return card[32].value;
	},

	getreli() {
		var card = Session.get("c");
		return card[33].value;
	},

	getslei() {
		var card = Session.get("c");
		return card[34].value;
	},

	getstea() {
		var card = Session.get("c");
		return card[35].value;
	},

	getsurv() {
		var card = Session.get("c");
		return card[36].value;
	},

	getpins() {
		var card = Session.get("c");
		return card[37].value;
	},

	getpper() {
		var card = Session.get("c");
		return card[38].value;
	},

	getAC() {
		var card = Session.get("c");
		return card[39].value;
	},

	getinitiative() {
		var card = Session.get("c");
		return card[40].value;
	},

	getspeed() {
		var card = Session.get("c");
		return card[41].value;
	},

	getHP() {
		var card = Session.get("c");
		return card[42].value;
	},

	gettHP() {
		var card = Session.get("c");
		return card[43].value;
	},

	getHD() {
		var card = Session.get("c");
		return card[44].value;
	},

	getDS() {
		var card = Session.get("c");
		return card[45].value;
	},

	getAS() {
		var card = Session.get("c");
		return card[46].value;
	},

	gePT() {
		var card = Session.get("c");
		return card[47].value;
	},

	getideals() {
		var card = Session.get("c");
		return card[48].value;
	},

	getbonds() {
		var card = Session.get("c");
		return card[49].value;
	},

	getflaws() {
		var card = Session.get("c");
		return card[50].value;
	},

	gettreasures() {
		var card = Session.get("c");
		return card[51].value;
	},

	getlan() {
		var card = Session.get("c");
		return card[52].value;
	},

	getequip() {
		var card = Session.get("c");
		return card[53].value;
	},

	getFT() {
		var card = Session.get("c");
		return card[54].value;
	},

	getAO() {
		var card = Session.get("c");
		return card[55].value;
	},

	getSC() {
		var card = Session.get("c");
		return card[56].value;
	},

	getSCA() {
		var card = Session.get("c");
		return card[57].value;
	},

	getSSDC() {
		var card = Session.get("c");
		return card[58].value;
	},

	getSAB() {
		var card = Session.get("c");
		return card[59].value;
	},

	getspells() {
		var card = Session.get("c");
		return card[60].value;
	},



});

Template.view.onCreated(function() {
	Meteor.subscribe('getCards');
});
