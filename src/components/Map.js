// src/components/Map.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Map.css';
import Header from './Header'; // Import Header
import p1 from './person1.jpg';
import p2 from './person2.jpg';
import p3 from './person3.jpg';
import p4 from './person4.jpg';

const Map = () => {
    return (
        <div className="map-container">
            <Header />  {/* Include the Header component */}

            <div className="map">
                <Link to="/ProfileCard1" className="map-icon" style={{ top: '20%', left: '25%' }}>
                    <img src={p1} alt="Person 1" />
                </Link>
                <Link to="/ProfileCard2" className="map-icon" style={{ top: '50%', left: '40%' }}>
                    <img src={p2} alt="Person 2" />
                </Link>
                <Link to="/ProfileCard3" className="map-icon" style={{ top: '30%', left: '60%' }}>
                    <img src={p3} alt="Person 3" />
                </Link>
                <Link to="/ProfileCard4" className="map-icon" style={{ top: '70%', left: '75%' }}>
                    <img src={p4} alt="Person 4" />
                </Link>
            </div>
        </div>
    );
};

export default Map;
