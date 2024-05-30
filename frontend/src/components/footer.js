import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>About Us</h3>
        <p>A School portal for our blind school</p>
      </div>
      <div className="footer-section">
        <h3>Services</h3>
        <ul>
          <li>Class Schedule</li>
          <li>Homework Help</li>
          <li>make them feed</li>
          <li>sports and games</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Contact Us</h3>
        <p>Email: abc@gmail.com</p>
        <p>Phone: +1 123 456 7890</p>
      </div>
      <div className="footer-section">
      <h3>Social Media</h3>
      <ul>
        <li><i className="fa fa-facebook"></i> Facebook</li>
        <li><i className="fa fa-twitter"></i> Twitter</li>
        <li><i className="fa fa-linkedin"></i> LinkedIn</li>
        <li><i className="fa fa-instagram"></i> Instagram</li>
      </ul>
    </div>
    </footer>
  );
};

export default Footer;