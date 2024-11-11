// src/components/Highlights1.js
import React from 'react';
import './Highlights1.css';

const Highlights1 = ({ onClose }) => {
    return (
        <div className="highlights-overlay">
            <div className="highlights">
                <h3>Highlights:</h3>
                <ul>
                    <li>🏆 Winner of Best Code Quality at DevCon.</li>
                    <li>🚀 Built Scalable Web Applications at TechCorp.</li>
                </ul>
                <h4>Visit other People</h4>
                <button className="back-button" onClick={onClose}>BACK</button>
            </div>
        </div>
    );
};

export default Highlights1;
