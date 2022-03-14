const SignUp = () => (
    <div className="sign-up-container">
          <h2>Sign up today!</h2>
  
          <div className="sign-up-inputs">
            <input type="text" className="username-input" placeholder="Username"/>
            <input type="email" className="email-input" placeholder="Email"/>
            <input type="password" className="password-input" placeholder="Password"/>
            <input type="text" className="password-confirm-input" placeholder="Confirm password"/>
            <button className="sign-up-btn">Create account</button>
            <h6>Already have an account? <em>Sign in</em></h6>
        </div>
    </div>
);

export default SignUp;
