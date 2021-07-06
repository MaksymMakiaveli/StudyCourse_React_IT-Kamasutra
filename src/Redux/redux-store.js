import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { appReducer } from './app-reducer';
import { authReducer } from './auth-reducer';
import { dialogsReducer } from './dialogs-reducer';
import { profileReducer } from './profile-reducer';
import { siteBarReducer } from './siteBar-reducer';
import { usersReducer } from './users-reducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  messagePage: dialogsReducer,
  siteBar: siteBarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
window.store = store;

export default store;
