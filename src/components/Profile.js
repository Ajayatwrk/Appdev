import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Profile.css';
import ProfileMainBar from './ProfileMainBar'; // Import the reusable Profile MainBar

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
        <div className="profile-logo">Logo</div>
        <div className="profile-navbar-name">Website Name</div>
        <input type="text" className="profile-search-bar" placeholder="Search..." />
        <div className="profile-navbar-icons">
          <Link to="/Home" className={`profile-icon ${location.pathname === '/Home' ? 'active' : ''}`}>Icon1</Link>
          <Link to="/community" className={`profile-icon ${location.pathname === '/community' ? 'active' : ''}`}>Icon2</Link>
          <Link to="/Profile" className={`profile-icon ${location.pathname === '/Profile' ? 'active' : ''}`}>Icon3</Link>
        </div>
        <div className="profile-user-profile">
          <span className="profile-user-name">User Name</span>
          <div className="profile-profile-pic"></div>
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
        <p>Sidebar Content</p>
      </div>

      <div className="profile-right-sidebar">
        <div className="profile-circle-img"></div>
        <div className="profile-circle-img"></div>
        <div className="profile-circle-img"></div>
        <div className="profile-circle-img"></div>
      </div>
    </div>
  );
};

export default Profile;
