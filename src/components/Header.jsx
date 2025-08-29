

import React from 'react';
import './Header.css';
import logo from '../TMN-logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="/"><img src={logo} alt="TMN Logo" width={'200px'}/></a>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

