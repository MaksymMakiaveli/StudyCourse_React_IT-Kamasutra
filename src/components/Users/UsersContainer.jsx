import React, { Component } from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { objectAC } from '../../Redux/users-reducer';
import Preloader from '../common/Preloader/Preloader';
class UsersContainer extends Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage,this.props.pageSize)
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber,this.props.pageSize)
  };

  render() {
    let { totalUsersCount, pageSize, currentPage, users, follow, unfollow,followingInProgress} = this.props;
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
  let { users, pageSize, totalUsersCount, currentPage, isFetching,followingInProgress} = state.usersPage;
  return { users, pageSize, totalUsersCount, currentPage, isFetching,followingInProgress};
};

export default connect(mapStateToProps, objectAC)(UsersContainer);
