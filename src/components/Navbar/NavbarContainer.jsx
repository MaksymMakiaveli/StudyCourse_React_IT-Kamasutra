import { connect } from 'react-redux';
import { getUsersSelectors } from '../../Redux/users-selector';

import Navbar from './Navbar';

let mapStateToProps = (state) => {
  return {
    DataFriends: state.siteBar.DataFriends,
    users: getUsersSelectors(state),
  };
};

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;
