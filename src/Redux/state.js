let getRerender = () => {
	console.log('change state');
};

let state = {
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
};

export const addPost = () => {
	let newPost = {
		id: 5,
		post: state.profilePage.newPostText,
	};

	state.profilePage.DataPost.push(newPost);
	state.profilePage.newPostText = '';
	getRerender(state);
};

export const updateNewPostText = (newText) => {
	state.profilePage.newPostText = newText;
	getRerender(state);
};

export const addMessage = () => {
	let newMessage = {
		id: 4,
		messages: state.messagePage.newMessageText,
	};

	state.messagePage.DataMessage.push(newMessage);
	state.messagePage.newMessageText = '';
	getRerender(state);
};

export const updateNewMessageText = (newSms) => {
	state.messagePage.newMessageText = newSms;
	getRerender(state);
};

export const subscribe = (observer) => {
	getRerender = observer;
};

export default state;
