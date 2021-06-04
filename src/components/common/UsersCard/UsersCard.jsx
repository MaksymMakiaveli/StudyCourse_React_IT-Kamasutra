import React from 'react';
import { NavLink } from 'react-router-dom';
import Style from './UsersCard.module.css';
import userPhoto from './../../../assets/images/profileNoAvatar.png';

export function UsersCard({ user, follow, unfollow, followingInProgress }) {
  return (
    <>
      <section className={Style.sec}>
        <div className={Style.card}>
          <div className={Style.content}>
            <div className={Style.imgText}>
              <div className={Style.imgBx}>
                <NavLink to={'/profile/' + user.id} className={Style.img_user}>
                  <img src={user.photos.small != null ? user.photos.small : userPhoto} alt='' />
                </NavLink>
              </div>
              <NavLink to={'/profile/' + user.id}>
                <h3>{user.name}</h3>
              </NavLink>
              <span>{user.status}</span>
            </div>
            {user.followed ? (
              <button
                disabled={followingInProgress.some((id) => id === user.id)}
                onClick={() => unfollow(user.id)}
                className={Style.button}
              >
                UNFOLLOW
              </button>
            ) : (
              <button
                disabled={followingInProgress.some((id) => id === user.id)}
                onClick={() => follow(user.id)}
                className={Style.button}
              >
                FOLLOW
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
