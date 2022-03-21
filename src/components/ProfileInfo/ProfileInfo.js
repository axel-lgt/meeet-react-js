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
                                        <h3>Name, age</h3>
                                        <img className="profile-info-container image profile-picture overlay gradient-group name-connected-group connected" src={connected} alt="User connected" />
                                    </div>
                                    <h3>last seen 10min ago</h3>
                                    <h3>165m away</h3>
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
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor praesentium, cum nesciunt molestias, ipsam tempora laudantium libero ut perferendis mollitia officia voluptas nulla vel eaque ex quia doloribus, deserunt dicta?
                    Delectus vel fugiat saepe sed, nemo ipsa architecto! Omnis, tempora iste dignissimos vero laboriosam dicta vel ullam blanditiis atque fugit enim adipisci quo alias magni expedita velit, aperiam officiis ab?
                    Optio veniam atque numquam rem maiores. Ipsam, vero blanditiis mollitia nulla sapiente laboriosam, nam sint atque, nobis facere incidunt? Nobis ipsa minus molestias, aperiam deleniti aliquid voluptatem excepturi culpa iure!</div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptate natus voluptatum, deleniti autem nobis nemo, tempora molestias doloribus eos et eum ea unde earum consectetur eligendi laboriosam magnam eaque.</div>
                    <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias earum labore quaerat officia ratione corrupti a aperiam, vel obcaecati expedita illum recusandae error similique nostrum possimus quod repellendus ipsam itaque!</div>
                </div>
            </div>
        </div>
    )
};

export default ProfileInfo;
