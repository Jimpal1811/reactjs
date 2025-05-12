import React from "react";
import "./About.css";

const ValuesImpact = () => {
  return (
    <section className="values-impact-section">
      <div className="container">
        <h2 className="section-title">Our Values & Impact</h2>

        <div className="cards-container">
          {/* Our Values Card */}
          <div className="card">
            <h3 className="card-title">Our Values</h3>
            <p className="card-description">
            At the heart of our mission are sustainability, innovation, and community impact. We are committed to creating eco-friendly solutions that benefit both people and the planet.            </p>
            <ul className="card-list">
              <li> <img src={'./Group.png'}alt="Check" className="check-icon" /> Committed to Environment Through Products</li>
              <li><img src={'./Group.png'}alt="Check" className="check-icon" /> Innovating for Efficiency and Impact</li>
              <li><img src={'./Group.png'}alt="Check" className="check-icon" /> Collaborating for Tailored Sustainable Solutions</li>
            </ul>
          </div>

          {/* Our Impact Card */}
          <div className="card">
            <h3 className="card-title">Our Impact</h3>
            <p className="card-description">
            With every ton of biocoal and biochar we produce, we’re not just offering a product—we’re providing a path to a better future.            </p>
            <ul className="card-list">
              <li><img src={'./Group.png'}alt="Check" className="check-icon" /> Reduce greenhouse gas emissions</li>
              <li><img src={'./Group.png'}alt="Check" className="check-icon" /> Prevent deforestation and fossil fuel usage</li>
              <li><img src={'./Group.png'}alt="Check" className="check-icon" /> Improve agricultural productivity</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesImpact;
