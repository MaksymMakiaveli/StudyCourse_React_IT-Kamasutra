import React from 'react';
import Navbar from './Navbar';

const NavbarContainer = (props) => {
	let state = props.store.getState();
	return <Navbar DataFriends={state.siteBar.DataFriends} />;
};

export default NavbarContainer;
