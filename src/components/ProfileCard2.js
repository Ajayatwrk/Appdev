// src/components/ProfileCard2.js
import React, { useState } from 'react';
import Highlights2 from './Highlights2';
import './ProfileCard2.css';
import p2 from './person2.jpg';
const ProfileCard2 = () => {
    const [showHighlights, setShowHighlights] = useState(false);

    const handleKnowMoreClick = () => {
        setShowHighlights(!showHighlights);
    };

    return (
        <div className="profile-container">
            <div className="profile-card">
                <div className="profile-pic">
                    <img src={p2} alt="Person 2" />
                </div>
                <div className="profile-info">
                    <h2>Jesee</h2>
                    <p className="subtitle">Data Scientist | ML Engineer</p>
                    <p><strong>Nick Name</strong>: data_wiz</p>
                    <p><strong>Followers</strong>: 150</p>
                    <p><strong>Interaction</strong>: 70</p>
                    <div className="about">
                        <p>An experienced data scientist focused on machine learning and predictive analytics. Loves working with large datasets.</p>
                        <button className="know-more" onClick={handleKnowMoreClick}>
                            {showHighlights ? "Hide Highlights" : "Know more"}
                        </button>
                    </div>
                </div>
            </div>
            {showHighlights && <Highlights2 onClose={() => setShowHighlights(false)} />}
        </div>
    );
};

export default ProfileCard2;
