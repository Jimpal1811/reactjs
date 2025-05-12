import React, { useState } from 'react';
import './home.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <a href="/home">
        <img src="/logo.png" alt="Logo" className="logo" />
      </a>

      <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <li><a href="/home" onClick={toggleMobileMenu}>Home</a></li>
        <li><a href="/about" onClick={toggleMobileMenu}>About</a></li>
        <li><a href="/product" onClick={toggleMobileMenu}>Products</a></li>
        <li><a href="/contact" onClick={toggleMobileMenu}>Contact</a></li>
      </ul>
      
      <button className="mobile-menu-button" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? '×' : '≡'}
      </button>
    </nav>
  );
};

export default Navbar;