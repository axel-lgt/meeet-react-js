import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectAllUsers, fetchUsers } from '../../features/users/usersSlice'

import './ProfileCell.scss';

import imgplaceholder from '../../assets/profilecell/avatar-placeholder.png';
import connected from '../../assets/profilecell/connected.svg';
import addedfav from '../../assets/profilecell/added-favorite.png';
import notfavorite from '../../assets/profilecell/not-added-favorite.png';

const ProfileCell = () => {
    const dispatch = useDispatch();
    const users = useSelector(selectAllUsers)

    const usersStatus = useSelector(state => state.users.status)
    const error = useSelector(state => state.users.error)

    const [isDesktop, setDesktop] = useState(window.innerWidth > 1200);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 1200);
    }

    useEffect(() => {
        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
    })

    useEffect(() => {
        if (usersStatus === 'idle') {
            dispatch(fetchUsers());
        }
    }, [usersStatus, dispatch])

    const renderedUsers = users.map(user => {
        return (
            <div className="profile-cell" key={user.id}>
                <Link to="/home/profileinfo"> 
                <div className="prf-background">
                    <img src={imgplaceholder} alt="" className="prf-background-photo" />
                    <div className="prf-overlay">
                        <img src={addedfav} alt="" className="prf-added-fav-icon" />
                        <div className="prf-gradient">
                            <div className="prf-name-age-connected">
                            <h3>{user.name},</h3>
                            <h3>{user.age}</h3>
                            <img src={connected} alt="" className="prf-connected" />
                            </div>
                            <h3>123m away</h3>
                        </div>
                    </div>
                </div>
                </Link>
            </div>
        )
    })

    
    return(
        <>
            {renderedUsers}
        </>
    )
};

export default ProfileCell;
