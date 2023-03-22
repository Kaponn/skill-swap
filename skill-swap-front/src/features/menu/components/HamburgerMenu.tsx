import React from 'react';
import '../styles/HamburgerMenu.css';
import logo from '../../../assets/hamburger-menu-24.png';

export const HamburgerMenu = () => {
  return(
    <button className="menu-button">
      <img src={logo} alt="menu"/>
    </button>
  )
}
