import React from 'react';
import './styles/MainPage.css';
import { LogoButton } from '../../components/logo-button/LogoButton';
import { SearchInput } from '../../components/search-input/SearchInput';
import { Profile } from './components/Profile';

export const MainPage = () => {
  return(
    <div className="main-page-container">
      <div className="main-page-header">        
      <LogoButton />
      <SearchInput />
      </div>
      <div className="main-page-profiles">
      <Profile name="Ania" city="Kraków" skills={["playing the guitar", "English"]} wantedSkills={["playing the piano", "Spanish"]} />
      <Profile name="Ania" city="Kraków" skills={["playing the guitar", "English"]} wantedSkills={["playing the piano", "Spanish"]} />
      <Profile name="Ania" city="Kraków" skills={["playing the guitar", "English"]} wantedSkills={["playing the piano", "Spanish"]} />
      <Profile name="Ania" city="Kraków" skills={["playing the guitar", "English"]} wantedSkills={["playing the piano", "Spanish"]} />
      <Profile name="Ania" city="Kraków" skills={["playing the guitar", "English"]} wantedSkills={["playing the piano", "Spanish"]} />
      <Profile name="Ania" city="Kraków" skills={["playing the guitar", "English"]} wantedSkills={["playing the piano", "Spanish"]} />
      <Profile name="Ania" city="Kraków" skills={["playing the guitar", "English"]} wantedSkills={["playing the piano", "Spanish"]} />
      <Profile name="Ania" city="Kraków" skills={["playing the guitar", "English"]} wantedSkills={["playing the piano", "Spanish"]} />
      <Profile name="Ania" city="Kraków" skills={["playing the guitar", "English"]} wantedSkills={["playing the piano", "Spanish"]} />
      <Profile name="Ania" city="Kraków" skills={["playing the guitar", "English"]} wantedSkills={["playing the piano", "Spanish"]} />
      </div>
    </div>
  )
}