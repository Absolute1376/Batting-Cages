import React from 'react'
import '../styles/HomePage.css';


const HomePage = () => {
    return (
        <div className="home">
          <h1>Welcome to Our Batting Cages</h1>
          <p>Experience the best batting practice in town!</p>
          <p>Book a session today and take your skills to the next level with our state-of-the-art equipment and facilities.</p>
          {/* Optional: Add a call to action button */}
          <button onClick={() => window.location.href='/booking'}>Book Now</button>
          <h2>Why Choose Us?</h2>
          <p>Our cages are equipped with the latest technology to ensure the best training experience possible.</p>
          {/* Optional: Add images or testimonials */}
        </div>
      );
    };


export default HomePage;