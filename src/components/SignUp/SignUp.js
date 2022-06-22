import React, { useState, useRef } from 'react';
import { auth, signUp } from '../../firebase-config';

import './SignUp.scss';

import SignIn from '../SignIn/SignIn';

const SignUp = () => {
    const [loading, setLoading] = useState(false);
    const [showSignIn, setShowSignIn] = useState(false);
    const [showSignUp, setShowSignUp] = useState(true);

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSignUp = async () => {
      setLoading(true);
      try {
        await signUp(emailRef.current.value, passwordRef.current.value);
      } catch(error) {
        console.log(error);
      }
      setLoading(false);
    }

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
                  {/* <input type="text" id="username" className="username-input" placeholder="Username" maxLength="16"/> */}
                  <input ref={emailRef} type="email" id="email" className="email-input" placeholder="Email"/>
                  <input ref={passwordRef} type="password" id="password" className="password-input" placeholder="Password"/>
                  {/* <input type="password" id="passwordconf" className="password-confirm-input" placeholder="Confirm password"/> */}
                  <button className="sign-up-btn" disabled={loading} onClick={handleSignUp}>Create account</button>
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
