import React from 'react';

import './Menu.scss';

import edit from '../../assets/navbar/editprofile.png';
import favorites from '../../assets/navbar/favorites.png'; 
import messages from '../../assets/navbar/messages.png';
import seenby from '../../assets/navbar/seenby.png'; 
import settings from '../../assets/navbar/settings.png';
import meeet from '../../assets/meeet-logo.svg';

const Menu = () => (
    <div className="menu">
        <section className="menu-desktop">
            <div className="menu-desktop-top-group">
                <div className="menu-desktop-top-group-user">
                    <div className="menu-desktop-top-group-user-avatar"></div>
                    <h6>James</h6>
                </div>
                <div className="menu-desktop-top-group-tab">
                    <img className="menu-desktop-top-group-tab-edit" src={edit} alt="" />
                    <img className="menu-desktop-top-group-tab-fav" src={favorites} alt="Favorites icon" />
                    <img className="menu-desktop-top-group-tab-seenby" src={seenby} alt="Seen by icon" />
                    <img className="menu-desktop-top-group-tab-msg" src={messages} alt="Messages icon" />
                    <img className="menu-desktop-top-group-tab-settings" src={settings} alt="Settings icon" />
                </div>
            </div>
            <img className="menu-desktop-meeet" src={meeet} alt="Meeet logo" />
        </section>

        <section className="menu-mobile">
            <img className="menu-mobile-fav" src={favorites} alt="Favorites icon" />
            <img className="menu-mobile-seenby" src={seenby} alt="Seen by icon" />
            <img className="menu-mobile-meeet" src={meeet} alt="Meeet logo" />
            <img className="menu-mobile-msg" src={messages} alt="Messages icon" />
            <img className="menu-mobile-settings" src={settings} alt="Settings icon" />
        </section>
    </div>
);

export default Menu;