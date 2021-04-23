let store = {
	_state: {
		profilePage: {
			DataPost: [
				{ id: 1, post: 'Hi, how are you?' },
				{ id: 2, post: "It's my first post" },
				{ id: 3, post: 'Yo' },
			],
			newPostText: 'Post...',
		},

		messagePage: {
			DataMessage: [
				{ id: 1, messages: 'Hi' },
				{ id: 2, messages: 'How are you?' },
				{ id: 3, messages: 'Yo' },
			],

			DataChats: [
				{ id: 1, name: 'Maks' },
				{ id: 2, name: 'Dimych' },
				{ id: 3, name: 'Karina' },
				{ id: 4, name: 'Alex' },
				{ id: 5, name: 'Philip' },
			],

			newMessageText: 'Message....',
		},
		siteBar: {
			DataFriends: [
				{
					id: 1,
					name: 'Alex',
					avatar: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Al_Capone_in_1930.jpg',
				},
				{
					id: 2,
					name: 'Philip',
					avatar: 'https://fs.kinomania.ru/file/person/8/22/82297fb03825734791f88e99cf913877.jpeg',
				},
				{
					id: 3,
					name: 'Karina',
					avatar: 'https://mfa.gov.il/MFARUS/IsraelExperience/IsraelExperience/Natalie%20Portman%20large.jpg',
				},
			],
		},
	},

	// ! get state
	getState() {
		return this._state;
	},
	// ! added post
	addPost() {
		let newPost = {
			id: 5,
			post: this._state.profilePage.newPostText,
		};
		this._state.profilePage.DataPost.push(newPost);
		this._state.profilePage.newPostText = '';
		this.getRerender(this._state);
	},
	updateNewPostText(newText) {
		this._state.profilePage.newPostText = newText;
		this.getRerender(this._state);
	},
	// ! added message
	addMessage() {
		let newMessage = {
			id: 4,
			messages: this._state.messagePage.newMessageText,
		};

		this._state.messagePage.DataMessage.push(newMessage);
		this._state.messagePage.newMessageText = '';
		this.getRerender(this._state);
	},
	updateNewMessageText(newSms) {
		this._state.messagePage.newMessageText = newSms;
		this.getRerender(this._state);
	},
	// ! render function
	getRerender() {
		console.log('Change this');
	},
	subscribe(observer) {
		this.getRerender = observer;
	},
};

export default store;
