import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';  // Add your styles here

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="background">
        <h1>Welcome to Paradise Nursery</h1>
        <p>Explore our vast collection of beautiful houseplants.</p>
        <Link to="/products">
          <button className="get-started-btn">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
