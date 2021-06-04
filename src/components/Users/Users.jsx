import React from 'react';
import { PaginatorUI } from '../common/Paginator/Paginator';
import { UsersCard } from '../common/UsersCard/UsersCard';
import Style from './Users.module.css';

let Users = ({
  totalUsersCount,
  pageSize,
  currentPage,
  users,
  onPageChanged,
  follow,
  unfollow,
  followingInProgress,
}) => {
  return (
    <>
      <div className={Style.wrapper_pagination}>
        <PaginatorUI
          currentPage={currentPage}
          onPageChanged={onPageChanged}
          pageSize={pageSize}
          totalUsersCount={totalUsersCount}
        />
      </div>

      <div className={Style.grid_container}>
        {users.map((user) => {
          return (
            <UsersCard
              key={user.id}
              user={user}
              follow={follow}
              unfollow={unfollow}
              followingInProgress={followingInProgress}
            />
          );
        })}
      </div>
    </>
  );
};

export default Users;
