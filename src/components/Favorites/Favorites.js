
import './Favorites.scss';

const Favorites = () => {

    return(
        <div className="favorites-block">
            <div className="favorites-container">
                <div className="favorites-header-tab">
                    <h2>Favorites</h2>
                </div>
                <div className="favorites-description">
                    <p>The users you'll add to your favorites by clicking on the 💜 will be displayed here.</p>
                </div>
                <div className="favorites-grid">
                    <div className="favorites-cell">
                        {/* <div className="fav-photo"></div> */}
                    </div>
                    <div className="favorites-cell">
                    </div>
                    <div className="favorites-cell">
                    </div>
                    <div className="favorites-cell">
                    </div>
                    <div className="favorites-cell">
                    </div>
                    <div className="favorites-cell">
                    </div>
                    <div className="favorites-cell">
                    </div>
                    <div className="favorites-cell">
                    </div>
                    <div className="favorites-cell">
                    </div>
                    <div className="favorites-cell">
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Favorites;
