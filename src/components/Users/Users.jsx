/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Style from './Users.module.css';
import cl from 'classnames';
import userPhoto from './../../assets/images/profileNoAvatar.png';
import { NavLink } from 'react-router-dom';

let Users = ({ totalUsersCount, pageSize, currentPage, users, onPageChanged, follow, unfollow }) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={Style.grid_container}>
      <div>
        {pages.slice(0,30).map((p) => {
          return (
            <a href='#'  className={cl(Style.pagination, { [Style.selectedPage]: currentPage === p })}
              onClick={(e) => {  e.preventDefault(); onPageChanged(p); }}>
              {p}
            </a> 
          );
        })}
      </div>

      {users.map((user) => {
        return (
          <div key={user.id} className={Style.wrapper_user}>
            <NavLink to={'/profile/' + user.id} className={Style.img_user}>
              <img  className={Style.img_user} src={user.photos.small != null ? user.photos.small : userPhoto} alt='' />
            </NavLink>

            {
            user.followed ? 
            ( <button onClick={() => {unfollow(user.id);}}className={Style.button}>UNFOLLOW</button>) 
            : 
            (<button onClick={() => {follow(user.id);}}className={Style.button}>FOLLOW</button>)
            }

            <div className={Style.desription_user}>
              <div className={Style.fullname_user}>
                <span className={Style.fullname}>{user.name}</span>
              </div>
              <div className={Style.location_user}>
                <span className={Style.location_country}>{'user.location.country'} </span>
                <span className={Style.location_city}>{'user.location.city'}</span>
              </div>
              <div className={Style.status_user}>
                <span className={Style.status}>{user.status}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
