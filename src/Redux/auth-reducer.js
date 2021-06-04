import { authAPI } from '../api/api';

// ! Auth
const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  id: null,
  email: null,
  login: null,
  profile: null,
  isAuth: null,
};

export const authReducer = (state = initialState, action) => {
  // ! Auth reducer
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

// ! action creator auth
export let setAuthUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { id, email, login, isAuth },
});

export const getAuthUser = () => async (dispatch) => {
  let response = await authAPI.getAuth();

  if (response.data.resultCode === 0) {
    let { id, email, login } = response.data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const getLoginUser = (email, password) => async (dispatch) => {
  let response = await authAPI.loginAuth(email, password);

  if (response.data.resultCode === 0) {
    dispatch(getAuthUser());
  }
};

export const logoutUser = () => async (dispatch) => {
  let response = await authAPI.logoutAuth();

  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};
