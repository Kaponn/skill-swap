import React from 'react';
import '../../styles/LoginPage.css';
import './styles/SignUp.css';

export const SignUp = () => {
  return(
    <div className="login-container">
      <h1 className="logo-header">SkillSwap</h1>
      <div className="login-form">
      <form onSubmit={(e) => {e.preventDefault()}}>
        <input className="login-input" type="text" required placeholder="Email" />
        <input className="login-input" type="text" required placeholder="Password" />
        <input className="login-input" type="text" required placeholder="Confirm Password" />
        <button className="login-button" type="submit">Sign In</button>
        <button className="login-button" type="submit">Sign Up</button>
      </form>
      </div>
    </div>
  )
}