import { usersAPI, followAPI } from '../api/api';
import { updateObjectInArray } from '../assets/function-helpers/object-helpers';

// ! Users
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
  users: [],
  pageSize: 6,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

export const usersReducer = (state = initialState, action) => {
  // ! users reducer
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', { followed: true }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', { followed: false }),
      };
    case SET_USERS:
      return { ...state, users: action.users };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.count };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};

// ! action creator users
const followSuccess = (userId) => ({ type: FOLLOW, userId });
const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
const setUsers = (users) => ({ type: SET_USERS, users });
const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });
const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });

const getUsers = (currentPage, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true));

  let data = await usersAPI.getUsers(currentPage, pageSize);

  dispatch(setUsers(data.items));
  dispatch(setCurrentPage(currentPage));
  dispatch(setTotalUsersCount(data.totalCount));
  dispatch(toggleIsFetching(false));
};

const followUnfollow = async (dispatch, userId, methodApi, action) => {
  dispatch(toggleFollowingProgress(true, userId));
  let response = await methodApi(userId);
  if (response.data.resultCode === 0) {
    dispatch(action(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
};

const follow = (userId) => async (dispatch) => {
  followUnfollow(dispatch, userId, followAPI.clickFollow, followSuccess);
};

const unfollow = (userId) => async (dispatch) => {
  followUnfollow(dispatch, userId, followAPI.clickUnfollow, unfollowSuccess);
};

export const objectAC = { follow, unfollow, setCurrentPage, getUsers };
