let initialState = {
	DataFriends: [
		{
			id: 1,
			name: 'Alex',
			avatar: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Al_Capone_in_1930.jpg',
		},
		{
			id: 2,
			name: 'Philip',
			avatar: 'https://fs.kinomania.ru/file/person/8/22/82297fb03825734791f88e99cf913877.jpeg',
		},
		{
			id: 3,
			name: 'Karina',
			avatar: 'https://mfa.gov.il/MFARUS/IsraelExperience/IsraelExperience/Natalie%20Portman%20large.jpg',
		},
	],
};

const siteBarReducer = (state = initialState, action) => {
	return state;
};
export default siteBarReducer;
