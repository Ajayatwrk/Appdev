// src/components/Highlights2.js
import React from 'react';
import './Highlights2.css';

const Highlights2 = ({ onClose }) => {
    return (
        <div className="highlights-overlay">
            <div className="highlights">
                <h3>Highlights:</h3>
                <ul>
                    <li>🏆 Published research in AI journals.</li>
                    <li>🚀 Developed high-performing ML models at DataCorp.</li>
                </ul>
                <h4>Visit other People</h4>
                <button className="back-button" onClick={onClose}>BACK</button>
            </div>
        </div>
    );
};

export default Highlights2;
