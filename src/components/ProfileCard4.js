// src/components/ProfileCard4.js
import React, { useState } from 'react';
import Highlights4 from './Highlights4';
import './ProfileCard4.css';

const ProfileCard4 = () => {
    const [showHighlights, setShowHighlights] = useState(false);

    const handleKnowMoreClick = () => {
        setShowHighlights(!showHighlights);
    };

    return (
        <div className="profile-container">
            <div className="profile-card">
                <div className="profile-pic">
                    <img src="/person4.jpg" alt="Person 4" />
                </div>
                <div className="profile-info">
                    <h2>Arjun</h2>
                    <p className="subtitle">Cybersecurity Specialist | Ethical Hacker</p>
                    <p><strong>Nick Name</strong>: sec_guru</p>
                    <p><strong>Followers</strong>: 180</p>
                    <p><strong>Interaction</strong>: 90</p>
                    <div className="about">
                        <p>An ethical hacker with expertise in penetration testing and network security, passionate about protecting data.</p>
                        <button className="know-more" onClick={handleKnowMoreClick}>
                            {showHighlights ? "Hide Highlights" : "Know more"}
                        </button>
                    </div>
                </div>
            </div>
            {showHighlights && <Highlights4 onClose={() => setShowHighlights(false)} />}
        </div>
    );
};

export default ProfileCard4;
