import React from 'react';
import { NavLink } from 'react-router-dom';
import Styles from './NavBarItems.module.css';

let NavBarItems = ({ children }) => {
  return (
    <nav className={Styles.nav}>
      <ul className={Styles.nav_list}>
        <li className={Styles.nav_list_items}>
          <NavLink to='/profile' activeClassName={Styles.activeLink}>
            Profile
          </NavLink>
        </li>
        <li className={Styles.nav_list_items}>
          <NavLink to='/dialogs' activeClassName={Styles.activeLink}>
            Message
          </NavLink>
        </li>
        <li className={Styles.nav_list_items}>
          <NavLink to='/news' activeClassName={Styles.activeLink}>
            News
          </NavLink>
        </li>
        <li className={Styles.nav_list_items}>
          <NavLink to='/music' activeClassName={Styles.activeLink}>
            Music
          </NavLink>
        </li>
        <li className={Styles.nav_list_items}>
          <NavLink to='/settings' activeClassName={Styles.activeLink}>
            Settings
          </NavLink>
        </li>
        <li className={Styles.nav_list_items}>
          <NavLink to='/users' activeClassName={Styles.activeLink}>
            Users
          </NavLink>
        </li>
      </ul>
      <h3 className={Styles.title}>Friends</h3>
      {children}
    </nav>
  );
};

export default NavBarItems;
