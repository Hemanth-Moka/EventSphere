import React from 'react';
import "../styles/Home.css";


const Home = () => {
  return (
    <div>
      {/* Navbar */}
      

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">

        <h2>Book Your Tickets Hassle-Free!</h2>

       <p>Movies, Events, and Travel – all in one place. <br></br>Easy booking, best prices, and secure payments.</p>

         
         
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
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgW4qTXimEiE7Bfe_a2qiazuhuvAan4pVEJg&s" alt="Movie 1" />
            <p>Movie Title</p>
          </div>
          <div className="item">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/002/048/928/small/microphone-neon-sign-live-music-bright-emblem-light-mic-on-the-brick-wall-background-vector.jpg" alt="Concert" />
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

      {/* Contact & Support */}
      <section id="contact">
    <div class="contact-container">
        <h3>Need Help?</h3>
        <p>Describe your issue below, and our team will assist you as soon as possible.</p>
        <form action="">
            <input type="text" id="query" name="query" placeholder="Enter your query..." required/>
            <button type="submit" class="hero-btn">Submit & Contact Support</button>
        </form>
    </div>


</section>


      {/* Footer */}
    
    </div>
  );
};

export default Home;
