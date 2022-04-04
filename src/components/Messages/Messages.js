import './Messages.scss';

import imgplaceholder from '../../assets/profilecell/avatar-placeholder.png';

const Messages = () => {

    return(
        <div className="messages-block">
            <div className="messages-container">
                <div className="messages-header-tab">
                    <h2>Messages</h2>
                </div>
                <div className="messages-list">
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
                </div>
            </div>
        </div>
    )
};

export default Messages;
