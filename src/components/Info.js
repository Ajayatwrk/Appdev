import React, { useState } from 'react';
import './Info.css';
import { useNavigate } from 'react-router-dom';

const Info = () => {
  const navigate=useNavigate();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [headline, setHeadline] = useState('');
  const [pronouns, setPronouns] = useState('');
  const [dob, setDob] = useState('');
  const [cityRegion, setCityRegion] = useState('');
  const [city, setCity] = useState('');
  const [website, setWebsite] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');
  const [instagram, setInstagram] = useState('');
  const [facebook, setFacebook] = useState('');

  const handleInfoSubmit = (e) => {
    e.preventDefault();
    console.log('Info submitted:', { firstname, lastname, headline, pronouns, dob, cityRegion, city, website, linkedin, github, instagram, facebook });
    navigate('/Home');
  };

  return (
    <div className='container'>
      <div className='info-container'>
      <h2>Profile Information</h2>
        <form onSubmit={handleInfoSubmit}>
          <label>
            Name*
            <div className='input-group'>
              <input
                type="text"
                placeholder='First Name'
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder='Last Name'
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                required
              />
            </div>
          </label>

          <label>
            Headline
            <input
              type="text"
              placeholder='Your professional headline'
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
            />
          </label>

          <label>
            Pronouns
            <input
              type="text"
              placeholder='Your pronouns'
              value={pronouns}
              onChange={(e) => setPronouns(e.target.value)}
            />
          </label>

          <label>
            Date of Birth
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </label>

          <label>
            Location
            <div className='input-group'>
              <input
                type="text"
                placeholder='City or region'
                value={cityRegion}
                onChange={(e) => setCityRegion(e.target.value)}
              />
              <input
                type="text"
                placeholder='City'
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </label>

          <label>
            Contact Info
            <div className='input-group'>
              <input
                type="text"
                placeholder='Website'
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
              <input
                type="text"
                placeholder='LinkedIn'
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
              />
              <input
                type="text"
                placeholder='GitHub'
                value={github}
                onChange={(e) => setGithub(e.target.value)}
              />
            </div>
            <div className='input-group'>
              <input
                type="text"
                placeholder='Instagram'
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
              />
              <input
                type="text"
                placeholder='Facebook'
                value={facebook}
                onChange={(e) => setFacebook(e.target.value)}
              />
            </div>
          </label>

          <button type="submit" className="submit-button">Save Info</button>
        </form>
      </div>
    </div>
  );
};

export default Info;
