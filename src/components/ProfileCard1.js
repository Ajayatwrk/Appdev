// src/components/ProfileCard1.js
import React, { useState } from 'react';
import Highlights1 from './Highlights1';
import './ProfileCard1.css';

const ProfileCard1 = () => {
    const [showHighlights, setShowHighlights] = useState(false);

    const handleKnowMoreClick = () => {
        setShowHighlights(!showHighlights);
    };

    return (
        <div className="profile-container">
            <div className="profile-card">
                <div className="profile-pic">
                    <img src="/person1.jpg" alt="Person 1" />
                </div>
                <div className="profile-info">
                    <h2>Pooja</h2>
                    <p className="subtitle">Software Engineer | Full-Stack Developer</p>
                    <p><strong>Nick Name</strong>: dev_guru</p>
                    <p><strong>Followers</strong>: 120</p>
                    <p><strong>Interaction</strong>: 50</p>
                    <div className="about">
                        <p>A full-stack developer with experience in both frontend and backend technologies. Passionate about building scalable applications.</p>
                        <button className="know-more" onClick={handleKnowMoreClick}>
                            {showHighlights ? "Hide Highlights" : "Know more"}
                        </button>
                    </div>
                </div>
            </div>
            {showHighlights && <Highlights1 />}
        </div>
    );
};

export default ProfileCard1;
