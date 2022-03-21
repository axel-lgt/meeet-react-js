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
                    <img className="profile-info-container image profile-picture main-photo" src={imgplaceholder} alt="User avatar" />
                    <div className="profile-info-container image profile-picture overlay">
                        <div className="profile-info-container image profile-picture overlay gradient">
                            <div className="profile-info-container image profile-picture overlay gradient-group">
                                <div className="profile-info-container image profile-picture overlay gradient-group back-arrow">
                                    <img src={backarrow} alt="Return to last page" />
                                </div>
                                <div className="profile-info-container image profile-picture overlay gradient-group name-connected-distance">
                                    <div className="profile-info-container image profile-picture overlay gradient-group name-connected-distance name-connected-group">
                                        <h2>Name, age</h2>
                                        <img className="profile-info-container image profile-picture overlay gradient-group name-connected-group connected" src={connected} alt="User connected" />
                                    </div>
                                    <h2>last seen 10min ago</h2>
                                    <h2>165m away</h2>
                                </div>
                                <div className="profile-info-container image profile-picture overlay gradient-group favorite-blocked-group">
                                    <img src={notfavorite} alt="User not added to favorites" />
                                    <img src={block} alt="Block user" />
                                </div>
                            </div>
                        </div>
                        <div className="profile-info-container image profile-picture overlay bottom-group">
                            <img className="profile-info-container image profile-picture overlay bottom-group dots" src={dots} alt="Amount of pictures" />
                            <img className="profile-info-container image profile-picture overlay bottom-group message" src={message} alt="Message this user" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile-info-container bottom">
                <div className="profile-info-container bottom info">
                    <div className="profile-info-container bottom info description">
                        <h4>Description</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eaque tempora dignissimos quo omnis, est id ut esse quia nihil quis architecto amet iure repudiandae maiores mollitia saepe corrupti accusantium!</p>
                    </div>
                    <div className="profile-info-container bottom info interests">
                        <h4>What are my interests?</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptate natus voluptatum, deleniti autem nobis nemo, tempora molestias doloribus eos et eum ea unde earum consectetur eligendi laboriosam magnam eaque.</p>
                    </div>
                    <div className="profile-info-container bottom info table">
                        <h4>Information</h4>
                        <div className="profile-info-container bottom info table-details">
                            <div className="profile-info-container bottom info table-details row height">
                                <h5>Height</h5>
                                <span>165cm</span>
                            </div>
                            <div className="profile-info-container bottom info table-details row weight">
                                <h5>Weight</h5>
                                <span>56kg</span>
                            </div>
                            <div className="profile-info-container bottom info table-details row ethnicity">
                                <h5>Ethnicity</h5>
                                <span>Latina</span>
                            </div>
                            <div className="profile-info-container bottom info table-details row gender">
                                <h5>Gender</h5>
                                <span>Cis woman</span>
                            </div>
                            <div className="profile-info-container bottom info table-details row pronouns">
                                <h5>Pronouns</h5>
                                <span>She/They</span>
                            </div>
                            <div className="profile-info-container bottom info table-details row lookingfor">
                                <h5>Looking for</h5>
                                <span>Relationships</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProfileInfo;
