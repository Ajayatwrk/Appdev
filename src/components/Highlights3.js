// src/components/Highlights3.js
import React from 'react';
import './Highlights3.css';

const Highlights3 = ({ onClose }) => {
    return (
        <div className="highlights-overlay">
            <div className="highlights">
                <h3>Highlights:</h3>
                <ul>
                    <li>🏆 Won Best UX Design at DesignCon 2022.</li>
                    <li>🚀 Led redesign project for popular e-commerce platform.</li>
                </ul>
                <h4>Visit other People</h4>
                <button className="back-button" onClick={onClose}>BACK</button>
            </div>
        </div>
    );
};

export default Highlights3;
