// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = ({ onSyncClick }) => {
    return (
        <header className="header">
            <div className="logo">V SYNC</div>
            <input type="text" className="search-bar" placeholder="Search Community, Group etc" />
            <div className="nav-icons">
                <span className="icon">🏠</span>
                <span className="icon">💬</span>
                <span className="icon">🔔</span>
                <div className="profile">
                    <span>Vikram</span>
                    <a href="/about" className="about-link">About Us</a>
                </div>
            </div>
            <button className="sync-button" onClick={onSyncClick}>Sync</button>
        </header>
    );
};

export default Header;
