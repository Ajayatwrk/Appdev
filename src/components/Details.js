import React, { useState } from 'react';
import './Details.css';
import { useNavigate } from 'react-router-dom';

const Details = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [twitter, setTwitter] = useState('');
  const [youtube, setYoutube] = useState('');
  const [tiktok, setTiktok] = useState('');
  const [snapchat, setSnapchat] = useState('');

  const handleDetailsSubmit = (e) => {
    e.preventDefault();
    console.log('Details submitted:', { email, phone, address, postalCode, country, twitter, youtube, tiktok, snapchat });
    navigate('/Home');
  };

  return (
    <div className='details-container'>
      <div className='details-form-container'>
        <h2>Change Details</h2>
        <form onSubmit={handleDetailsSubmit}>
          <label>
            Contact Info*
            <div className='details-input-group'>
              <input
                type="email"
                placeholder='Email Address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="tel"
                placeholder='Phone Number'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
          </label>

          <label>
            Address
            <input
              type="text"
              placeholder='Your address'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>

          <label>
            Postal Code
            <input
              type="text"
              placeholder='Postal Code'
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </label>

          <label>
            Country
            <input
              type="text"
              placeholder='Your country'
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </label>

          <label>
            Social Media Links
            <div className='details-input-group'>
              <input
                type="text"
                placeholder='Twitter'
                value={twitter}
                onChange={(e) => setTwitter(e.target.value)}
              />
              <input
                type="text"
                placeholder='YouTube'
                value={youtube}
                onChange={(e) => setYoutube(e.target.value)}
              />
            </div>
            <div className='details-input-group'>
              <input
                type="text"
                placeholder='TikTok'
                value={tiktok}
                onChange={(e) => setTiktok(e.target.value)}
              />
              <input
                type="text"
                placeholder='Snapchat'
                value={snapchat}
                onChange={(e) => setSnapchat(e.target.value)}
              />
            </div>
          </label>

          <button type="submit" className="details-submit-button">Save Details</button>
        </form>
      </div>
    </div>
  );
};

export default Details;
