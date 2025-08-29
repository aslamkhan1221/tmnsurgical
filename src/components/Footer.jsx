
import React from 'react';
import './Footer.css';
import logo from '../TMN-logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="TMN Logo" width={'200px'} />
      </div>
      <p>&copy; 2025 TMN Surgical. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
