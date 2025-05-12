import React from "react";
import "./home.css";

const Imagesection=() =>{
  return(
  <section className="image-box-section">
  <div className="image-row">
    <div className="about-section">
      <div className="text-content">
          <h4>About Comapny</h4>
        <h1>
          Enrich Soil. Store Carbon. Boost <br /> Yields.
          <span className="leaf"> Grow Sustainably.</span>
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
           <a href="/readmore"className="leafs">Read-More →</a>
        </h3>
      </div>
      <div className="image-container">
        <img src="/enrich_soil.jpg" alt="Biochar" class="hover-image" />
      </div>
    </div>
  </div>

  
  <section className="image-content-row">
  <h2 className="image-box-heading">
      Improves soil, retains <span className="leaf"> water naturally</span>
    </h2>
    <div className="image-box biochar">
      <div className="overlay-text">
        <h2 className="overlay-heading">BIOCHAR</h2>
        Biochar is a carbon-rich material produced from farm residue using
        the pyrolysis method. It contains small amounts of NPK, which
        enhance soil fertility and support plant growth. Widely used in
        regenerative agriculture, improves crop nutrition, soil health, and
        overall farming productivity. Its porous structure also aids in
        environmental remediation and pollution reduction.
      </div>
    </div>
   
  </section>

  <div className="image-row">
    <h2 className="image-box-heading">
      Clean energy from <span className="leaf">agricultural waste.</span>
    </h2>
    <div className="image-box pellets">
      <div className="overlay-text">
        <h2 className="overlay-heading">SAWDUST PELLETS</h2>
        Sawdust pellets are a renewable, eco-friendly biomass fuel made
        from compressed sawdust. They offer high energy output with low
        moisture content, making them efficient for heating and power
        generation. Easy to store and transport, these pellets are a
        sustainable alternative to fossil fuel, supporting cleaner energy
        and waste reduction.
      </div>
    </div>
  </div>
</section>
  )

}

export default Imagesection;