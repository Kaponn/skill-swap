import React from 'react';
import './App.css';
import { MainPage } from './features/main-page/MainPage';
import { ProfilePage } from './features/profile-page/ProfilePage';
import { SignIn } from './features/sign-in/SignIn';
import { SignUp } from './features/sign-up/SignUp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <SignIn /> */}
        {/* <SignUp /> */}
        {/* <MainPage /> */}
        <ProfilePage cityName='Kraków' dateOfBirth={new Date()} email="asdf@asdf.com" skills="piano, english" wantedSkills='spanish, guitar' bio='wfeoijwefjioewfojiwe joiwfojiwefojisfl jklsflkjsdf'/>
      </header>
    </div>
  );
}

export default App;
