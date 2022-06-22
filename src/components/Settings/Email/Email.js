import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth, changeEmail } from '../../../firebase-config';

import './Email.scss';
import Settings from '../../Settings/Settings';

import backarrow from '../../../assets/mobile/mobile-back-arrow.svg';

const Email = () => {
    const navigate = useNavigate();
    const currentUser = useAuth();

    const [showError, setShowError] = useState('');

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleUpdateEmail = async (e) => {
        e.preventDefault();

        if(emailRef.current.value === currentUser.email) {
            return setShowError('Please use a different email')
        }

        // if(passwordRef.current.value !== currentUser.password) {
        //     return setShowError('Wrong password')
        // }

        try {
            setShowError('')
            await changeEmail(emailRef.current.value)
        } catch(error) {
            console.log(error);
        }

        navigate('/home', { replace: true })
    }

    return(
        <div className="email-block">

            <div className="email-container">
                <div className="email-container header-tab">
                    <div className="email-container header-tab back-arrow">
                        <img src={backarrow} alt="Go back to settings"  />
                    </div>
                    <h4>{currentUser?.email}</h4>
                </div>
                { showError }
                <form onSubmit={handleUpdateEmail}>
                    <div className="email-container inputs-container">
                        <input ref={emailRef} type="email" placeholder="New email address" />
                        <input ref={passwordRef} type="password" placeholder="Password" required/>
                        <button type="submit">Change email</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Email;
