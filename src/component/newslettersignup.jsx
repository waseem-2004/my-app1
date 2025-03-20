import React from "react";
import "../Styles/newslettersignup.css"; 
import bgImage from "../assets/asset/Subscribe section background.png";
import Footer from "./footer";

const NewsletterSignup = () => {
    return (
      <div className="newsletter-container">
        <img src={bgImage} alt="Newsletter Background" className="newsletter-image" />
  
        <div className="newsletter-content">
       
          <h3 className="newsletter-title">SUBSCRIBE TO OUR NEWSLETTER</h3>
          <h2 className="newsletter-heading">Get weekly updates</h2>
  
          <div className="newsletter-box">
            <p>Fill in your details to join the party!</p>
            <input type="text" className="newsletter-input" placeholder="Your name" />
            <input type="email" className="newsletter-input" placeholder="Email address" />
            <button className="newsletter-button">SUBMIT</button>
          </div>
        </div>
        
      </div>
    );
  };
  
  export default NewsletterSignup;