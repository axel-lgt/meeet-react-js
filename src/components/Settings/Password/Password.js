import { useState } from 'react';

import './Password.scss';
import Settings from '../Settings';

import backarrow from '../../../assets/mobile/mobile-back-arrow.svg';

const Password = () => {

    const [showPasswordSettings, setShowPasswordSettings] = useState(true);
    const [showSettings, setShowSettings] = useState(false);

    const settingsHandler = () => {
        setShowPasswordSettings(false);
        setShowSettings(true);
    }

    return(
        <div className="password-block">
            { showPasswordSettings &&
            <div className="password-container">
                <div className="password-container header-tab">
                    <div className="password-container header-tab back-arrow">
                        <img src={backarrow} alt="Go back to settings" onClick={settingsHandler} />
                    </div>
                    <h4>Password</h4>
                </div>
                <div className="password-container inputs-container">
                    <input type="password" placeholder="Current password" />
                    <input type="password" placeholder="New password" />
                    <input type="password" placeholder="Confirm new password" />
                    <button>Change password</button>
                </div>
            </div>
            }
            { showSettings && 
                <Settings />
            }
        </div>
    )
};

export default Password;
