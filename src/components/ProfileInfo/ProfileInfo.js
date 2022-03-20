import './ProfileInfo.scss';

import imgplaceholder from '../../assets/profilecell/avatar-placeholder.png';
import connected from '../../assets/profilecell/connected.svg';
import addedfav from '../../assets/profilecell/added-favorite.png';
import notfavorite from '../../assets/profilecell/not-added-favorite.png';
import backarrow from '../../assets/mobile/mobile-back-arrow.svg'
import block from '../../assets/profilecell/block.svg';
import message from '../../assets/profilecell/message.svg';
import dots from '../../assets/profilecell/three-dots.svg';

const ProfileInfo = () => {

    return (
        <div className="profile-info-container">
            <div className="profile-info-container image">
                <div className="profile-info-container image profile-picture">
                    <img src={imgplaceholder} alt="User avatar" />
                </div>
                <div className="profile-info-container overlay">
                    <div className="profile-info-container overlay gradient">
                        <div className="profile-info-container overlay gradient-group">
                            <div className="profile-info-container overlay gradient-group back-arrow">
                                <img src={backarrow} alt="Return to last page" />
                            </div>
                            <div className="profile-info-container overlay gradient-group name-connected-distance">
                                <div className="profile-info-container overlay gradient-group name-connected-distance name-connected-group">
                                     <h3>Name, age</h3>
                                    <img className="profile-info-container overlay gradient-group name-connected-group connected" src={connected} alt="User connected" />
                                </div>
                                <h3>last seen 10min ago</h3>
                                <h3>165m away</h3>
                            </div>
                            <div className="profile-info-container overlay gradient-group favorite-blocked-group">
                                <img src={notfavorite} alt="User not added to favorites" />
                                <img src={block} alt="Block user" />
                            </div>
                        </div>
                    </div>
                    <div className="profile-info-container overlay bottom-group">
                        <img src={dots} alt="Amount of pictures" />
                        <img src={message} alt="Message this user" />
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
