import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();  // Get the navigate function

  return (
    <div className='home-container'>
      <div className='home-navbar'>
        <div className="home-logo">Logo</div>
        <div className="home-navbar-name">Website Name</div>
        <input type="text" className="home-search-bar" placeholder="Search..." />
        
        <div className="home-navbar-icons">
          <Link to="/Home" className={`home-icon ${location.pathname === '/Home' ? 'active' : ''}`}>Icon1</Link>
          <Link to="/community" className={`home-icon ${location.pathname === '/community' ? 'active' : ''}`}>Icon2</Link>
          <Link to="/Profile" className={`home-icon ${location.pathname === '/Profile' ? 'active' : ''}`}>Icon3</Link>
        </div>

        <div className="home-user-profile">
          <span className="home-user-name">User Name</span>
          <div className="home-profile-pic"></div>
        </div>

        <a href="#about" className="home-about-link">About Us</a>
      </div>

      <div className='home-content'>
        <button className='home-sync-button' onClick={() => navigate('/map')}>Sync</button>
        <div className='home-feeds'>
          <div className='home-feed'>Feed 1</div>
          <div className='home-feed'>Feed 2</div>
          <div className='home-feed'>Feed 3</div>
          <div className='home-feed'>Feed 4</div>
          <div className='home-feed'>Feed 5</div>
          <div className='home-feed'>Feed 6</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
