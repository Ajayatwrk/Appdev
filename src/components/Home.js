import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Home.css';
import homeIcon from './home.png';
import profileIcon from './profile.png';
import communityIcon from './community.png';
import profilePic from './person4.jpg';
import logo from './logo.png';
import gemini from './gemini.png';
import google_privacy from './google_privacy.png';
import github from './github.png';
const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className='home-container'>
      <div className='home-navbar'>
        <div className="home-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="home-navbar-name">V-SYNC</div>
        <input type="text" className="home-search-bar" placeholder="Search..." />

        <div className="home-navbar-icons">
          <Link to="/Home" className={`home-icon ${location.pathname === '/Home' ? 'active' : ''}`}>
            <img src={homeIcon} alt="Icon1" />
          </Link>
          <Link to="/community" className={`home-icon ${location.pathname === '/community' ? 'active' : ''}`}>
            <img src={communityIcon} alt="Icon2" />
          </Link>
          <Link to="/Profile" className={`home-icon ${location.pathname === '/Profile' ? 'active' : ''}`}>
            <img src={profileIcon} alt="Icon3" />
          </Link>
        </div>

        <div className="home-user-profile">
          <span className="home-user-name">Vikram</span>
          <div className="home-profile-pic">
            <img src={profilePic} alt="Profile" />
          </div>
        </div>

        <a href="#about" className="home-about-link">About Us</a>
      </div>

      <div className='home-content'>
        <button className='home-sync-button' onClick={() => navigate('/map')}>Sync</button>
        <div className='home-feeds'>
          {/* Feed Card 1 */}
          <div className='home-feed'>
            <img src={github} alt="Feed Image 1" className="feed-image" />
            <div className="feed-text">Feed 1</div>
          </div>
          
          {/* Feed Card 2 */}
          <div className='home-feed'>
            <img src={gemini} alt="Feed Image 2" className="feed-image" />
            <div className="feed-text">Feed 2</div>
          </div>
          
          {/* Feed Card 3 */}
          <div className='home-feed'>
            <img src={google_privacy} alt="Feed Image 3" className="feed-image" />
            <div className="feed-text">Feed 3</div>
          </div>
          
          {/* Additional feed cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default Home;
