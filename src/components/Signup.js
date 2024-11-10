import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [dob, setDob] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    // Basic validation check
    if (!firstname || !lastname || !email || !phone || !password || !rePassword) {
      alert("All fields are required!");
      return;
    }

    if (password !== rePassword) {
      alert("Passwords do not match!");
      return;
    }

    // Placeholder for actual signup functionality
    console.log('Signup submitted:', { firstname, lastname, email, phone, password, dob });

    // Navigate to home page after successful signup
    navigate('/Info');
  };

  return (
    <div className='container'>
      <div className='signup-container'>
        <h2>CREATE ACCOUNT</h2>
        <form onSubmit={handleSignup}>
          <div className='divs'>
          <div className='diva'>
            <label>
              Name
              <input
                type="text"
                placeholder='First Name'
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                required
              />
            </label>
            <label>
              E-mail
              <input
                type="email"
                placeholder='abc@gmail.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            
            <label>
              Password 
              <input
                type="password"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <label>
              Phone 
              <input
                type="tel"
                placeholder="1234567890"
                pattern="[0-9]{10}"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </label>
          </div>
          <div className='divb'>
            <label>
              Last Name
              <input
                type="text"
                placeholder='Last Name'
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                required
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
              Re-enter Password
              <input
                type="password"
                placeholder='Re-enter Password'
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
                required
              />
            </label>
          </div>
          </div>          
          <button type="submit" className="submit-button">Sign Up</button>
        </form>
        <p>I already have an account, <a href="/Login">Login?</a></p>
      </div>
    </div>
  );
};

export default Signup;
