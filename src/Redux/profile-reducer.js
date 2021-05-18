// ! Post
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';

let initialState = {
  DataPost: [
    { id: 1, post: 'Hi, how are you?' },
    { id: 2, post: "It's my first post" },
    { id: 3, post: 'Yo' },
  ],
  newPostText: '',
  profile: null,
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
    case SET_USERS_PROFILE: {
      return { ...state, profile: action.profile };
    }
    default:
      return state;
  }
};

// ! action creator post
const addPost = () => ({ type: ADD_POST });
const updateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
const setUsersProfile = (profile) => ({ type: SET_USERS_PROFILE, profile });

export let profileAC = { addPost, updateNewPostText, setUsersProfile };

export default profileReducer;
