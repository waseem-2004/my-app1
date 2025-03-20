import React from "react";
import "../Styles/navbar.css";
import nassar from '../assets/asset/ParisImage.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Fickle Flight</div>
      
      <ul className="nav-links">
        <li>Explore</li>
        <li>Search</li>
        <li>Hotels</li>
        <li>Offers</li>
      </ul>

      <div className="icons">
        <span className="bell-icon">🔔</span>
        <img src={nassar} alt="Profile" className="profile-pic" />
      </div>
    </nav>
  );
};

export default Navbar;
