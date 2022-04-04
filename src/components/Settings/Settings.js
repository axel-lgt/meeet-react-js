import { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom'

import './Settings.scss';

import imgplaceholder from '../../assets/profilecell/avatar-placeholder.png';
import edit from '../../assets/navbar/editprofile.png';
import rightarrow from '../../assets/right-arrow.png';

const Settings = () => {

    const [isDesktop, setDesktop] = useState(window.innerWidth > 1200);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 1200);
    }

    useEffect(() => {
        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
    })

    return (
        <div className="settings-block">
            { !isDesktop && 
            <div className="settings-container">
                <div className="settings-container header-tab">
                    <h2>Settings</h2>
                </div>
                <Link to="/settings/editprofile">
                    <div className="settings-container profile-tab">
                        <img src={imgplaceholder} alt="Your profile picture" />
                        <div className="settings-container profile-tab name-edit-profile-group">
                            <h3>Name</h3>
                            <h3>Edit profile</h3>
                        </div>
                        <img className="edit-icon" src={edit} alt="Edit profile" />
                    </div>
                </Link>
                <div className="movable">
                    <div className="settings-container movable account-tab">
                        <div className="settings-container movable account-tab header">
                            <h3>Account</h3>
                        </div>
                        <Link to="/settings/email">
                            <div className="settings-container movable account-tab email">
                                <h3>Email</h3>
                                <img src={rightarrow} alt="Go to email settings" />
                            </div>
                        </Link>
                        <Link to="/settings/password">
                            <div className="settings-container movable account-tab password">
                                <h3>Password</h3>
                                <img src={rightarrow} alt="Go to password settings" />
                            </div>
                        </Link>
                    </div>
                    <div className="privacy-btns-group">
                        <div className="settings-container movable privacy-tab">
                            <div className="settings-container movable privacy-tab header">
                                <h3>Privacy</h3>
                            </div>
                            <Link to="/settings/blocked">
                                <div className="settings-container movable privacy-tab blocked-users">
                                    <h3>Blocked users</h3>
                                    <img src={rightarrow} alt="Go to blocked users settings" />
                                </div>
                            </Link>
                        </div>
        
                        <div className="settings-container movable logoff-delete-group">
                            <button className="log-off-btn">Log off</button>
                            <button className="delete-account-btn">Delete account</button>
                        </div>
                    </div>
                </div>
            </div>
            }
            { isDesktop && 
            <div className="settings-container">
                <div className="settings-container header-tab">
                    <h2>Settings</h2>
                </div>
                <Link to="/home/settings/editprofile">
                    <div className="settings-container profile-tab">
                        <img src={imgplaceholder} alt="Your profile picture" />
                        <div className="settings-container profile-tab name-edit-profile-group">
                            <h3>Name</h3>
                            <h3>Edit profile</h3>
                        </div>
                        <img className="edit-icon" src={edit} alt="Edit profile" />
                    </div>
                </Link>
                <div className="movable">
                    <div className="settings-container movable account-tab">
                        <div className="settings-container movable account-tab header">
                            <h3>Account</h3>
                        </div>
                        <Link to="/home/settings/email">
                            <div className="settings-container movable account-tab email">
                                <h3>Email</h3>
                                <img src={rightarrow} alt="Go to email settings" />
                            </div>
                        </Link>
                        <Link to="/home/settings/password">
                            <div className="settings-container movable account-tab password">
                                <h3>Password</h3>
                                <img src={rightarrow} alt="Go to password settings" />
                            </div>
                        </Link>
                    </div>
                    <div className="privacy-btns-group">
                        <div className="settings-container movable privacy-tab">
                            <div className="settings-container movable privacy-tab header">
                                <h3>Privacy</h3>
                            </div>
                            <Link to="/home/settings/blocked">
                                <div className="settings-container movable privacy-tab blocked-users">
                                    <h3>Blocked users</h3>
                                    <img src={rightarrow} alt="Go to blocked users settings" />
                                </div>
                            </Link>
                        </div>
        
                        <div className="settings-container movable logoff-delete-group">
                            <button className="log-off-btn">Log off</button>
                            <button className="delete-account-btn">Delete account</button>
                        </div>
                    </div>
                </div>
            </div>
            }
        <Outlet />
        </div>
    )
};

export default Settings;
