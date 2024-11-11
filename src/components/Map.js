// src/components/Map.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Map.css';
import Header from './Header'; // Import Header

const Map = () => {
    return (
        <div className="map-container">
            <Header />  {/* Include the Header component */}

            <div className="map">
                <Link to="/ProfileCard1" className="map-icon" style={{ top: '20%', left: '25%' }}>
                    <img src="person1.jpg" alt="Person 1" />
                </Link>
                <Link to="/ProfileCard2" className="map-icon" style={{ top: '50%', left: '40%' }}>
                    <img src="person2.jpg" alt="Person 2" />
                </Link>
                <Link to="/ProfileCard3" className="map-icon" style={{ top: '30%', left: '60%' }}>
                    <img src="person3.jpg" alt="Person 3" />
                </Link>
                <Link to="/ProfileCard4" className="map-icon" style={{ top: '70%', left: '75%' }}>
                    <img src="person4.jpg" alt="Person 4" />
                </Link>
            </div>
        </div>
    );
};

export default Map;
