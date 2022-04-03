import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './Menu.scss';

import edit from '../../assets/navbar/editprofile.png';
import favorites from '../../assets/navbar/favorites.png'; 
import messages from '../../assets/navbar/messages.png';
import seenby from '../../assets/navbar/seenby.png'; 
import settings from '../../assets/navbar/settings.png';
import meeet from '../../assets/meeet-logo.svg';

const Menu = () => {
 
    return(
        <div className="menu">
            <nav className="menu-desktop">
                <div className="menu-desktop-top-group">
                    <div className="menu-desktop-top-group-user">
                        <div className="menu-desktop-top-group-user-avatar"></div>
                        <h6>James</h6>
                    </div>
                    <div className="menu-desktop-top-group-tab">
                        <NavLink to="/editprofile">
                            <img className="menu-desktop-top-group-tab-edit" src={edit} alt="" />
                        </NavLink>
                        <NavLink to="/favorites">
                            <img className="menu-desktop-top-group-tab-fav" src={favorites} alt="Favorites icon" />
                        </NavLink>
                        <NavLink to="/seenby">
                            <img className="menu-desktop-top-group-tab-seenby" src={seenby} alt="Seen by icon" />
                        </NavLink>
                        <NavLink to="/messages">
                            <img className="menu-desktop-top-group-tab-msg" src={messages} alt="Messages icon" />
                        </NavLink>
                        <NavLink to="/home/settings">
                            <img className="menu-desktop-top-group-tab-settings" src={settings} alt="Settings icon" />
                        </NavLink>
                    </div>
                </div>
                <Link to="/home">
                    <img className="menu-desktop-meeet" src={meeet} alt="Meeet logo" />
                </Link>
            </nav>

            <nav className="menu-mobile">
                <NavLink to="/favorites" className={({ isActive }) => isActive ? 'icon-background' : ''}>
                    <img className="menu-mobile-fav" src={favorites} alt="Favorites icon" />
                </NavLink>
                <NavLink to="/seenby" className={({ isActive }) => isActive ? 'icon-background' : ''}>
                    <img className="menu-mobile-seenby" src={seenby} alt="Seen by icon" />
                </NavLink>
                <Link to="/home">
                    <img className="menu-mobile-meeet" src={meeet} alt="Meeet logo" />
                </Link>
                <NavLink to="/messages" className={({ isActive }) => isActive ? 'icon-background' : ''}>
                    <img className="menu-mobile-msg" src={messages} alt="Messages icon" />
                </NavLink>
                <NavLink to="/settings" className={({ isActive }) => isActive ? 'icon-background' : ''}>
                    <img className="menu-mobile-settings" src={settings} alt="Settings icon" />
                </NavLink>
            </nav>
        </div>
    )
};

export default Menu;