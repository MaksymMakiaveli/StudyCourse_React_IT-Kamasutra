import React, { Component } from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { objectAC } from '../../Redux/users-reducer';
import Preloader from '../common/Preloader/Preloader';
import {
  getCurrentPageSelectors,
  getFollowingInProgressSelectors,
  getIsFetchingSelectors,
  getPageSizeSelectors,
  getTotalUsersCountSelectors,
  getUsersSelectors,
} from '../../Redux/users-selector';
class UsersContainer extends Component {
  componentDidMount() {
    let { getUsers, currentPage, pageSize } = this.props;
    getUsers(currentPage, pageSize);
  }

  onPageChanged = (pageNumber) => {
    let { getUsers, pageSize } = this.props;
    getUsers(pageNumber, pageSize);
  };

  render() {
    let { totalUsersCount, pageSize, currentPage, users, follow, unfollow, followingInProgress } = this.props;
    let { onPageChanged } = this;
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            totalUsersCount={totalUsersCount}
            pageSize={pageSize}
            currentPage={currentPage}
            users={users}
            onPageChanged={onPageChanged}
            follow={follow}
            unfollow={unfollow}
            followingInProgress={followingInProgress}
          />
        )}
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsersSelectors(state),
    pageSize: getPageSizeSelectors(state),
    totalUsersCount: getTotalUsersCountSelectors(state),
    currentPage: getCurrentPageSelectors(state),
    isFetching: getIsFetchingSelectors(state),
    followingInProgress: getFollowingInProgressSelectors(state),
  };
};

export default connect(mapStateToProps, objectAC)(UsersContainer);
