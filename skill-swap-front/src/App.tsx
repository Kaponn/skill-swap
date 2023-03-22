import React from 'react';
import './App.css';
import { MainPage } from './features/main-page/MainPage';
import { SignIn } from './features/sign-in/SignIn';
import { SignUp } from './features/sign-up/SignUp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <SignIn /> */}
        {/* <SignUp /> */}
        <MainPage />
      </header>
    </div>
  );
}

export default App;
