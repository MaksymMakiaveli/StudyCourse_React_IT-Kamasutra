import React from 'react';
import { connect } from 'react-redux';
import { getAuthUser,logoutUser } from '../../Redux/auth-reducer.js';
import Header from './Header.jsx';

class HeaderContainer extends React.Component {
  
  componentDidMount() {
    this.props.getAuthUser();
  }

  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  let { isAuth } = state.auth;
  let {profile} = state.profilePage;
  return { isAuth,profile};
};

export default connect(mapStateToProps, { getAuthUser, logoutUser})(HeaderContainer);
