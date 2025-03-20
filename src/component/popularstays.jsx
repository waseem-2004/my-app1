import React from "react";
import StayCard from "./staycard";
import "../Styles/popularstays.css";
import w1 from '../assets/asset/Matterhorn Suites Image.png';
import w2 from '../assets/asset/Discovery Shores Image.png';
import w3 from '../assets/asset/Arctic Hut Image.png';
import w4 from '../assets/asset/Lake Louise Image.png';
const stays = [
  {
    image: w1,
    type: "Entire bungalow",
    name: "Matterhorn Suites",
    price: 575,
    rating: 4.9,
    reviews: 60,
  },
  {
    image: w2,
    type: "2-Story beachfront suite",
    name: "Discovery Shores",
    price: 360,
    rating: 4.8,
    reviews: 116,
  },
  {
    image: w3,
    type: "Single deluxe hut",
    name: "Arctic Hut",
    price: 420,
    rating: 4.7,
    reviews: 78,
  },
  {
    image: w4,
    type: "Deluxe King Room",
    name: "Lake Louise Inn",
    price: 244,
    rating: 4.6,
    reviews: 63,
  },
];

const PopularStays = () => {
  return (
    <section className="popular-stays">
      <div className="stays-header">
        <h2>Popular Stays</h2>
        <a href="#" className="view-all">View all stays →</a>
      </div>
      <div className="popular-stays-container">
        {stays.map((stay, index) => (
          <StayCard key={index} {...stay} />
        ))}
      </div>
    </section>
  );
};

export default PopularStays;
