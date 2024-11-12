import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Splash.css';
const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    
    setTimeout(() => {
      navigate('/Login');
    }, 50000); 
  }, [navigate]);

  return (
    <div className="splash-container">
      <div className="logo-container">
        <img
          src='logo.png'
          alt="App Logo"
          className="logo"
        />
        <h1 className="app-name">V-SYNC</h1>
      </div>
    </div>
  );
};

export default Splash;
