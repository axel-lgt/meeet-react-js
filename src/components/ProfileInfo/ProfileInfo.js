import './ProfileInfo.scss';

import imgplaceholder from '../../assets/profilecell/avatar-placeholder.png';
import connected from '../../assets/profilecell/connected.svg';
import addedfav from '../../assets/profilecell/added-favorite.png';
import notfavorite from '../../assets/profilecell/not-added-favorite.png';

const ProfileInfo = () => {

    return (
        <div className="profile-info-container">
            <div className="profile-info-container image">
                <div className="profile-info-container image profile-picture">
                    <img src={imgplaceholder} alt="User avatar" />
                </div>
                <div className="profile-info-container top">
                    <div className="profile-info-container top gradient">
                        <div className="profile-info-container top gradient-group">
                            <div className="profile-info-container top gradient-group name-connected-group">
                                 <h3>Name, age</h3>
                                <img className="profile-info-container top gradient-group name-connected-group connected" src={connected} alt="User connected" />
                            </div>
                            {/* <h3>last connected ...min ago</h3> */}
                            <h3>165m away</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile-info-container bottom">
                <div className="profile-info-container bottom info"></div>
            </div>
        </div>
    )
};

export default ProfileInfo;
