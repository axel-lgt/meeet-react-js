import { useNavigate } from 'react-router-dom';

import './Conversation.scss';

import imgplaceholder from '../../../assets/profilecell/avatar-placeholder.png';
import backarrow from '../../../assets/mobile/mobile-back-arrow.svg';
import connected from '../../../assets/profilecell/connected.svg';
import block from '../../../assets/profilecell/block.svg';
import sendmessage from '../../../assets/send-message.png';

const Conversation = () => {

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }
    
    return(
        <div className="conversation-block">
            <div className="conversation-container">
                <div className="conversation-header-tab">
                    <div className="back-arrow">
                        <img src={backarrow} alt="Return to messages" onClick={handleGoBack} />
                    </div>
                    <div className="userphoto-username-age-group">
                        <img src={imgplaceholder} alt="" />
                        <h2>Name, </h2>
                        <h2>age</h2>
                    </div>
                    <div className="connected-block-group">
                        <div className="connected-last-seen">
                            <img src={connected} alt="User is connected" />
                            {/* <h3>...h ago</h3> */}
                        </div>
                        <img className="block-img" src={block} alt="Block this user" />
                    </div>
                </div>
                <div className="conversation-content">
                    <div className="user-message">
                        <div className="user-message-content">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat nostrum cum porro dolores, reprehenderit corrupti maiores eum consequatur quis soluta non eligendi laudantium incidunt, enim voluptatum, excepturi architecto possimus quos.</p>
                        </div>
                        <span>date</span>
                    </div>
                    <div className="contact-message">
                        <div className="contact-message-content">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat nostrum cum porro dolores, reprehenderit corrupti maiores eum consequatur quis soluta non eligendi laudantium incidunt, enim voluptatum, excepturi architecto possimus quos.</p>
                        </div>
                        <span>date</span>
                    </div>
                    <div className="user-message">
                        <div className="user-message-content">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat nostrum cum porro dolores, reprehenderit corrupti.</p>
                        </div>
                        <span>date</span>
                    </div>
                    <div className="contact-message">
                        <div className="contact-message-content">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit..</p>
                        </div>
                        <span>date</span>
                    </div>
                </div>
                <div className="conversation-input">
                    <input type="text" placeholder="Type your message..." />
                    <img src={sendmessage} alt="Send your message" />
                </div>
            </div>
        </div>
    )
};

export default Conversation;
