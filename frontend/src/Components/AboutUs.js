import React from 'react';
import './AboutUs.css'; // Import the CSS file for styling

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-box">
        <h2>About Us</h2> {/* Prominent title */}
        <p>
          We believe that groundbreaking ideas and visionary individuals drive both personal and national progress. 
          Our platform is dedicated to celebrating and connecting unique thinkers who are committed to creating meaningful change. 
          Here, we spotlight individuals whose innovative approaches and bold ideas contribute to their own growth and the advancement of society.
        </p>
        <p>
          Join a community where creativity meets impact, where every unique perspective is valued, and where collaborative energy fuels progress. 
          Whether you’re an innovator, a thought leader, or someone with a transformative idea, our mission is to provide a space where your vision can thrive and make a difference.
        </p>
        <p>
          Together, we’re building a future defined by originality, purpose, and collective advancement. Explore, connect, and contribute to a community that’s shaping tomorrow, today.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
