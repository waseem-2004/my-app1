import React from "react";
import "../Styles/recentsearches.css";

const SearchCard = ({ from, to, date }) => {
  return (
    <div className="search-card">
      <div className="right">
        <span className="airport-code">{from}</span>
      </div>
      <div className="center">
        <span className="flight-icon">✈️</span>
        <p className="depart-date">
          <strong>Depart On:</strong> {date}
        </p>
      </div>
      <div className="left">
        <span className="airport-code">{to}</span>
      </div>
    </div>
  );
};

const RecentSearches = () => {
  return (
    <div className="recent-searches">
      <h2>Recent Searches</h2>
      <div className="searches-container">
      
        <SearchCard from="SIN" to="LAX" date="7 Sep 2021" />
        <SearchCard from="MY" to="DUB" date="9 Sep 2021" />
      </div>
    </div>
  );
};

export default RecentSearches;
