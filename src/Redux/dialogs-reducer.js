// ! Message
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
	// ! add message
	switch (action.type) {
		case ADD_MESSAGE:
			let newMessage = {
				id: 4,
				messages: state.newMessageText,
			};
			state.DataMessage.push(newMessage);
			state.newMessageText = '';

			return state;
		case UPDATE_NEW_MESSAGE_TEXT:
			state.newMessageText = action.newSms;

			return state;
		default:
			return state;
	}
};

// ! action creator message
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = (sms) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newSms: sms });

export default dialogsReducer;
