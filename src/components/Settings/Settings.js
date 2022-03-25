import { useState } from 'react';

import './Settings.scss';
import EditProfile from '../EditProfile/EditProfile';
import Email from './Email/Email';
import Password from './Password/Password';
import BlockedUsers from './BlockedUsers/BlockedUsers';

import imgplaceholder from '../../assets/profilecell/avatar-placeholder.png';
import edit from '../../assets/navbar/editprofile.png';
import rightarrow from '../../assets/right-arrow.png';

const Settings = () => {
    
    const [showSettings, setShowSettings] = useState(true);
    const [showEditProfile, setShowEditProfile] = useState(false);
    const [showEmailSettings, setShowEmailSettings] = useState(false);
    const [showPasswordSettings, setShowPasswordSettings] = useState(false);
    const [showBlockedSettings, setShowBlockedSettings] = useState(false);

    const editProfileHandler = () => {
        setShowEditProfile(true);
        setShowSettings(false);
    }

    const emailSettingsHandler = () => {
        setShowEmailSettings(true);
        setShowSettings(false);
    }

    const passwordSettingsHandler = () => {
        setShowPasswordSettings(true);
        setShowSettings(false);
    }

    const blockedSettingsHandler = () => {
        setShowBlockedSettings(true);
        setShowSettings(false);
    }

    return (
        <div className="settings-block">
            { showSettings &&
            <div className="settings-container">
                <div className="settings-container header-tab">
                    <h2>Settings</h2>
                </div>
                <div className="settings-container profile-tab" onClick={editProfileHandler}>
                    <img src={imgplaceholder} alt="Your profile picture" />
                    <div className="settings-container profile-tab name-edit-profile-group">
                        <h3>Name</h3>
                        <h3>Edit profile</h3>
                    </div>
                    <img className="edit-icon" src={edit} alt="Edit profile" />
                </div>
                <div className="movable">
                    <div className="settings-container account-tab">
                        <div className="settings-container account-tab header">
                            <h3>Account</h3>
                        </div>
                        <div className="settings-container account-tab email" onClick={emailSettingsHandler}>
                            <h3>Email</h3>
                            <img src={rightarrow} alt="Go to email settings" />
                        </div>
                        <div className="settings-container account-tab password" onClick={passwordSettingsHandler}>
                            <h3>Password</h3>
                            <img src={rightarrow} alt="Go to password settings" />
                        </div>
                    </div>
                    <div className="settings-container privacy-tab">
                        <div className="settings-container privacy-tab header">
                            <h3>Privacy</h3>
                        </div>
                        <div className="settings-container privacy-tab blocked-users" onClick={blockedSettingsHandler}>
                            <h3>Blocked users</h3>
                            <img src={rightarrow} alt="Go to blocked users settings" />
                        </div>
                    </div>
    
                    <div className="settings-container logoff-delete-group">
                        <button className="log-off-btn">Log off</button>
                        <button className="delete-account-btn">Delete account</button>
                    </div>
                </div>
            </div>
            }
            { showEditProfile &&
                <EditProfile />
            }
            { showEmailSettings &&
                <Email />
            }
            { showPasswordSettings &&
                <Password />
            }
            { showBlockedSettings &&
                <BlockedUsers />
            }
        </div>
    )
};

export default Settings;
