import React from 'react';

export default function login() {
  return (
    <div>
      <div className="left">
        <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={user_icon} alt=""/>
            <input type="text"/>
          </div>
          <div className="input">
            <img src={email_icon} alt=""/>
            <input type="email"/>
          </div>
          <div className="input">
            <img src={password_icon} alt=""/>
            <input type="password"/>
          </div>
        </div>
        <div className="forgot-password">
          Lost Password? 
          <span>Click Here</span>
        </div>
        <div className="submit-container">
          <div className="submit">Sign Up</div>
          <div className="submit">Login</div>

        </div>
      </div> 
      <div className="right"></div>
    </div>
  )
}
