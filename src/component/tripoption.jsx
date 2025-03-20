import React from "react";
import "../Styles/tripoption.css"; // استيراد ملف الـ CSS

const TripOption = ({ icon, label, bgColor }) => {
  return (
    <div className="trip-option">
      <div className="icon-container" style={{ backgroundColor: bgColor }}>
        {icon}
      </div>
      <p className="label">{label}</p>
    </div>
  );
};

export default TripOption;
