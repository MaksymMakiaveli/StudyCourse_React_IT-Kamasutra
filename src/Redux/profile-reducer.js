// ! Post
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
	DataPost: [
		{ id: 1, post: 'Hi, how are you?' },
		{ id: 2, post: "It's my first post" },
		{ id: 3, post: 'Yo' },
	],
	newPostText: '',
};

const profileReducer = (state = initialState, action) => {
	// ! add post
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 5,
				post: state.newPostText,
			};
			return {
				...state,
				DataPost: [...state.DataPost, newPost],
				newPostText: '',
			};
		}
		case UPDATE_NEW_POST_TEXT: {
			return { ...state, newPostText: action.newText };
		}
		default:
			return state;
	}
};

// ! action creator post
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;
