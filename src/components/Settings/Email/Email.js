import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Email.scss';
import Settings from '../../Settings/Settings';

import backarrow from '../../../assets/mobile/mobile-back-arrow.svg';

const Email = () => {
    const navigate = useNavigate();

    function handleGoBack() {
        navigate(-1);
    }

    return(
        <div className="email-block">
            <div className="email-container">
                <div className="email-container header-tab">
                    <div className="email-container header-tab back-arrow">
                        <img src={backarrow} alt="Go back to settings" onClick={handleGoBack} />
                    </div>
                    <h4>email@address.com</h4>
                </div>
                <div className="email-container inputs-container">
                    <input type="email" placeholder="New email address" />
                    <input type="password" placeholder="Password" />
                    <button>Change email</button>
                </div>
            </div>
        </div>
    )
};

export default Email;
