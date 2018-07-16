import seed from 'meteor/themeteorchef:seeder';

let _seedUsers = () => {
	Seed( 'users', {
		environments: [ 'development', 'staging', 'production' ],
		data: [{
			username: 'bigguy1991',
			email: 'admin@admin.com',
			password: 'password',
			profile: {
				name: { first: 'Carl', last: 'Winslow' }
			},
			roles: [ 'admin' ]
		},{
			username: 'dicebot',
			email: 'dice@admin.com',
			password: 'password',
			profile: {
				name: { first: 'Official', last: 'Dicebot' }
			},
			roles: [ 'admin' ]
		}]
	});
};

let _seedChannels = () => {
	Seed( 'channels', {
		environments: [ 'development', 'staging', 'production' ],
		data: [ { 
			name: 'general', 
		},{ 
			name: 'PCs', 
		},{ 
			name: 'GMs', 
		}]
	});
};

export default function() {
	_seedUsers();
	_seedChannels();
}
