import React from 'react';
import { connect } from 'react-redux';
import { getAuthUser } from '../../Redux/auth-reducer.js';
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
  return { isAuth };
};

export default connect(mapStateToProps, { getAuthUser })(HeaderContainer);
