/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Style from './Users.module.css';
import cl from 'classnames';
import { UsersCard } from '../common/UsersCard/UsersCard';

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
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <>
      <div className={Style.box_pagination}>
        {pages.slice(0, 30).map((p) => {
          return (
            <a
              key={p}
              href='#'
              onClick={(e) => {
                e.preventDefault();
                onPageChanged(p);
              }}
              className={cl(Style.pagination, { [Style.selectedPage]: currentPage === p })}
             
            >
              {p}
            </a>
          );
        })}
      </div>

      <div className={Style.grid_container}>
        {users.map((user) => {
          return (
            <UsersCard key={user.id} user={user} follow={follow} unfollow={unfollow} followingInProgress={followingInProgress} />
          );
        })}
      </div>
    </>
  );
};

export default Users;
