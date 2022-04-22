import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './ProfileCell.scss';

import imgplaceholder from '../../assets/profilecell/avatar-placeholder.png';
import connected from '../../assets/profilecell/connected.svg';
import addedfav from '../../assets/profilecell/added-favorite.png';
import notfavorite from '../../assets/profilecell/not-added-favorite.png';

const ProfileCell = ({ profile, key }) => {

    const [isDesktop, setDesktop] = useState(window.innerWidth > 1200);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 1200);
    }

    useEffect(() => {
        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
    })

    console.log({profile});


    
    return(
            <div className="profile-cell" key={profile.id}>

                <Link to="/home/profileinfo"> 
                <div className="prf-background">
                    <img src={imgplaceholder} alt="" className="prf-background-photo" />
                    <div className="prf-overlay">
                        <img src={addedfav} alt="" className="prf-added-fav-icon" />
                        <div className="prf-gradient">
                            <div className="prf-name-age-connected">
                            <h3>{profile.name},</h3>
                            <h3>{profile.age}</h3>
                            <img src={connected} alt="" className="prf-connected" />
                            </div>
                            <h3>123m away</h3>
                        </div>
                    </div>
                </div>
                </Link>

                {/* {!isDesktop &&
                <Link to="/profileinfo"> 
                <div className="prf-background">
                    <img src={imgplaceholder} alt="" className="prf-background-photo" />
                    <div className="prf-overlay">
                        <img src={addedfav} alt="" className="prf-added-fav-icon" />
                        <div className="prf-gradient">
                            <div className="prf-name-age-connected">
                            <h3>Name,</h3>
                            <h3>age</h3>
                            <img src={connected} alt="" className="prf-connected" />
                            </div>
                            <h3>123m away</h3>
                        </div>
                    </div>
                </div>
                </Link>
                } */}
            </div>
    )
};

export default ProfileCell;
