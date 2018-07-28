Meteor.publish('userData', function () {
	if (this.userId) {
		return Meteor.users.find({ _id: this.userId }, {
			fields: { roles: 1}
		});
	} else {
		this.ready();
	}
});