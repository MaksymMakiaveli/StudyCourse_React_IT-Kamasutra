import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { addPost, updateNewPostText, getUsers, getStatus, updateStatus, savePhoto } from '../../Redux/profile-reducer';
import Profile from './Profile';

const ProfileContainerH = ({ getStatus, getUsers, id, ...props }) => {
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
      <Profile {...props} isOwner={!props.match.params.userId} />
    </div>
  );
};

let mapStateToProps = (state) => {
  let { DataPost, newPostText, profile, status, myProfile } = state.profilePage;
  let { id } = state.auth;
  return {
    profile,
    DataPost,
    newPostText,
    status,
    id,
    myProfile,
  };
};

export default compose(
  connect(mapStateToProps, { addPost, updateNewPostText, getUsers, getStatus, updateStatus, savePhoto }),
  withRouter
)(ProfileContainerH);
