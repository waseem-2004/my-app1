import React from "react";
import "../Styles/holidaycard.css"; 

const HolidayCard = ({ image, title, duration, price }) => {
  return (
    <div className="holiday-card">
      <img src={image} alt={title} className="holiday-image" />
      <div className="holiday-info">
       <div className="holiday-details">
        <span className="holiday-title">{title}</span>
        <span className="holiday-duration">{duration}</span>
       </div>
        <span className="holiday-price">${price}</span>
     </div>
    </div>
  );
};

export default HolidayCard;
