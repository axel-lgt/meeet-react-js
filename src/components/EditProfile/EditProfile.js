import { useNavigate } from 'react-router-dom';

import './EditProfile.scss';

import backarrow from '../../assets/mobile/mobile-back-arrow.svg';
import imgplaceholder from '../../assets/profilecell/avatar-placeholder.png';
import imgupload from '../../assets/profilecell/image-upload.png';
import cross from '../../assets/profilecell/cross.svg';

const EditProfile = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1)
    }

    const handleCross = () => {
        navigate(-1)
    }
    

    return(
        <div className="edit-profile-block">
            <div className="edit-profile-container">
                <div className="header-tab">
                    <div className="back-arrow">
                        <img className="back-arrow-img" src={backarrow} alt="Return to last page" onClick={handleGoBack} />
                    </div>
                    <div className="modal-cross">
                        <img className="modal-cross-img" src={cross} alt="Close this modal" onClick={handleCross} />
                    </div>
                    <h2>Edit profile</h2>
                </div>
                <div className="picture-gallery-container">
                    <div className="picture-gallery">
                        <div className="pic1">
                            <img src={imgplaceholder} alt="" />
                            <div className="imgupload">
                                <img src={imgupload} alt="" />
                            </div>
                        </div>
                        <div className="pic2">
                            <img src={imgplaceholder} alt="" />
                        </div>
                        <div className="pic3">
                            <img src={imgplaceholder} alt="" />
                        </div>
                        <div className="pic4">
                            <img src={imgplaceholder} alt="" />
                        </div>
                        <div className="pic5">
                            <img src={imgplaceholder} alt="" />
                        </div>
                    </div>
                </div>
                <div className="name-age-header">
                    <h3 className="name-age-header name">Name</h3>
                    <h3 className="name-age-header age">, age</h3>
                </div>
                <div className="info-block">
                    <div className="info description">
                        <h4>Description</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eaque tempora dignissimos quo omnis, est id ut esse quia nihil quis architecto amet iure repudiandae maiores mollitia saepe corrupti accusantium!</p>
                    </div>
                    <div className="info interests">
                        <h4>What are my interests?</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptate natus voluptatum, deleniti autem nobis nemo, tempora molestias doloribus eos et eum ea unde earum consectetur eligendi laboriosam magnam eaque.</p>
                    </div>
                    <div className="info table">
                        <h4>Information</h4>
                        <div className="table-details">
                            <div className="row height">
                                <h5>Height</h5>
                                <span>165cm</span>
                            </div>
                            <div className="row weight">
                                <h5>Weight</h5>
                                <span>56kg</span>
                            </div>
                            <div className="row ethnicity">
                                <h5>Ethnicity</h5>
                                <span>Latina</span>
                            </div>
                            <div className="row gender">
                                <h5>Gender</h5>
                                <span>Cis woman</span>
                            </div>
                            <div className="row pronouns">
                                <h5>Pronouns</h5>
                                <span>She/They</span>
                            </div>
                            <div className="row lookingfor">
                                <h5>Looking for</h5>
                                <span>Relationships</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default EditProfile;
