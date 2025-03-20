import React from "react";
import "../Styles/searchflights.css";
import Banner from "../assets/asset/Banner.png"; 

const SearchFlights = () => {
  return (
    <div className="search-section">
    
      <img src={Banner} alt="Background" className="background-image" />

    
      <div className="overlay">
        <h1 className="hero-title">Let's explore & travel the world</h1>
        <p className="hero-description">
          Find the best destinations and the most popular stays!
        </p>

        
        <div className="search-box">
          
          <div className="search-header">
          <div className="search-title">SEARCH FLIGHTS</div> 

            <div className="trip-options-container"> 
              <label>
                <input type="radio" name="trip" value="return" /> Return
              </label>
              <label>
                <input type="radio" name="trip" value="one-way" /> One Way
              </label>
            </div>
          </div>

          <div className="search-fields">
            <input type="text" placeholder="Departure" />
            <input type="text" placeholder="Arrival" />
            <input type="date" />
            <button>SEARCH FLIGHTS</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFlights;
