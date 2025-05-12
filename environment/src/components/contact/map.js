import React, { useState } from "react";
import "./contact.css";

const Map = () => {
  const [showIndia, setShowIndia] = useState(false);

  return (
    <section className="cta-section">
      <div className="container text-center">
        <div className="map-controls">
          <div 
            className="map-hover-container"
            onMouseEnter={() => setShowIndia(true)}
            onMouseLeave={() => setShowIndia(false)}
          >
            <img
              src="/map4.png"
              className="btn-map"
              alt="Map Icon"
            />
            {showIndia && (
              <button className="btn-secondary india-btn">India</button>
            )}
          </div>
        </div>
      </div>
      <div className="map"></div>
    </section>
  );
};

export default Map;