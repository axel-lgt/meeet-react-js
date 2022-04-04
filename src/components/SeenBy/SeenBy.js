
import './SeenBy.scss';

import imgplaceholder from '../../assets/profilecell/avatar-placeholder.png';
import addedfav from '../../assets/profilecell/added-favorite.png';
import connected from '../../assets/profilecell/connected.svg';

const SeenBy = () => {

    return(
        <div className="seenby-block">
            <div className="seenby-container">
                <div className="seenby-header-tab">
                    <h2>Seen by <em>Nbr</em></h2>
                </div>
                <div className="seenby-description">
                    <p>The users that saw your profile over the last 24 hours will be displayed here.</p>
                </div>
                <div className="seenby-grid">
                    <div className="seenby-cell">
                        <div className="sb-background">
                            <img src={imgplaceholder} alt="" className="sb-background-photo" />
                            <div className="sb-overlay">
                                <div className="sb-top">
                                    <h3>33 min ago</h3>
                                    <img src={addedfav} alt="" className="sb-added-fav-icon" />
                                </div>
                                <div className="sb-gradient">
                                    <div className="sb-name-age-connected">
                                    <h3>Name,</h3>
                                    <h3>age</h3>
                                    <img src={connected} alt="" className="sb-connected" />
                                    </div>
                                    <h3>123m away</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="seenby-cell">
                        <div className="sb-background">
                            <img src={imgplaceholder} alt="" className="sb-background-photo" />
                            <div className="sb-overlay">
                                <div className="sb-top">
                                    <h3>33 min ago</h3>
                                    <img src={addedfav} alt="" className="sb-added-fav-icon" />
                                </div>
                                <div className="sb-gradient">
                                    <div className="sb-name-age-connected">
                                    <h3>Name,</h3>
                                    <h3>age</h3>
                                    <img src={connected} alt="" className="sb-connected" />
                                    </div>
                                    <h3>123m away</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SeenBy;
