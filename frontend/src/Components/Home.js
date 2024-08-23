import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation to get the current path
import Header from './Header'; // Import Header component
import Footer from './Footer'; // Import Footer component
import './Home.css'; // Import the CSS file for styling

const Home = () => {
  const location = useLocation(); // Get the current path
  const noFooterPaths = ['/login', '/register']; // Paths where Footer should not be displayed

  const showFooter = !noFooterPaths.includes(location.pathname); // Determine if Footer should be shown

  return (
    <>
      <Header />
      <div className="home-container">
        <section className="hero-section">
          <h1>Unleash Ideas</h1>
          <h2>Where wild thoughts collide and creativity knows no bounds!</h2>
        </section>

        <section id="idea-section" className="idea-section">
          <h3>Share Your Ideas</h3>
          <p>Join our community of thinkers and creators. Your ideas can shape the future!</p>
          <button className="submit-idea-button">Submit Idea</button>
        </section>
      </div>
      {showFooter && <Footer />} {/* Conditionally render the Footer */}
    </>
  );
};

export default Home;
