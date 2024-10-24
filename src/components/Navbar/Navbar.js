// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import './Navbar.css';  // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/nothome">NotHome</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
