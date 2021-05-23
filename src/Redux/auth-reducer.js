import { authAPI } from '../api/api';

// ! Auth
const SET_USER_DATA = 'SET_USER_DATA';
const SET_USERS_PROFILE_HEDER = 'SET_USERS_PROFILE_HEDER';

let initialState = {
  id: null,
  email: null,
  login: null,
  profile: null,
  isAuth: false,
};

export const authReducer = (state = initialState, action) => {
  // ! Auth reducer
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    default:
      return state;
  }
};

// ! action creator auth
export let setAuthUserData = (id, email, login) => ({ type: SET_USER_DATA, data: { id, email, login } });

export const getAuthUser = () => {
  return (dispatch) => {
    authAPI.getAuth().then((response) => {
      if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setAuthUserData(id, email, login));
      }
    });
  };
};
