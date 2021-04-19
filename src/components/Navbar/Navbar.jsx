import React from 'react';
import { NavLink } from 'react-router-dom';
import NavbarStyles from './Navbar.module.css';
import SideBarFriends from './sideBarFriends/sideBarFriends';

const Navbar = (props) => {
	let arrSiteBar = props.state.DataFriends.map((element) => {
		return <SideBarFriends name={element.name} avatar={element.avatar} />;
	});
	return (
		<nav className={NavbarStyles.nav}>
			<ul className={NavbarStyles.nav_list}>
				<li className={NavbarStyles.nav_list_items}>
					<NavLink to='/profile' activeClassName={NavbarStyles.activeLink}>
						Profile
					</NavLink>
				</li>
				<li className={NavbarStyles.nav_list_items}>
					<NavLink to='/dialogs' activeClassName={NavbarStyles.activeLink}>
						Message
					</NavLink>
				</li>
				<li className={NavbarStyles.nav_list_items}>
					<NavLink to='/news' activeClassName={NavbarStyles.activeLink}>
						News
					</NavLink>
				</li>
				<li className={NavbarStyles.nav_list_items}>
					<NavLink to='/music' activeClassName={NavbarStyles.activeLink}>
						Music
					</NavLink>
				</li>
				<li className={NavbarStyles.nav_list_items}>
					<NavLink to='settings' activeClassName={NavbarStyles.activeLink}>
						Settings
					</NavLink>
				</li>
			</ul>
			<h3 className={NavbarStyles.title}>Friends</h3>
			{arrSiteBar}
		</nav>
	);
};

export default Navbar;
