// ! Auth
const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
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
let setAuthUserData = (id, email, login) => ({ type: SET_USER_DATA, data: { id, email, login } });
export { setAuthUserData };

export default authReducer;
