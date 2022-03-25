import './Settings.scss';

import imgplaceholder from '../../assets/profilecell/avatar-placeholder.png';
import edit from '../../assets/navbar/editprofile.png';
import rightarrow from '../../assets/right-arrow.png';

const Settings = () => {

    return (
        <div className="settings-block">
            <div className="settings-container">
                <div className="settings-container header-tab">
                    <h2>Settings</h2>
                </div>
                <div className="settings-container profile-tab">
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
                        <div className="settings-container account-tab email">
                            <h3>Email</h3>
                            <img src={rightarrow} alt="Go to email settings" />
                        </div>
                        <div className="settings-container account-tab password">
                            <h3>Password</h3>
                            <img src={rightarrow} alt="Go to password settings" />
                        </div>
                    </div>
                    <div className="settings-container privacy-tab">
                        <div className="settings-container privacy-tab header">
                            <h3>Privacy</h3>
                        </div>
                        <div className="settings-container privacy-tab blocked-users">
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
        </div>
    )
};

export default Settings;
