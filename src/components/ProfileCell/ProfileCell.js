import './ProfileCell.scss';

import imgplaceholder from '../../assets/profilecell/avatar-placeholder.png';
import connected from '../../assets/profilecell/connected.png'
import addedfav from '../../assets/profilecell/added-favorite.png'
import notfavorite from '../../assets/profilecell/not-added-favorite.png'

const ProfileCell = () => (
    <div className="profile-cell-container">
        <div className="profile-cell-container background ">
            <img className="profile-cell-container background profile-picture" src={imgplaceholder} alt="Image placeholder" />
            <div className="profile-cell-container top">
                <img className="profile-cell-container top added-fav" src={addedfav} alt="Added to favorites" />
                <div className="profile-cell-container top gradient">
                    <div className="profile-cell-container top gradient-group">
                        <div className="profile-cell-container top gradient-group name-connected-group">
                            <h3>Name, age</h3>
                            <img className="profile-cell-container top gradient-group name-connected-group connected" src={connected} alt="User connected" />
                        </div>
                        <h3>165m away</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default ProfileCell;
