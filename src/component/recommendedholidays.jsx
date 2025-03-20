import React from "react";
import HolidayCard from "./holidaycard"; 
import "../Styles/recommendedholidays.css"; 
import p1 from '../assets/asset/image.png';
import p2 from '../assets/asset/SwitzerlandImage.png';
import p3 from '../assets/asset/BoracayImage.png';
import p4 from '../assets/asset/PalawanImage.png';


const holidayData = [
  {
    image: p1,
    title: "Bali",
    duration: "4D3N",
    price: 899,
  },
  {
    image: p2,
    title: "Swiss",
    duration: "6D5N",
    price: 900,
  },
  {
    image: p3,
    title: "Boracay",
    duration: "5D4N",
    price: 699,
  },
  {
    image: p4,
    title: "Palawan",
    duration: "4D3N",
    price: 789,
  },
];

const RecommendedHolidays = () => {
  return (
    <div className="recommended-section">
      <div className="title-container">
        <h2 className="main-title">Recommended Holidays</h2>
        <a href="#" className="view-all">View all holidays →</a>
      </div>
      <div className="holiday-list">
        {holidayData.map((holiday, index) => (
          <HolidayCard key={index} {...holiday} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedHolidays;
