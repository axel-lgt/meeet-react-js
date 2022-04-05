import { Link, Outlet, useNavigate } from 'react-router-dom';

import './Messages.scss';

import imgplaceholder from '../../assets/profilecell/avatar-placeholder.png';
import cross from '../../assets/profilecell/cross.svg';

const Messages = () => {
    const navigate = useNavigate();

    const handleCross = () => {
        navigate(-1);
    }

    return(
        <div className="messages-block">
            <div className="messages-container">
                <div className="messages-header-tab">
                    <h2>Messages</h2>
                    <div className="modal-cross">
                        <img src={cross} alt="Close messages" onClick={handleCross}/>
                    </div>
                </div>
                <div className="messages-list">
                    <Link to="/home/messages/conversation">
                    <div className="messages-item">
                        <div className="msg-left-group">
                            <img src={imgplaceholder} alt="User profile picture" className="msg-user-photo" />
                            <div className="msg-username-preview-group">
                                <div className="msg-username-notif">
                                    <h3>Name</h3>
                                    <div className="msg-notif">1</div>
                                </div>
                                <h4>Conversation preview...</h4>
                            </div>
                        </div>
                        <span>date</span>
                    </div>
                    </Link>
                    <div className="messages-item">
                        <div className="msg-left-group">
                            <img src={imgplaceholder} alt="User profile picture" className="msg-user-photo" />
                            <div className="msg-username-preview-group">
                                <div className="msg-username-notif">
                                    <h3>Name</h3>
                                </div>
                                <h4>Conversation preview...</h4>
                            </div>
                        </div>
                        <span>date</span>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    )
};

export default Messages;
