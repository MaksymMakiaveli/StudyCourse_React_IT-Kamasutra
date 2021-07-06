import { authAPI, securityAPI } from '../api/api';
import { getMyProfile } from './profile-reducer';

// ! Auth
const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

let initialState = {
  id: null,
  email: null,
  login: null,
  profile: null,
  isAuth: null,
  captchaUrl: null,
};

export const authReducer = (state = initialState, action) => {
  // ! Auth reducer
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

// ! action creator auth
export let setAuthUserData = (id, email, login, isAuth, profile) => ({
  type: SET_USER_DATA,
  payload: { id, email, login, isAuth, profile },
});
export let getCaptchaUrlSuccess = (captchaUrl) => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
});

export const getAuthUser = () => async (dispatch) => {
  let response = await authAPI.getAuth();

  if (response.data.resultCode === 0) {
    let { id, email, login } = response.data.data;
    dispatch(setAuthUserData(id, email, login, true));
    dispatch(getMyProfile(id));
  }
};

export const getLoginUser = (email, password, captcha) => async (dispatch) => {
  const response = await authAPI.loginAuth(email, password, captcha);
  if (response.data.resultCode === 0) {
    dispatch(getAuthUser());
  } else {
    if (response.data.resultCode === 10) {
      dispatch(getCaptchaUrl());
    }
  }
};

export const getCaptchaUrl = () => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export const logoutUser = () => async (dispatch) => {
  let response = await authAPI.logoutAuth();

  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};
