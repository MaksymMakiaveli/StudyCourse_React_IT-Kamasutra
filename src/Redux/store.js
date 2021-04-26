import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import siteBarReducer from './siteBar-reducer';

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
	// ! render function
	_getRerender() {
		console.log('Change this');
	},
	subscribe(observer) {
		this._getRerender = observer;
	},
	// ! get state
	getState() {
		return this._state;
	},

	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.messagePage = dialogsReducer(this._state.messagePage, action);
		this._state.siteBar = siteBarReducer(this._state.siteBar, action);

		this._getRerender(this._state);
	},
};

export default store;
