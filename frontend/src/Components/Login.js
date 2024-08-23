import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useAuth } from '../AuthContext'; // Import the useAuth hook
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Get the navigate function from useNavigate
  const { login } = useAuth(); // Use the login function from AuthContext

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve user details from local storage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && email === storedUser.email && password === storedUser.password) {
     
      login(); // Set the user as authenticated
      navigate('/home'); // Redirect to the home page
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="ring">
      <i style={{ "--clr": "#f09433" }}></i>
      <i style={{ "--clr": "#e6683c" }}></i>
      <i style={{ "--clr": "#dc2743" }}></i>

      <div className="container">
        <h2>Login</h2>
        <form onSubmit={handleLogin} className="form">
          <div className="formGroup">
            <label>Email:</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              className="input"
            />
          </div>
          <div className="formGroup">
            <label>Password:</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              className="input"
            />
          </div>
          <button type="submit" className="button">Login</button>
        </form>
        <p>
          Don't have an account? 
          <span 
            onClick={() => navigate('/register')}
            className="link">
            Register here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
