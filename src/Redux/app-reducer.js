import { getAuthUser } from './auth-reducer';

// ! Auth
const SET_INITIALIZED = 'SET_INITIALIZED';

let initialState = {
  initialized: false,
};

export const appReducer = (state = initialState, action) => {
  // ! App reducer
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

// ! action creator app
export let initializedSuccess = () => ({ type: SET_INITIALIZED });

export const initialize = () => {
  return (dispatch) => {
    let initPromise = dispatch(getAuthUser());
    Promise.all([initPromise]).then(() => {
      dispatch(initializedSuccess());
    });
  };
};
