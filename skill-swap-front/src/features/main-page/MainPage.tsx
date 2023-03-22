import React from 'react';
import './styles/MainPage.css';
import { LogoButton } from '../../components/logo-button/LogoButton';
import { SearchInput } from '../../components/search-input/SearchInput';

export const MainPage = () => {
  return(
    <div className="main-page-container">
      <LogoButton />
      <SearchInput />
    </div>
  )
}