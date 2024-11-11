import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './ProfileMainBar.css';

const ProfileMainBar = () => {
  const navigate = useNavigate();  // Initialize navigate function

  const handleSyncClick = () => {
    navigate('/map');  // Navigate to /map when button is clicked
  };

  return (
    <div className="profile-mainbar">
      <p><b>Highlights :</b></p>
      <p>“Awarded Best Graphic Design Project” at D&AD Awards.</p>
      <p>Winner of Design Award for Best Branding.</p>
      <p>Finalist in AIGA Design Awards.</p>
      <p>Featured in “The Hindu” for Outstanding Graphic Design Work</p>
      <button className="profile-sync-button" onClick={handleSyncClick}>Sync</button>
    </div>
  );
};

export default ProfileMainBar;
