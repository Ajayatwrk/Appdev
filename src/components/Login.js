import React, { useState } from 'react';
import './Login.css'; // You can create this CSS file for styling
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    // Placeholder for login functionality - we'll add real API calls here later
    console.log('Login submitted:', { username, password });

    navigate('/Home');
  };

  return (
    <div className="container">
      <div className="login-container">
      <form onSubmit={handleLogin}>
          <h1>Login</h1>
          <input
            type="text"
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        <button type="submit">Login</button>
        <p>I don't have an account, <a href="/Signup">SignUp ?</a></p>
      </form>
      </div>
    </div>
  );
};

export default Login;