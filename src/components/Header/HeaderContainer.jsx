import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import {setAuthUserData} from '../../Redux/auth-reducer.js';
import Header from './Header.jsx';

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', { withCredentials: true }).then((response) => {
      if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        this.props.setAuthUserData(id, email, login);
      }
    });
  }

  
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  let { isAuth } = state.auth;
  let {profile} = state.profilePage
  return { isAuth,profile };
};

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
