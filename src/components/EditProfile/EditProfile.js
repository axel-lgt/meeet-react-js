import './EditProfile.scss';

import backarrow from '../../assets/mobile/mobile-back-arrow.svg';
import imgplaceholder from '../../assets/profilecell/avatar-placeholder.png';
import imgupload from '../../assets/profilecell/image-upload.png';

const EditProfile = () => (
    <div className="edit-profile-block">
        <div className="edit-profile-container">
            <div className="edit-profile-container header-tab">
                <div className="edit-profile-container header-tab back-arrow">
                    <img src={backarrow} alt="Return to last page" />
                </div>
                <h2>Edit profile</h2>
            </div>
            <div className="edit-profile-container picture-gallery-container">
                <div className="edit-profile-container picture-gallery">
                    <div className="edit-profile-container pic1">
                        <img src={imgplaceholder} alt="" />
                        <div className="edit-profile-container imgupload">
                            <img src={imgupload} alt="" />
                        </div>
                    </div>
                    <div className="edit-profile-container pic2">
                        <img src={imgplaceholder} alt="" />
                    </div>
                    <div className="edit-profile-container pic3">
                        <img src={imgplaceholder} alt="" />
                    </div>
                    <div className="edit-profile-container pic4">
                        <img src={imgplaceholder} alt="" />
                    </div>
                    <div className="edit-profile-container pic5">
                        <img src={imgplaceholder} alt="" />
                    </div>
                </div>
            </div>
            <div className="edit-profile-container name-age-header">
                <h3 className="edit-profile-container name-age-header name">Name</h3>
                <h3 className="edit-profile-container name-age-header age">, age</h3>
            </div>
            <div className="edit-profile-container info-block info">
                <div className="edit-profile-container info-block info description">
                    <h4>Description</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eaque tempora dignissimos quo omnis, est id ut esse quia nihil quis architecto amet iure repudiandae maiores mollitia saepe corrupti accusantium!</p>
                </div>
                <div className="edit-profile-container info-block info interests">
                    <h4>What are my interests?</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptate natus voluptatum, deleniti autem nobis nemo, tempora molestias doloribus eos et eum ea unde earum consectetur eligendi laboriosam magnam eaque.</p>
                </div>
                <div className="edit-profile-container info-block info table">
                    <h4>Information</h4>
                    <div className="edit-profile-container info-block info table-details">
                        <div className="edit-profile-container info-block info table-details row height">
                            <h5>Height</h5>
                            <span>165cm</span>
                        </div>
                        <div className="edit-profile-container info-block info table-details row weight">
                            <h5>Weight</h5>
                            <span>56kg</span>
                        </div>
                        <div className="edit-profile-container info-block info table-details row ethnicity">
                            <h5>Ethnicity</h5>
                            <span>Latina</span>
                        </div>
                        <div className="edit-profile-container info-block info table-details row gender">
                            <h5>Gender</h5>
                            <span>Cis woman</span>
                        </div>
                        <div className="edit-profile-container info-block info table-details row pronouns">
                            <h5>Pronouns</h5>
                            <span>She/They</span>
                        </div>
                        <div className="edit-profile-container info-block info table-details row lookingfor">
                            <h5>Looking for</h5>
                            <span>Relationships</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default EditProfile;
