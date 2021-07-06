import React from 'react';
import friendStyles from './NavBarFriends.module.css';
import userPhoto from '../../../assets/images/profileNoAvatar.png';
import { NavLink } from 'react-router-dom';

let SideBarFriends = ({ users }) => {
  return (
    <>
      {users.slice(0, 3).map((user) => {
        return (
          <div key={user.id} className={friendStyles.wrapper}>
            <a href='##'>
              <img
                className={friendStyles.avatar}
                src={user.photos.small != null ? user.photos.small : userPhoto}
                alt=''
              />
            </a>
            <div>
              <a href='##' className={friendStyles.nickname}>
                <NavLink to={'/profile/' + user.id}>
                  <p>{user.name}</p>
                </NavLink>
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SideBarFriends;
