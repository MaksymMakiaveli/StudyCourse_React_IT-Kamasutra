import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { addPost, updateNewPostText, getUsers, getStatus, updateStatus } from '../../Redux/profile-reducer';
import Profile from './Profile';

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.id;
    }
    let { getStatus, getUsers } = this.props;
    if (getStatus && getUsers) {
      this.props.getUsers(userId);
      this.props.getStatus(userId);
    }
  }

  render() {
    let { status, updateStatus } = this.props;
    return (
      <div>
        <Profile {...this.props} status={status} updateStatus={updateStatus} />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  let { DataPost, newPostText, profile, status } = state.profilePage;
  let { id } = state.auth;
  return {
    profile,
    DataPost,
    newPostText,
    status,
    id,
  };
};

export default compose(
  connect(mapStateToProps, { addPost, updateNewPostText, getUsers, getStatus, updateStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
