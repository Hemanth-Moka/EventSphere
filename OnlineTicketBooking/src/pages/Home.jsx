import React, { useState } from 'react';
import "../styles/Home.css";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div className={darkMode ? "dark" : ""}>
    


      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <button className="dark-mode-btn" onClick={toggleDarkMode}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
          <h2>Book Your Tickets Hassle-Free!</h2>
          <p>Movies, Events, and Travel – all in one place.<br></br>Easy booking, best prices, and secure payments.</p>
          <a href="#booking" className="hero-btn">Book Now</a>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="booking">
        <h3>Book Your Ticket</h3>
        <div className="booking-options">
          <a href="/movies">🎬 Movies</a>
          <a href="/travel">🚗 Travel</a>
          <a href="/events">🎟️ Events</a>
        </div>
      </section>

      {/* Popular Movies & Events */}
      <section id="popular">
        <h3>Popular Movies & Events</h3>
        <div className="popular-list">
          <div className="item">
            <img src="1.jpg" alt="Movie 1" />
            <p>Movie Title</p>
          </div>
          <div className="item">
            <img src="https://via.placeholder.com/150" alt="Concert" />
            <p>Live Concert</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works">
        <h3>How It Works</h3>
        <div className="steps">
          <div className="step">1️⃣ Choose your event, movie, or trip</div>
          <div className="step">2️⃣ Select your seats or ticket type</div>
          <div className="step">3️⃣ Make a secure payment</div>
          <div className="step">4️⃣ Get your e-ticket instantly</div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials">
        <h3>What Our Customers Say</h3>
        <blockquote>"This platform is amazing! Booking tickets is so easy!"</blockquote>
        <cite>- Rahul Sharma</cite>
      </section>

      {/* Description Section */}
      <section id="description">
        <p>We provide an easy and secure way to book your favorite tickets online.</p>
        <p>Enjoy a seamless experience with multiple payment options and instant e-tickets.</p>
      </section>

      {/* Contact & Support */}
      <section id="contact">
        <div className="contact-container">
          <h3>Need Help?</h3>
          <p>Describe your issue below, and our team will assist you as soon as possible.</p>
          <form>
            <input type="text" id="query" name="query" placeholder="Enter your query..." required />
            <button type="submit" className="hero-btn">Submit & Contact Support</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
