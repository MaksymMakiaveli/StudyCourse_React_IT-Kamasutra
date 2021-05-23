import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {authReducer} from './auth-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {profileReducer} from './profile-reducer';
import {siteBarReducer} from './siteBar-reducer';
import {usersReducer} from './users-reducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  messagePage: dialogsReducer,
  siteBar: siteBarReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
