// src/components/Highlights4.js
import React from 'react';
import './Highlights4.css';

const Highlights4 = ({ onClose }) => {
    return (
        <div className="highlights-overlay">
            <div className="highlights">
                <h3>Highlights:</h3>
                <ul>
                    <li>🏆 Certified Ethical Hacker (CEH) with extensive experience.</li>
                    <li>🚀 Conducted security audits for major financial institutions.</li>
                </ul>
                <h4>Visit other People</h4>
                <button className="back-button" onClick={onClose}>BACK</button>
            </div>
        </div>
    );
};

export default Highlights4;
