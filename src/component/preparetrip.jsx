import React from "react";
import TripOption from "./tripoption";
import { FaHotel, FaTicketAlt, FaUtensils, FaBus, FaTaxi, FaFilm } from "react-icons/fa";
import "../Styles/preparetrip.css"; 
const tripOptions = [
  { icon: <FaHotel color="white" size={24} />, label: "Hotel", bgColor: "#f86c8c" },
  { icon: <FaTicketAlt color="white" size={24} />, label: "Attractions", bgColor: "#ff9b50" },
  { icon: <FaUtensils color="white" size={24} />, label: "Eats", bgColor: "#36c57a" },
  { icon: <FaBus color="white" size={24} />, label: "Commute", bgColor: "#ffcc00" },
  { icon: <FaTaxi color="white" size={24} />, label: "Taxi", bgColor: "#4da6ff" },
  { icon: <FaFilm color="white" size={24} />, label: "Movies", bgColor: "#63c132" },
];

const PrepareTrip = () => {
  return (
    <div className="prepare-trip">
      <p className="prepare-title">PREPARE FOR YOUR TRIP</p>
      <div className="options-container">
        {tripOptions.map((option, index) => (
          <TripOption key={index} {...option} />
        ))}
      </div>
    </div>
  );
};

export default PrepareTrip;
