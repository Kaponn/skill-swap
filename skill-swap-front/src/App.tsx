import React from 'react';
import './App.css';
import { SignIn } from './features/sign-in/SignIn';
import { SignUp } from './features/sign-up/SignUp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SignUp />
      </header>
    </div>
  );
}

export default App;
