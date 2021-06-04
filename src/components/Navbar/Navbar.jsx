import React from 'react';
import NavBarItems from './NavBarItems/NavBarItems';
import NavBarFriends from './NavBarFriends/NavBarFriends';

const Navbar = ({ DataFriends }) => {
  return (
    <>
      <NavBarItems>
        <NavBarFriends DataFriends={DataFriends} />
      </NavBarItems>
    </>
  );
};

export default Navbar;
