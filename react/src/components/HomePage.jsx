import React from 'react';
import { Link } from 'react-router-dom';
import '../css/HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <h1>Welcome to the Finance Budget Tracker</h1>
      <p>Manage your finances effectively and efficiently.</p>
      <div className="home-buttons">
        <Link to="/login" className="btn btn-primary">Login</Link>
        <Link to="/signup" className="btn btn-secondary">Signup</Link>
      </div>
    </div>
  );
}

export default HomePage;