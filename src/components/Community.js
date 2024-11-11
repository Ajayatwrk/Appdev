import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CardContainer from './CardContainer'; // Importing the new component
import CombinedMessageCard from './CombinedMessageCard'; // Importing the combined message card component
import './Community.css';

const Community = () => {
  const [bannerImage, setBannerImage] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [showCardContainer, setShowCardContainer] = useState(true); // State to toggle between components

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

  // Toggle between CardContainer and CombinedMessageCard
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
        <div className="logo">Logo</div>
        <div className="navbar-name">Website Name</div>
        <input type="text" className="search-bar" placeholder="Search..." />
        <div className="navbar-icons">
          <Link to="/" className={`icon ${location.pathname === '/' ? 'active' : ''}`}>Icon1</Link>
          <Link to="/community" className={`icon ${location.pathname === '/community' ? 'active' : ''}`}>Icon2</Link>
          <Link to="/Profile" className={`icon ${location.pathname === '/Profile' ? 'active' : ''}`}>Icon3</Link>
        </div>
        <div className="user-profile">
          <span className="user-name">User Name</span>
          <div className="profile-pic"></div>
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

      {/* Small card with buttons to toggle between components */}
      <div className="small-card">
        <button
          className="small-card-button"
          onClick={() => handleButtonClick('cardContainer')}
        >
          Community
        </button>
        <button
          className="small-card-button"
          onClick={() => handleButtonClick('messageCard')}
        >
          Messages
        </button>
      </div>

      {/* Conditionally render either the CardContainer or CombinedMessageCard */}
      {showCardContainer ? <CardContainer /> : <CombinedMessageCard />}

      <div className="sidebar">
        <p>Sidebar Content</p>
      </div>

      <div className="right-sidebar">
        <div className="circle-img"></div>
        <div className="circle-img"></div>
        <div className="circle-img"></div>
        <div className="circle-img"></div>
      </div>
    </div>
  );
};

export default Community;
