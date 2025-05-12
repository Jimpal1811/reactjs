import React from "react";
import "./About.css";

const Image=() =>{
  return(
  <section className="image-box-section">
  <div className="image-row">
    <div className="about-section">
      <div className="text-content">
          <h4>About Comapny</h4>
        <h1>
          Enrich Soil. Store Carbon. Boost <br /> Yields.<span className="leaf"> Grow Sustainably.</span>
        </h1>

        <p>
          At Biocrafters, we are redefining the future of energy and
          agriculture with sustainable, carbon-smart solutions.
          Specializing in the production and supply of biocoal and biochar,
          our mission is to bridge the gap between environmental
          responsibility and industrial innovation. By transforming
          organic waste into high-value carbon products, we help reduce
          dependency on fossil fuels and support regenerative
          agriculture—creating a cleaner, greener, and more sustainable
          world.
        </p>
        <p>
          Founded with a vision to combat climate change through practical
          and scalable technology, our journey began with a simple but
          powerful idea: waste is not waste—it's a resource. With years of
          research and collaboration with environmental experts, engineers,
          and farmers, we've developed efficient processes to convert
          biomass into eco-friendly energy (biocoal) and soil-enhancing
          carbon (biochar).
        </p>
        <h3>
              {/* <a href="C:\Users\Vansita\OneDrive\Desktop\envronment\environment\src\components\about\readmore" className="leafs">Read-More →</a> */}
               <a href="/readmore"className="leafs">Read-More →</a>
            </h3>
      </div>
      <div className="image-container">
        <img src="/enrich_soil.jpg" alt="Biochar" class="hover-image" />
      </div>
    </div>
  </div>
  </section>
  );
  }

export default Image;
