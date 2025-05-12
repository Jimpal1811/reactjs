import React from "react";
import "./readmore.css";


const ReadMore = () => {

  return (



    
    <div className="read-more-container">
<div className="hero-sections">
        <div className="hero-content">
          <h1>Welcome to Biocrafters</h1>
          <p>Transforming Waste into Sustainable Solutions</p>
          <button className="cta-button" onClick={() => window.location.href = "contact"}>
            Get in Contact
          </button>
        </div>
      </div>


      <section className="read-more-section">
        <h1>About Biocrafters</h1>
        <p>
          At Biocrafters, we are redefining the future of energy and agriculture with sustainable, carbon-smart solutions. 
          Specializing in the production and supply of biocoal and biochar, our mission is to bridge the gap between environmental responsibility and industrial innovation. 
          By transforming organic waste into high-value carbon products, we help reduce dependency on fossil fuels and support regenerative agriculture—creating a cleaner, greener, and more sustainable world.
        </p>
        
        <h2>Our Mission</h2>
        <p>
          Our mission is to combat climate change and support sustainable practices by converting biomass into eco-friendly products such as biocoal and biochar.
          We aim to reduce reliance on fossil fuels and increase soil health through our sustainable innovations. 
        </p>

        <h2>Our Journey</h2>
        <p>
          Founded with a vision to combat climate change through practical and scalable technology, Biocrafters began with the simple yet powerful idea: 
          waste is not waste—it’s a resource. After years of research, collaboration with environmental experts, engineers, and farmers, 
          we've developed efficient processes to convert biomass into biocoal (a cleaner energy source) and biochar (an additive for soil improvement).
        </p>

        <h2>Our Technology</h2>
        <p>
          We use state-of-the-art technology to convert agricultural and industrial waste into high-value carbon products. 
          Through this innovative process, we help reduce carbon emissions while improving the quality of the soil.
        </p>

        <div className="image-container">
        </div>

        <h2>Meet the Team</h2>
        <p>
          Our team consists of passionate individuals dedicated to making a real impact on the environment. We work tirelessly to advance our technology, 
          build partnerships, and educate the community about the importance of sustainability and regenerative agriculture.
        </p>

       <div className="team-section">
  <div className="team-member">
    <div className="team-image team1"></div>
    {/* <p><strong>John Doe</strong><br />CEO & Founder</p> */}
  </div>
  <div className="team-member">
    <div className="team-image team2"></div>
    {/* <p><strong>Jane Smith</strong><br />Head of Research</p> */}
  </div>
</div>

        <h2>Join Us in Building a Sustainable Future</h2>
        <p>
          Ready to make an impact? Join us in our mission to build a sustainable future through innovation and responsibility. 
          Whether you're a farmer looking for better soil solutions or an industry leader wanting to reduce your carbon footprint, we have a solution for you.
        </p>
        <button onClick={() => window.location.href = "contact"} className="cta-button">Contact Us</button>
      </section>
    </div>
  );
};

export default ReadMore;
