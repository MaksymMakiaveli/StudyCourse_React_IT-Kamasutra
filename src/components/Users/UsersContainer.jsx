import * as axios from 'axios';
import React, { Component } from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { objectAC } from '../../Redux/users-reducer';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
        this.props.toggleIsFetching(false);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.toggleIsFetching(false);
      });
  };

  render() {
    let { totalUsersCount, pageSize, currentPage, users, follow, unfollow } = this.props;
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
          />
        )}
      </>
    );
  }
}

let mapStateToProps = (state) => {
  let { users, pageSize, totalUsersCount, currentPage, isFetching } = state.usersPage;
  return { users, pageSize, totalUsersCount, currentPage, isFetching };
};

export default connect(mapStateToProps, objectAC)(UsersContainer);
