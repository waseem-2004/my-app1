import React from "react";
import "../Styles/footer.css"; 
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2 className="footer-logo">FickleFlight</h2>
          <p className="footer-description">
            Fickle Flight is your one-stop travel portal. We offer hassle-free flight and 
            hotel bookings. We also have all your flight needs in your online shop.
          </p>
          <div className="footer-socials">
            <FaFacebookF className="social-icon" />
            <FaInstagram className="social-icon" />
            <FaTwitter className="social-icon" />
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li>About Us</li>
              <li>News</li>
              <li>Careers</li>
              <li>How we work</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Support</h3>
            <ul>
              <li>Account</li>
              <li>Support Center</li>
              <li>FAQ</li>
              <li>Accessibility</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>More</h3>
            <ul>
              <li>Covid Advisory</li>
              <li>Airline Fees</li>
              <li>Tips</li>
              <li>Quarantine Rules</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
