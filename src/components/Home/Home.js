import { Outlet } from 'react-router-dom';

import ProfileCell from '../ProfileCell/ProfileCell';
import filter from '../../assets/filters/filter.png';
import unchecked from '../../assets/filters/unchecked.svg';
import checked from '../../assets/filters/checked.svg';

import imgplaceholder from '../../assets/profilecell/avatar-placeholder.png';
import connected from '../../assets/profilecell/connected.svg';
import addedfav from '../../assets/profilecell/added-favorite.png';

import './Home.scss';

const Home = () => {

    

    return(
        <>
        <div className="home-container">
            <div className="left">
                <h1>Hi <em>James</em>! You are currently located in <em>Paris</em>.</h1>
                <div className="map-reduced"></div>
                <div className="profiles-grid">
                    <ProfileCell />
                </div>
            </div>
            <div className="right">
                <div className="filters">
                    <div className="filters-top">
                        <img src={filter} alt="Filter icon" />
                        <h4>Filters</h4>
                    </div>

                    <div className="filters-main">
                        <div className="filter age">
                            <img src={checked} alt="Checked filter icon" />
                            <span>Age: <b>18</b> to <b>30</b></span>
                        </div>
                        <div className="filter gender">
                            <img src={unchecked} alt="Unchecked filter icon" />
                            <span>Gender</span>
                        </div>
                        <div className="filter looking-for">
                            <img src={checked} alt="Checked filter icon" />
                            <span>Looking for: <b>Relationships</b></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Outlet />
        </>
    )
};

export default Home;
