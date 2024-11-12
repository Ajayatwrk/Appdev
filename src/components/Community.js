import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CardContainer from './CardContainer';
import CombinedMessageCard from './CombinedMessageCard';
import './Community.css';

// Image Imports
import homeIcon from './home.png';
import profileIcon from './profile.png';
import communityIcon from './community.png';
import profilePic from './person4.jpg';
import logo from './logo.png';
import p1 from './person1.jpg';
import p2 from './person2.jpg';
import p3 from './person3.jpg';
import p4 from './person5.jpg';

const Community = () => {
  const [bannerImage, setBannerImage] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [showCardContainer, setShowCardContainer] = useState(true);

  useEffect(() => {
    const savedBannerImage = localStorage.getItem('bannerImage');
    const savedProfileImage = localStorage.getItem('profileImage');
    if (savedBannerImage) setBannerImage(savedBannerImage);
    if (savedProfileImage) setProfileImage(savedProfileImage);
  }, []);

  const handleBannerImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const bannerURL = URL.createObjectURL(file);
      setBannerImage(bannerURL);
      localStorage.setItem('bannerImage', bannerURL);
    }
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const profileURL = URL.createObjectURL(file);
      setProfileImage(profileURL);
      localStorage.setItem('profileImage', profileURL);
    }
  };

  const location = useLocation();

  const handleButtonClick = (type) => {
    if (type === 'cardContainer') {
      setShowCardContainer(true);
    } else if (type === 'messageCard') {
      setShowCardContainer(false);
    }
  };

  return (
    <div className="community-container">
      <div className="navbar">
        <div className="home-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="navbar-name">V-SYNC</div>
        <input type="text" className="search-bar" placeholder="Search..." />
        <div className="navbar-icons">
          <Link to="/Home" className={`icon ${location.pathname === '/Home' ? 'active' : ''}`}>
            <img src={homeIcon} alt="Home Icon" />
          </Link>
          <Link to="/community" className={`icon ${location.pathname === '/community' ? 'active' : ''}`}>
            <img src={communityIcon} alt="Community Icon" />
          </Link>
          <Link to="/Profile" className={`icon ${location.pathname === '/Profile' ? 'active' : ''}`}>
            <img src={profileIcon} alt="Profile Icon" />
          </Link>
        </div>

        <div className="user-profile">
          <span className="user-name">User Name</span>
          <div className="profile-pic">
            <img src={profilePic} alt="Profile" />
          </div>
        </div>
        <a href="#about" className="about-link">About Us</a>
      </div>

      <div className="banner-container">
        <input
          type="file"
          id="bannerImage"
          accept="image/*"
          onChange={handleBannerImageChange}
          style={{ display: 'none' }}
        />
        <label htmlFor="bannerImage" className="banner-label">
          {bannerImage ? (
            <img src={bannerImage} alt="Banner" className="banner-image" />
          ) : (
            <div className="banner-placeholder">Upload Banner</div>
          )}
        </label>

        <input
          type="file"
          id="profileImage"
          accept="image/*"
          onChange={handleProfileImageChange}
          style={{ display: 'none' }}
        />
        <label htmlFor="profileImage" className="pic-label">
          <div
            className="pic"
            style={{
              backgroundImage: `url(${profileImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {!profileImage && 'Upload Profile'}
          </div>
        </label>
      </div>

      <div className="small-card">
        <button className="small-card-button" onClick={() => handleButtonClick('cardContainer')}>
          Community
        </button>
        <button className="small-card-button" onClick={() => handleButtonClick('messageCard')}>
          Messages
        </button>
      </div>

      {showCardContainer ? <CardContainer /> : <CombinedMessageCard />}

      <div className="sidebar">
        <div className="sidebar-header">
          <p>Vikram</p>
          <p>Followers: 220</p>
          <p>Interactions: 134</p>
          <p>Highlights: 5</p>
        </div>
        <div className="sidebar-content">
          <p>Bio: Tech enthusiast, always learning new things!</p>
        </div>
      </div>

      <div className="right-sidebar">
        <div className="circle-img">
          <img src={p1} alt="Right Sidebar User 1" />
        </div>
        <div className="circle-img">
          <img src={p2} alt="Right Sidebar User 2" />
        </div>
        <div className="circle-img">
          <img src={p3} alt="Right Sidebar User 3" />
        </div>
        <div className="circle-img">
          <img src={p4} alt="Right Sidebar User 4" />
        </div>
      </div>
    </div>
  );
};

export default Community;
