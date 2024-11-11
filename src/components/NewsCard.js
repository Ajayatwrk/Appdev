// src/components/NewsCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './NewsCard.css';

const NewsCard = ({ image, title, date, source, description }) => {
    const navigate = useNavigate(); // Initialize navigate function

    const handleSyncClick = () => {
        navigate('/map'); // Redirect to the map page
    };

    return (
        <div className="news-card">
            <img src={image} alt={title} className="news-image" />
            <div className="news-content">
                <p className="news-source">by {source} • {date}</p>
                <h3 className="news-title">{title}</h3>
                <p className="news-description">{description}</p>
                <button className="sync-button" onClick={handleSyncClick}>
                    Sync
                </button>
            </div>
        </div>
    );
};

export default NewsCard;
