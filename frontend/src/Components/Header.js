// Header.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink for navigation
import './Header.css'; // Import the CSS file for styling

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <h1>Ideology</h1> {/* Replace with actual logo if needed */}
        </div>
        <div className="nav-links-container">
          <nav className="nav-links">
            <NavLink to="/home" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Home
            </NavLink>
            <NavLink to="/submit" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Submit Ideas
            </NavLink>
            <NavLink to="/ideas-gallery" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Ideas Gallery
            </NavLink>
            <NavLink to="/about-us" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              About Us
            </NavLink>
          </nav>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <NavLink to="/home" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={toggleMenu}>
          Home
        </NavLink>
        <NavLink to="/submit" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={toggleMenu}>
          Submit Ideas
        </NavLink>
        <NavLink to="/ideas-gallery" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={toggleMenu}>
          Ideas Gallery
        </NavLink>
        <NavLink to="/about-us" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={toggleMenu}>
          About Us
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
