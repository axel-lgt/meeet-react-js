import React, { useState } from 'react';

import './SignUp.scss';

import SignIn from '../SignIn/SignIn';

const SignUp = () => {

    const [showSignIn, setShowSignIn] = useState(false);
    const [showSignUp, setShowSignUp] = useState(true);

    const handleSignIn = () => {
        setShowSignIn(true);
        setShowSignUp(false);
    }

  return (
    <div className="sign-form-container">
            { showSignUp &&
            <div className="sign-up-container">
                <h2>Sign up today!</h2>
        
                <div className="sign-up-inputs">
                  <input type="text" id="username" className="username-input" placeholder="Username" maxLength="16"/>
                  <input type="email" id="email" className="email-input" placeholder="Email"/>
                  <input type="password" id="password" className="password-input" placeholder="Password"/>
                  <input type="text" id="passwordconf" className="password-confirm-input" placeholder="Confirm password"/>
                  <button className="sign-up-btn">Create account</button>
                  <h6>Already have an account? <em onClick={handleSignIn}>Sign in</em></h6>
              </div>
            </div>
            }
              { showSignIn && 
                <SignIn />
              }
      </div>
  )
};

export default SignUp;
