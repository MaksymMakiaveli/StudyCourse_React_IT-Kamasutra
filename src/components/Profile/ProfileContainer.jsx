import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { addPost, updateNewPostText, getUsers, getStatus, updateStatus } from '../../Redux/profile-reducer';
import Profile from './Profile';

const ProfileContainerH = ({ getStatus, getUsers, updateStatus, id, ...props }) => {
  let userId = props.match.params.userId;
  if (!userId) {
    userId = id;
    if (!userId) {
      props.history.push('/login');
    }
  }
  useEffect(() => {
    getUsers(userId);
    getStatus(userId);
  }, [userId, getStatus, getUsers]);

  return (
    <div>
      <Profile {...props} updateStatus={updateStatus} />
    </div>
  );
};

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
  withRouter
)(ProfileContainerH);
