import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

let mapStateToPropsRedirect = (state) => {
  let { isAuth } = state.auth;
  return {
    isAuth,
  };
};

export const withAuthRedirect = (Components) => {
  class RedirectComponent extends Component {
    render() {
      if (!this.props.isAuth) return <Redirect to='/login' />;

      return <Components {...this.props} />;
    }
  }

  let ConnectedAuthRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent);

  return ConnectedAuthRedirectComponent;
};
