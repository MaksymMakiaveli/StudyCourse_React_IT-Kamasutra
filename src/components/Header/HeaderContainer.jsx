import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../Redux/auth-reducer.js';
import Header from './Header.jsx';

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  let { isAuth } = state.auth;
  let { myProfile } = state.profilePage;
  return { isAuth, myProfile };
};

export default connect(mapStateToProps, { logoutUser })(HeaderContainer);
