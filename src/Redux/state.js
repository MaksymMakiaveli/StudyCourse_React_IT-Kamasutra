// ! Post
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
// ! Message
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

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
		// ! add post
		if (action.type === ADD_POST) {
			let newPost = {
				id: 5,
				post: this._state.profilePage.newPostText,
			};
			this._state.profilePage.DataPost.push(newPost);
			this._state.profilePage.newPostText = '';
			this._getRerender(this._state);
		} else if (action.type === UPDATE_NEW_POST_TEXT) {
			this._state.profilePage.newPostText = action.newText;
			this._getRerender(this._state);
		}
		// ! add message
		if (action.type === ADD_MESSAGE) {
			let newMessage = {
				id: 4,
				messages: this._state.messagePage.newMessageText,
			};

			this._state.messagePage.DataMessage.push(newMessage);
			this._state.messagePage.newMessageText = '';
			this._getRerender(this._state);
		} else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
			this._state.messagePage.newMessageText = action.newSms;
			this._getRerender(this._state);
		}
	},
};
// ! action creator post
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
// ! action creator message
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = (sms) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newSms: sms });

export default store;
