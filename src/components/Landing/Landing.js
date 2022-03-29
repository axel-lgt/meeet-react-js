import React, { useEffect, useState } from 'react';

import './Landing.scss';
import SignUp from '../SignUp/SignUp';

import favimg from '../../assets/fav-img.png';
import msgimg from '../../assets/msg-img.png';
import meeet from '../../assets/meeet-logo.svg';
import rightarrow from '../../assets/right-arrow.png'

const Landing = () => {

  const [showLandingInfo, setShowLandingInfo] = useState(true);
  const [showSignUp, setShowSignUp] = useState(false);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1200);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1200);
  }

  const handleSignUp = () => {
    setShowSignUp(true);
    setShowLandingInfo(false);
  }

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  })

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
          { isDesktop ? (<SignUp />) : ( <img className="landing-page-container hero-info-right-arrow" src={rightarrow} alt="Right arrow" onClick={handleSignUp}/> )}
        </div>
        }

          { showSignUp && 
            <SignUp />
          }
      </div>
    </div>
  );
}

export default Landing;
