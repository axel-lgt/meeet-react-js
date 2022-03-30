import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './ProfileCell.scss';

import imgplaceholder from '../../assets/profilecell/avatar-placeholder.png';
import connected from '../../assets/profilecell/connected.svg';
import addedfav from '../../assets/profilecell/added-favorite.png';
import notfavorite from '../../assets/profilecell/not-added-favorite.png';

const ProfileCell = () => {

    const [isDesktop, setDesktop] = useState(window.innerWidth > 1200);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 1200);
    }

    useEffect(() => {
        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
    })
    
    return(
    <div className="profile-cell-container">
            {isDesktop &&
            <Link to="/home/profileinfo"> 
            <div className="profile-cell-container cell">
                <div>
                    <img className="profile-cell-container cell profile-picture" src={imgplaceholder} alt="Image placeholder" />
                </div>
                <div className="profile-cell-container top">
                    <img className="profile-cell-container top added-fav" src={addedfav} alt="Added to favorites" />
                    <div className="profile-cell-container top gradient">
                        <div className="profile-cell-container top gradient-container">
                            <div className="profile-cell-container top gradient-container-group">
                                <div className="profile-cell-container top gradient-container-group name-connected-group">
                                    <h3>Name, age</h3>
                                    <img className="profile-cell-container top gradient-container-group name-connected-group connected" src={connected} alt="User connected" />
                                </div>
                                <h3>165m away</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Link>
            }
            {!isDesktop &&
            <Link to="/profileinfo"> 
            <div className="profile-cell-container cell">
                <div>
                    <img className="profile-cell-container cell profile-picture" src={imgplaceholder} alt="Image placeholder" />
                </div>
                <div className="profile-cell-container top">
                    <img className="profile-cell-container top added-fav" src={addedfav} alt="Added to favorites" />
                    <div className="profile-cell-container top gradient">
                        <div className="profile-cell-container top gradient-container">
                            <div className="profile-cell-container top gradient-container-group">
                                <div className="profile-cell-container top gradient-container-group name-connected-group">
                                    <h3>Name, age</h3>
                                    <img className="profile-cell-container top gradient-container-group name-connected-group connected" src={connected} alt="User connected" />
                                </div>
                                <h3>165m away</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Link>
            }
    </div>
    )
};

export default ProfileCell;
