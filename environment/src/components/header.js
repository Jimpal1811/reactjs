import React from "react";
import "./home.css";

const Header=() =>{
return(
    <header className="hero-section">
    <div className="hero-text">
      <h>
        Smart Carbon for<br/>Energy &
        <span className="culture"> Agriculture</span>
      </h>
      <p>We turn organic waste into powerful carbon solution </p>
      <div className="hero-buttons">
        <a href="product" className="btn green">
          Explore Product
        </a>
        <a href="contact" className="btn outline">
          Contact Us
        </a>
      </div>
    </div>
    <div className="hero-image"></div>
  </header>
)
}

export default Header;