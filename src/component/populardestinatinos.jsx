import React from "react";
import "../Styles/populardestinations.css";
import destinationsImage from "../assets/asset/Cards Container.png"; 

const PopularDestinations = () => {
    return (
      <div className="popular-destinations">
    
        <div className="header-container">
          <div className="title-section">
            <p className="plan-text">Plan your next trip</p>
            <h2 className="main-title">Most Popular Destinations</h2>
          </div>
          <a href="#" className="view-all">View all destinations →</a>
        </div>
  
     
        <div className="image-container">
          <img src={destinationsImage} alt="Popular Destinations" className="destinations-image" />
        </div>
      </div>
    );
  };
  
  export default PopularDestinations;