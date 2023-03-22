import React from 'react';
import { HamburgerMenu } from '../../components/hamburger-menu/HamburgerMenu';
import { LogoButton } from '../../components/logo-button/LogoButton';
import { SearchInput } from '../../components/search-input/SearchInput';
import './styles/Menu.css';

export const Menu = () => {
  return (
    <div className="menu-header">        
      <LogoButton />
      <SearchInput />
      <HamburgerMenu />
      </div>
  )
}