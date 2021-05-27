import { profileAPI } from '../api/api';

// ! Post
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
  DataPost: [
    { id: 1, post: 'Hi, how are you?' },
    { id: 2, post: "It's my first post" },
    { id: 3, post: 'Yo' },
  ],
  newPostText: '',
  profile: null,
  status: '',
};

export const profileReducer = (state = initialState, action) => {
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
        status: '',
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.newText };
    }
    case SET_USERS_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    default:
      return state;
  }
};

// ! action creator post
export const addPost = () => ({ type: ADD_POST });
export const updateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const setUsersProfile = (profile) => ({ type: SET_USERS_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getUsers = (userId) => {
  return (dispatch) => {
    profileAPI.getProfile(userId).then((response) => {
      dispatch(setUsersProfile(response.data));
    });
  };
};

export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then((response) => {
      dispatch(setStatus(response.data));
    });
    
  };
  
};


export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
   
  };
};
