import React from 'react';
import NavBarItems from './NavBarItems/NavBarItems';
import NavBarFriends from './NavBarFriends/NavBarFriends';

const Navbar = ({ DataFriends, users }) => {
  return (
    <>
      <NavBarItems>
        <NavBarFriends users={users} />
      </NavBarItems>
    </>
  );
};

export default Navbar;
