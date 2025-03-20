import React from "react";
import "../Styles/staycard.css"; 

const StayCard = ({ image, type, name, price, rating, reviews }) => {
  return (
    <div className="stay-card">
      <img src={image} alt={name} className="stay-image" />
      <div className="stay-content">
        <p className="stay-type">{type}</p>
        <h3 className="stay-name">{name}</h3>
        <p className="stay-price">${price}/night</p>
        <div className="stay-rating">
          ⭐ <span>{rating}</span> (<a href="#">{reviews} reviews</a>)
        </div>
        <button className="stay-button">MORE DETAILS</button>
      </div>
    </div>
  );
};

export default StayCard;
