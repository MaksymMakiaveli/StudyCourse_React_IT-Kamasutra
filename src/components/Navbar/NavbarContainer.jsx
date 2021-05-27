import { connect } from 'react-redux';

import Navbar from './Navbar';

let mapStateToProps = (state) => {
	return {
		DataFriends: state.siteBar.DataFriends,
	};
};

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;
