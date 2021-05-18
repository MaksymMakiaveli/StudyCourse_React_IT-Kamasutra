import React from 'react';
import { NavLink } from 'react-router-dom';
import { BtnAuthTrue, BtnAuthFalse } from '../common/BtnAuth/BtnAuth';
import Logo from './../../logo.png';
import HeaderStyles from './Header.module.css';

const Header = ({ isAuth, profile }) => {
  debugger;
  return (
    <header className={HeaderStyles.header}>
      <a href='#'>
        <img src={Logo} alt='logo' className={HeaderStyles.header_logo} />
      </a>

      <NavLink to={'/login'}>{isAuth ? <BtnAuthTrue /> : <BtnAuthFalse />}</NavLink>
    </header>
  );
};

export default Header;
