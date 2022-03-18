import React from 'react';

import './SignIn.scss';

const SignIn = () => {

    return (
        <div className="sign-in-container">
            <h2>Sign in</h2>
    
            <form>
              <div className="sign-in-inputs">
                <input type="text" className="username-input" placeholder="Username"/>
                <input type="password" className="password-input" placeholder="Password"/>
                <button className="sign-in-btn">Sign in</button>
                <h6>Forgot your password?</h6>
            </div>
            </form>
      </div>
    ) 
};

export default SignIn;
