import React, { useState, useEffect } from "react";
import "./home.css";
import { FaWhatsapp, FaInstagram, FaTwitter } from "react-icons/fa"; 

function GoTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`go-top ${isVisible ? "visible" : ""}`}>
      {isVisible && (
        <div onClick={scrollToTop} className="top-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="arrow-up-icon"
          >
            <path d="M11 17h2v-6h3l-4-5-4 5h3v6zm-9 4h20v-2H2v2z" />
          </svg>
        </div>
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <img src="/logo1.png" alt="Logo" />
          </div>
          <div className="social-icons">
            <a
              href="https://wa.me/YOUR_WHATSAPP_NUMBER" 
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="https://www.instagram.com/YOUR_INSTAGRAM_HANDLE" 
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://twitter.com/YOUR_TWITTER_HANDLE" 
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="home">Home</a>
            </li>
            <li>
              <a href="about">About Us</a>
            </li>
            <li>
              <a href="product">Products</a>
            </li>
            <li>
              <a href="contact">Contacts</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Services</a>
            </li>
          </ul>
        </div>
        <div className="footer-sectionnewsletter">
          <h4></h4>
          <p>
            Subscribe to our newsletter for updates on new products and industry
            insights.
          </p>
          <form className="subscribe-form">
            <input type="email" placeholder="Your Email " />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <GoTop />
    </footer>
  );
}

export default Footer;