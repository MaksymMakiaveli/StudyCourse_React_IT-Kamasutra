import React from 'react';
import { NavLink } from 'react-router-dom';
import { BtnAuthTrue, BtnAuthFalse, BtnLogout } from '../common/BtnAuth/BtnAuth';
import Logo from './../../logo.png';
import Styles from './Header.module.css';
import profileNoAvatar from '../../assets/images/profileNoAvatar.png';

const Header = ({ isAuth, logoutUser, myProfile }) => {
  if (!myProfile) return '';
  return (
    <header className={Styles.header}>
      <a href='##'>
        <img src={Logo} alt='logo' className={Styles.header_logo} />
      </a>
      <div className={Styles.container}>
        <img src={profileNoAvatar} alt='' className={Styles.avatarHeader} />
        <NavLink to={'/login'}>
          {isAuth ? <BtnAuthTrue profile={myProfile} /> : <BtnAuthFalse />}
        </NavLink>
        <BtnLogout logoutUser={logoutUser} />
      </div>
    </header>
  );
};

export default Header;
