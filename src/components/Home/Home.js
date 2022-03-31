import { Outlet } from 'react-router-dom';

import ProfileCell from '../ProfileCell/ProfileCell';
import filter from '../../assets/filters/filter.png';
import unchecked from '../../assets/filters/unchecked.svg';
import checked from '../../assets/filters/checked.svg';
import './Home.scss';

const Home = () => {

    

    return(
        <>
        <div className="home-container">
            <div className="home-container left">
                <h1>Hi <em>James</em>! You are currently located in <em>Paris</em>.</h1>
                <div className="home-container left map-reduced"></div>
                <div className="home-container left profiles-grid">
                    {/* <div className="home-container profiles-grid cell">case</div>
                    <div className="home-container profiles-grid cell">case</div>
                    <div className="home-container profiles-grid cell">case</div>
                    <div className="home-container profiles-grid cell">case</div>
                    <div className="home-container profiles-grid cell">case</div>
                    <div className="home-container profiles-grid cell">case</div>
                    <div className="home-container profiles-grid cell">case</div>
                    <div className="home-container profiles-grid cell">case</div>
                    <div className="home-container profiles-grid cell">case</div>
                    <div className="home-container profiles-grid cell">case</div>
                    <div className="home-container profiles-grid cell">case</div>
                    <div className="home-container profiles-grid cell">case</div> */}
                    <ProfileCell  />
                    
                </div>
            </div>
            <div className="home-container right">
                <div className="home-container right filters">
                    <div className="home-container right filters-top">
                        <img src={filter} alt="Filter icon" />
                        <h4>Filters</h4>
                    </div>

                    <div className="home-container right filters-main">
                        <div className="home-container right filters-main filter age">
                            <img src={checked} alt="Checked filter icon" />
                            <span>Age: <b>18</b> to <b>30</b></span>
                        </div>
                        <div className="home-container right filters-main filter gender">
                            <img src={unchecked} alt="Unchecked filter icon" />
                            <span>Gender</span>
                        </div>
                        <div className="home-container right filters-main filter looking-for">
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
