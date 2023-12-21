import React from 'react';
import '../CSS/LoginStyle.css';

export default function Login() {
  return (
    <div className="LoginContainer">
      <div className="left">
        <h1 className="lh1">ART GALLERY</h1>
      </div>

      <div className="right">
        <div className="rightbox">
        <div className="form-container">
          <input type="email" placeholder="Username" id="email" />
          <input type="password" placeholder="Password" id="pass" />
          <button id="subbtn">SUBMIT</button>
        </div>
        </div>
        
        <p className="signup-link">Don't have an account? <a href="#">Sign up</a></p>
      </div>
    </div>
  );
}
