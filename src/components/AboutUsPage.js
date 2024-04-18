import React from "react";
import '../styles/AboutUsPage.css';

 const AboutUsPage = () => {
    return (
        <div className="about-us">
        <h1>About Us</h1>
        <p>We are passionate about providing the best experience for our customers.</p>
        <p>Founded in [Year], our company has been committed to offering top-notch facilities and equipment for sports enthusiasts. Our mission is to support and enhance the skills of athletes at all levels.</p>
        <h2>Our Team</h2>
        <p>Our team is made up of experienced professionals in the field of sports management and training.</p>
        {/* You might want to add team photos here */}
        <h2>Contact Information</h2>
        <p>For more information or inquiries, please contact us:</p>
        <ul>
          <li>Email: contact@example.com</li>
          <li>Phone: (123) 456-7890</li>
          <li>Address: 123 Main St, Your City, Your State</li>
        </ul>
      </div>
    );
  };

 export default AboutUsPage;