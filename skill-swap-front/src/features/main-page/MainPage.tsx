import React from 'react';
import './styles/MainPage.css';
import { Profile } from './components/Profile';
import { Menu } from '../menu/Menu';

export const MainPage = () => {
  return(
    <div className="main-page-container">
      <Menu />
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
