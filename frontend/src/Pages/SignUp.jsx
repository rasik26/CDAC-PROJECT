import React from 'react';
import '../CSS/SignUpStyle.css';

export default function SignUp() {
  return (
    <div className="LoginContainer">
      <div className="left">
        <h1 className="lh1">ART GALLERY</h1>
      </div>

      <div className="right">
        <div className="rightbox">
          <div className="form-container">
            <div className="name-container">
              <input type="text" placeholder="First Name" id="firstName" />
              <input type="text" placeholder="Last Name" id="lastName" />
            </div>
            <input type="email" placeholder="Username" id="email" />
            <input type="password" placeholder="Password" id="pass" />
            <input type="password" placeholder="Confirm Password" id="confirmPass" />
            <button id="subbtn">SUBMIT</button>
          </div>
        </div>
        <p className="signup-link">
          Already have an account? <a href="#">Sign in</a>
        </p>
      </div>
    </div>
  );
}
