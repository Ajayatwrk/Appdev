// src/components/ProfileCard3.js
import React, { useState } from 'react';
import Highlights3 from './Highlights3';
import './ProfileCard3.css';

const ProfileCard3 = () => {
    const [showHighlights, setShowHighlights] = useState(false);

    const handleKnowMoreClick = () => {
        setShowHighlights(!showHighlights);
    };

    return (
        <div className="profile-container">
            <div className="profile-card">
                <div className="profile-pic">
                    <img src="/person3.jpg" alt="Person 3" />
                </div>
                <div className="profile-info">
                    <h2>jake</h2>
                    <p className="subtitle">UX/UI Designer | Visual Artist</p>
                    <p><strong>Nick Name</strong>: design_queen</p>
                    <p><strong>Followers</strong>: 200</p>
                    <p><strong>Interaction</strong>: 80</p>
                    <div className="about">
                        <p>A creative UX/UI designer passionate about crafting seamless user experiences and impactful visuals.</p>
                        <button className="know-more" onClick={handleKnowMoreClick}>
                            {showHighlights ? "Hide Highlights" : "Know more"}
                        </button>
                    </div>
                </div>
            </div>
            {showHighlights && <Highlights3 onClose={() => setShowHighlights(false)} />}
        </div>
    );
};

export default ProfileCard3;
