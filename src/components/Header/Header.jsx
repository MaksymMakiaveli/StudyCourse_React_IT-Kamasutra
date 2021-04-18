import React from "react";
import Logo from './../../logo.png';
import HeaderStyles from "./Header.module.css";


const Header = () => {
  return (
    <header className={HeaderStyles.header}>
      <a href='#'><img src={Logo} alt="logo" className={HeaderStyles.header_logo} /></a>
    </header>
  )
}

export default Header;