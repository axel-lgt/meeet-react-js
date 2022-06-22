import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../firebase-config';

import './SignUp.scss';

import SignIn from '../SignIn/SignIn';

const SignUp = () => {
    let navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [showError, setShowError] = useState('');
    const [showSignIn, setShowSignIn] = useState(false);
    const [showSignUp, setShowSignUp] = useState(true);

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const handleSignUp = async (e) => {
      e.preventDefault();
      setLoading(true);

      // if(passwordConfirmRef !== passwordRef) {
      //   setLoading(false);
      //   return setShowError("Passwords don't match")
      // }

      try {
        setShowError('')
        await signUp(emailRef.current.value, passwordRef.current.value);
        navigate("/home", { replace: true });
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
                { showError }
              <form onSubmit={handleSignUp}>
                <div className="sign-up-inputs">
                  {/* <input type="text" id="username" className="username-input" placeholder="Username" maxLength="16"/> */}
                  <input ref={emailRef} type="email" className="email-input" placeholder="Email" required/>
                  <input ref={passwordRef} type="password" className="password-input" placeholder="Password" required/>
                  <input ref={passwordConfirmRef} type="password"className="password-confirm-input" placeholder="Confirm password"/>
                  <button className="sign-up-btn" disabled={loading}>Create account</button>
                  <h6>Already have an account? <em onClick={handleSignIn}>Sign in</em></h6>
                </div>
              </form>
            </div>
            }
              { showSignIn && 
                <SignIn />
              }
      </div>
  )
};

export default SignUp;
