import { useState } from 'react';

import './BlockedUsers.scss';
import Settings from '../Settings';

import backarrow from '../../../assets/mobile/mobile-back-arrow.svg';
import imgplaceholder from '../../../assets/profilecell/avatar-placeholder.png';
import unblock from '../../../assets/profilecell/unblock.svg';

const BlockedUsers = () => {

    const [showBlockedSettings, setShowBlockedSettings] = useState(true);
    const [showSettings, setShowSettings] = useState(false);

    const blockedHandler = () => {
        setShowBlockedSettings(false);
        setShowSettings(true);
    }

    return(
        <div className="blocked-block">
            { showBlockedSettings &&
            <div className="blocked-container">
                <div className="blocked-container header-tab">
                    <div className="blocked-container header-tab back-arrow">
                        <img src={backarrow} alt="Go back to settings" onClick={blockedHandler} />
                    </div>
                    <h4>Blocked users</h4>
                </div>
                <div className="blocked-container blocked-list">
                    <div className="blocked-container blocked-list cell">
                        <div className="blocked-container blocked-list cell blocked-img-name-group">
                            <img className="blocked-img" src={imgplaceholder} alt="User photo" />
                            <div className="blocked-name-date-group">
                                <h5>Name</h5>
                                <h5>Blocked on: dd/mm/yyyy</h5>
                            </div>
                        </div>
                        <img className="unblock-icon" src={unblock} alt="Unblock this user" />
                    </div>
                    <div className="blocked-container blocked-list cell">
                        <div className="blocked-container blocked-list cell blocked-img-name-group">
                            <img className="blocked-img" src={imgplaceholder} alt="User photo" />
                            <div className="blocked-name-date-group">
                                <h5>Name</h5>
                                <h5>Blocked on: dd/mm/yyyy</h5>
                            </div>
                        </div>
                        <img className="unblock-icon" src={unblock} alt="Unblock this user" />
                    </div>
                    <div className="blocked-container blocked-list cell">
                        <div className="blocked-container blocked-list cell blocked-img-name-group">
                            <img className="blocked-img" src={imgplaceholder} alt="User photo" />
                            <div className="blocked-name-date-group">
                                <h5>Name</h5>
                                <h5>Blocked on: dd/mm/yyyy</h5>
                            </div>
                        </div>
                        <img className="unblock-icon" src={unblock} alt="Unblock this user" />
                    </div>
                    <div className="blocked-container blocked-list cell">
                        <div className="blocked-container blocked-list cell blocked-img-name-group">
                            <img className="blocked-img" src={imgplaceholder} alt="User photo" />
                            <div className="blocked-name-date-group">
                                <h5>Name</h5>
                                <h5>Blocked on: dd/mm/yyyy</h5>
                            </div>
                        </div>
                        <img className="unblock-icon" src={unblock} alt="Unblock this user" />
                    </div>
                    <div className="blocked-container blocked-list cell">
                        <div className="blocked-container blocked-list cell blocked-img-name-group">
                            <img className="blocked-img" src={imgplaceholder} alt="User photo" />
                            <div className="blocked-name-date-group">
                                <h5>Name</h5>
                                <h5>Blocked on: dd/mm/yyyy</h5>
                            </div>
                        </div>
                        <img className="unblock-icon" src={unblock} alt="Unblock this user" />
                    </div>
                </div>
            </div>
            }
            { showSettings &&
                <Settings />
            }
        </div>
    )
};

export default BlockedUsers;
