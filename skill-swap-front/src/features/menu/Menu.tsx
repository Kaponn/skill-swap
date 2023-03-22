import React from 'react';
import { HamburgerMenu } from './components/HamburgerMenu';
import { LogoButton } from './components/LogoButton';
import { SearchInput } from './components/SearchInput';
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
