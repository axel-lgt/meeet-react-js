import './App.scss';
import SignUp from '../SignUp/SignUp';

import favimg from '../../assets/fav-img.png';
import msgimg from '../../assets/msg-img.png';
import meeet from '../../assets/meeet-logo.svg';
import rightarrow from '../../assets/right-arrow.png'

function App() {
  return (
    <div className="landing-page-container">
      <div className="landing-page-container header-banner">
        <img className="landing-page-container header-banner-fav" src={favimg} alt="Heart icon" />
        <img className="landing-page-container header-banner-msg" src={msgimg} alt="Message icon" />
      </div>
      <div className="landing-page-container hero">
        <img className="landing-page-container hero-meeet" src={meeet} alt="Meeet logo" />
        <h1>Welcome to <em>Meeet</em></h1>
          <p>
            Meeet is a dating app, allowing you to meet new people who live right next door. <br/>
            Based on filters such as <em>age</em>, <em>gender</em> and what you’re <em>looking for</em>, you’ll be able to find love interests or just new friends to hang out with.
          </p>
          <img className="landing-page-container hero-right-arrow" src={rightarrow} alt="Right arrow" />
      </div>
    </div>
  );
}

export default App;
