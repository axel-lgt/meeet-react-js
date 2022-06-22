import React, { useState, useRef } from 'react';
import { signIn, resetPassword } from '../../firebase-config';

import './SignIn.scss';

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const [showSignIn, setShowSignIn] = useState(true);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await signIn(emailRef.current.value, passwordRef.current.value);
      setLoading(null);
    } catch(error) {
      console.log(error);
    }
  }

  const handleForgotPasword = () => {
    setShowSignIn(false);
    setShowForgotPassword(true);
  }

  const handlePasswordReset = async (e) => {
    e.preventDefault();

    try {
      await resetPassword(emailRef.current.value)
    } catch(error) {
      console.log(error);
    }
  }

    return (
      <>
      { showSignIn && 
        <div className="sign-in-container">
            <h2>Sign in</h2>

          <form onSubmit={handleSignIn}>
              <div className="sign-in-inputs">
                <input ref={emailRef} type="email" className="email-input" placeholder="Email" required/>
                <input ref={passwordRef} type="password" className="password-input" placeholder="Password" required/>
                <button type="submit" disabled={loading} className="sign-in-btn">Sign in</button>
                <h6 onClick={handleForgotPasword}>Forgot your password?</h6>
            </div>
          </form>
      </div>   
      }
      { showForgotPassword && 
        <div className="forgot-password-container">
          <h2>Forgot password</h2>
            <form onSubmit={handlePasswordReset}>
              <div className="forgot-password-inputs">
                <input ref={emailRef} type="email" className="email-input" placeholder="Email" required/>
                <button type="submit" disabled={loading} className="email-reset-btn">Reset password</button>
              </div>
            </form>
        </div>
      }
      </>
    ) 
};

export default SignIn;
