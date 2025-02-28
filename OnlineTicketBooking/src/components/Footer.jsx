import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "../styles/Footer.css";// Import CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left - About Section */}
        <div className="footer-section about">
          <h2>Travel & Movie Booking</h2>
          <p>Your one-stop platform for booking travel, movies, concerts, and events with exclusive discounts.</p>
        </div>

        {/* Middle - Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/travel">Travel Booking</Link></li>
            <li><Link to="/movies">Movie Tickets</Link></li>
            <li><Link to="/concerts">Concerts & Events</Link></li>
            <li><Link to="/offers">Exclusive Offers</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Right - Newsletter Subscription */}
        <div className="footer-section newsletter">
          <h3>Subscribe to Our Newsletter</h3>
          <p>Get the latest deals and discounts directly to your inbox!</p>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>

      {/* Bottom - Social Media & Copyright */}
      <div className="footer-bottom">
        <div className="social-icons">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaYoutube /></a>
        </div>
        <p>© 2025 Travel Booking Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
