import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Splash.css';

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    
    setTimeout(() => {
      navigate('/Login');
    }, 5000); 
  }, [navigate]);

  return (
    <div className="splash-container">
      <div className="logo-container">
        <img
          src="public\logo.png"
          alt="App Logo"
          className="logo"
        />
        <h1 className="app-name">App Name</h1>
      </div>
    </div>
  );
};

export default Splash;