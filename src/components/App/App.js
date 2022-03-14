import React, { useState } from 'react';

import './App.scss';
import SignUp from '../SignUp/SignUp';

import favimg from '../../assets/fav-img.png';
import msgimg from '../../assets/msg-img.png';
import meeet from '../../assets/meeet-logo.svg';
import rightarrow from '../../assets/right-arrow.png'

const App = () => {

  const [showLandingInfo, setShowLandingInfo] = useState(true);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  return (
    <div className="landing-page-container">
      <div className="landing-page-container header-banner">
        <img className="landing-page-container header-banner-fav" src={favimg} alt="Heart icon" />
        <img className="landing-page-container header-banner-msg" src={msgimg} alt="Message icon" />
      </div>
      <div className="landing-page-container hero">
        <img className="landing-page-container hero-meeet" src={meeet} alt="Meeet logo" />
        { showLandingInfo &&
        <div className="landing-page-container hero-info">
          <h1>Welcome to <em>Meeet</em></h1>
          <p>
            Meeet is a dating app, allowing you to meet new people who live right next door. <br/>
            Based on filters such as <em>age</em>, <em>gender</em> and what you’re <em>looking for</em>, you’ll be able to find love interests or just new friends to hang out with.
          </p>
          <img className="landing-page-container hero-info-right-arrow" src={rightarrow} alt="Right arrow" onClick={() => {setShowSignUp(true); setShowLandingInfo(false);}}/>
        </div>
        }
        
          { showSignUp && 
            <div className="sign-up-container">
            <h2>Sign up today!</h2>
    
            <div className="sign-up-inputs">
              <input type="text" className="username-input" placeholder="Username"/>
              <input type="email" className="email-input" placeholder="Email"/>
              <input type="password" className="password-input" placeholder="Password"/>
              <input type="text" className="password-confirm-input" placeholder="Confirm password"/>
              <button className="sign-up-btn">Create account</button>
              <h6>Already have an account? <em onClick={() => {setShowSignIn(true); setShowSignUp(false);}}>Sign in</em></h6>
          </div>
      </div>
          }
          { showSignIn &&
            <div className="sign-in-container">
            <h2>Sign in</h2>
    
            <form>
              <div className="sign-up-inputs">
                <input type="text" className="username-input" placeholder="Username"/>
                <input type="password" className="password-input" placeholder="Password"/>
                <button className="sign-up-btn">Sign in</button>
                <h6>Forgot your password?</h6>
            </div>
            </form>
      </div>}
      </div>
    </div>
  );
}

export default App;
