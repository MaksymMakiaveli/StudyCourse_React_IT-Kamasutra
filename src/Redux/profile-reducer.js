import { profileAPI } from '../api/api';

// ! Post
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const SET_MY_PROFILE = 'SET_MY_PROFILE';

let initialState = {
  DataPost: [],
  newPostText: '',
  profile: null,
  myProfile: null,
  status: '',
};

export const profileReducer = (state = initialState, action) => {
  // ! add post
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: state.DataPost.length,
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
    case SET_MY_PROFILE: {
      return { ...state, myProfile: { ...action.profile } };
    }
    case SET_STATUS: {
      return { ...state, status: action.status };
    }
    case SAVE_PHOTO_SUCCESS: {
      return { ...state, myProfile: { ...state.myProfile, photos: action.avatar } };
    }
    default:
      return state;
  }
};

// ! action creator post
export const addPost = () => ({ type: ADD_POST });
export const updateNewPostText = (newText) => ({ type: UPDATE_NEW_POST_TEXT, newText });
export const setUsersProfile = (profile) => ({ type: SET_USERS_PROFILE, profile });
export const setMyProfile = (profile) => ({ type: SET_MY_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const savePhotoSuccess = (avatar) => ({ type: SAVE_PHOTO_SUCCESS, avatar });

export const getUsers = (userId) => async (dispatch) => {
  let response = await profileAPI.getProfile(userId);
  dispatch(setUsersProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const getMyProfile = (id) => async (dispatch) => {
  let response = await profileAPI.getProfile(id);
  dispatch(setMyProfile(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export const savePhoto = (avatar) => async (dispatch) => {
  let response = await profileAPI.avatarProfile(avatar);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

export const updateProfile = (profile) => async (dispatch) => {
  console.log(profile);
  let response = await profileAPI.updateProfile(profile);

  if (response.data.resultCode === 0) {
    dispatch(dispatch(setUsersProfile(profile)));
  }
};
