import React from 'react';
import "../styles/Home.css"
import "../components/Navbar"
import "../components/Footer"


const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>Hemanth Moka</h2>
          <p>Sharing my journey, insights, and stories about technology, personal growth, and creative projects.</p>
          <a href="#articles" className="hero-btn">Explore Articles</a>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about">
        <h3>About Me</h3>
        <p>Hi! I’m a passionate technologist, writer, and lifelong learner.</p>
      </section>

      {/* Articles Section */}
      <section id="articles">
        <h3>My Articles</h3>
        <p>Dive into my articles where I share thoughts, tutorials, and insights.</p>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h3>My Projects</h3>
        <p>Explore my portfolio of projects ranging from web development to creative designs.</p>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <h3>Skills and Expertise</h3>
        <p>With expertise in web development, programming, and creative design, I bring ideas to life.</p>
      </section>

      {/* Courses Section */}
      <section id="courses">
        <h3>Courses I Recommend</h3>
        <p>Discover the courses that shaped my learning journey.</p>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio">
        <h3>My Portfolio</h3>
        <p>A showcase of my work, featuring designs, coding projects, and collaborative initiatives.</p>
      </section>

      {/* Blogs Section */}
      <section id="blogs">
        <h3>My Blog Posts</h3>
        <p>Read my latest blog posts exploring technology, creativity, and more.</p>
      </section>

      {/* Social Media Section */}
      <section className="social-media">
        <h2>I Am</h2>
        <p>Connect with me on social platforms.</p>
        <div className="social-icons">
          <a href="https://www.instagram.com/your_profile/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.linkedin.com/in/your_profile/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="http://t.me/your_channel" target="_blank" rel="noopener noreferrer">Telegram</a>
        </div>
      </section>

      {/* Events Section */}
      <section id="events">
        <h3>Upcoming Events</h3>
        <div className="event-list">
          <div className="event">
            <h4>Webinar on Creativity</h4>
            <p>Join me in a live webinar discussing creative workflows.</p>
            <p><strong>Date:</strong> May 12, 2024</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials">
        <h3>What People Say</h3>
        <blockquote>"This blog has been a great source of inspiration!"</blockquote>
        <cite>- Alex</cite>
      </section>

      {/* FAQs Section */}
      <section id="faqs">
        <h3>FAQs</h3>
        <h4>How can I contact you?</h4>
        <p>You can reach out via social media or the contact form below.</p>
      </section>

      {/* Achievements Section */}
      <section id="achievements">
        <h3>Achievements</h3>
        <p>Milestones that reflect my growth and passion for technology.</p>
      </section>

      {/* Gallery Section */}
      <section id="gallery">
        <h3>Gallery</h3>
        <p>Explore my journey through memorable images.</p>
      </section>

      {/* Books Section */}
      <section id="books">
        <h3>Book Recommendations</h3>
        <p>Books that have shaped my skills and perspective.</p>
      </section>

      {/* Contact Me Section */}
      <section id="contact">
        <h3>Contact Me</h3>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Home;
