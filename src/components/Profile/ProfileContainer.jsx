
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { profileAC } from '../../Redux/profile-reducer';
import Profile from './Profile';

class ProfileContainer extends Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUsers(userId)
  }

  render() {
    return (
      <div>
        <Profile {...this.props} />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  let { DataPost, newPostText, profile } = state.profilePage;
  return {
    profile,
    DataPost,
    newPostText,
  };
};

let withUrlDataContainerComponents = withRouter(ProfileContainer);

export default connect(mapStateToProps, profileAC)(withUrlDataContainerComponents);
