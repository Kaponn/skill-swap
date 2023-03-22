import React from 'react';
import './styles/SignIn.css';
import '../../styles/LoginPage.css';

export const SignIn = () => {
  return(
    <div className="login-container">
      <h1 className="logo-header">SkillSwap</h1>
      <div className="login-form">
      <form onSubmit={(e) => {e.preventDefault()}}>
        <input className="login-input" type="text" required placeholder="Email" />
        <input className="login-input" type="text" required placeholder="Password" />
        <button className="login-button" type="submit">Sign In</button>
        <button className="login-button" type="submit">Sign Up</button>
      </form>
      </div>
    </div>
  )
}