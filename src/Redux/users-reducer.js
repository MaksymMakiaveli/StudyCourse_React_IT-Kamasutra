// ! Post
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
	users: [
		{
			id: 1,
			followed: false,
			avatar:
				'https://cdn22.img.ria.ru/images/07e4/06/08/1572627905_399:0:2327:1446_1920x0_80_0_0_80e3f5c4eaa3c081a8da99f8dbe705fc.jpg',
			fullname: 'Dimych',
			status: 'hey my friend',
			location: { city: 'Moscow', country: 'Russia' },
		},
		{
			id: 2,
			followed: true,
			avatar: 'https://pbs.twimg.com/profile_images/806556723410599938/jf10BYhC.jpg',
			fullname: 'Karina',
			status: 'YOYOYO',
			location: { city: 'Vinnitsa', country: 'Ukraine' },
		},
		{
			id: 3,
			followed: false,
			avatar: 'https://mainstyles.ru/uploads/material-image/Skubi-Du_2020_vyshel_onlayn_i_razocharoval.jpg',
			fullname: 'Sasha',
			status: 'KKABZDA KAK PROSTO',
			location: { city: 'Minsk', country: 'Belarus' },
		},
	],
};

const usersReducer = (state = initialState, action) => {
	// ! add post
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map((user) => {
					if (user.id === action.userId) {
						return { ...user, followed: true };
					}
					return user;
				}),
			};
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map((user) => {
					if (user.id === action.userId) {
						return { ...user, followed: false };
					}
					return user;
				}),
			};
		case SET_USERS:
			return { ...state, users: [...state.users, ...action.users] };

		default:
			return state;
	}
};

// ! action creator post
export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export default usersReducer;
