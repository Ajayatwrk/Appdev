import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Profile.css';
import ProfileMainBar from './ProfileMainBar'; // Import the reusable Profile MainBar

// Import images for icons and sidebar
import homeIcon from './home.png';
import profileIcon from './profile.png';
import communityIcon from './community.png';
import profilePic from './person4.jpg';
import logo from './logo.png';
import p1 from './person1.jpg';
import p2 from './person2.jpg';
import p3 from './person3.jpg';
import p4 from './person5.jpg';

const Profile = () => {
  const [bannerImage, setBannerImage] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

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

  return (
    <div className="profile-container">
      <div className='profile-navbar'>
        <div className="home-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="profile-navbar-name">V-SYNC</div>
        <input type="text" className="profile-search-bar" placeholder="Search..." />
        <div className="profile-navbar-icons">
          <Link to="/Home" className={`profile-icon ${location.pathname === '/Home' ? 'active' : ''}`}>
            <img src={homeIcon} alt="Home Icon" />
          </Link>
          <Link to="/community" className={`profile-icon ${location.pathname === '/community' ? 'active' : ''}`}>
            <img src={communityIcon} alt="Community Icon" />
          </Link>
          <Link to="/Profile" className={`profile-icon ${location.pathname === '/Profile' ? 'active' : ''}`}>
            <img src={profileIcon} alt="Profile Icon" />
          </Link>
        </div>
        <div className="profile-user-profile">
          <span className="profile-user-name">Vikram</span>
          <div className="profile-profile-pic">
            <img src={profilePic} alt="Profile" />
          </div>
        </div>
        <a href="#about" className="profile-about-link">About Us</a>
      </div>

      <div className="profile-banner-container">
        <input
          type="file"
          id="bannerImage"
          accept="image/*"
          onChange={handleBannerImageChange}
          style={{ display: 'none' }}
        />
        <label htmlFor="bannerImage" className="profile-banner-label">
          {bannerImage ? (
            <img src={bannerImage} alt="Banner" className="profile-banner-image" />
          ) : (
            <div className="profile-banner-placeholder">Upload Banner</div>
          )}
        </label>

        <input
          type="file"
          id="profileImage"
          accept="image/*"
          onChange={handleProfileImageChange}
          style={{ display: 'none' }}
        />
        <label htmlFor="profileImage" className="profile-profile-pic-label">
          <div
            className="profile-profile-pic"
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

      {/* Include the reusable ProfileMainBar component */}
      <ProfileMainBar />



      <div className="profile-sidebar">
      <div className="profile-sidebar-header">
          <p>Vikram</p>
          <p>Followers: 220</p>
          <p>Interactions: 134</p>
          <p>Highlights: 5</p>
        </div>
        <div className="profile-sidebar-content">
          <p>Bio: Tech enthusiast, always learning new things!</p>
        </div>
      </div>

      <div className="profile-right-sidebar">
        <div className="profile-circle-img">
          <img src={p1} alt="Right Sidebar User 1" />
        </div>
        <div className="profile-circle-img">
          <img src={p2} alt="Right Sidebar User 2" />
        </div>
        <div className="profile-circle-img">
          <img src={p3} alt="Right Sidebar User 3" />
        </div>
        <div className="profile-circle-img">
          <img src={p4} alt="Right Sidebar User 4" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
