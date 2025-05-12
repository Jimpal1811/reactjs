import "./product.css";

const BiocharProduct = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">BIOCHAR</h2>
        
        <div className="content-wrapper">
          <div className="product-details">
            <p>
              Biochar is a carbon-rich, porous material produced through the thermal decomposition of organic biomass in a
              low-oxygen process known as pyrolysis. This process involves heating agricultural residues such as crop
              waste, wood chips, or manure to high temperatures, transforming them into a stable form of carbon that can
              be returned to the soil. Unlike traditional charcoal, which is primarily used as fuel, biochar is designed
              specifically for agricultural and environmental applications. Its unique structure, high surface area, and
              ability to retain nutrients and water make it a powerful tool for improving soil health, boosting crop
              productivity, and supporting sustainable farming practices.
            </p>

            <p>
              One of the most significant benefits of biochar is its ability to enhance soil fertility. Due to its porous
              nature, biochar improves the soil's water-holding capacity, making it especially valuable in arid or
              drought-prone regions. It also helps retain essential nutrients such as nitrogen, phosphorus, and potassium
              (NPK), preventing them from leaching away during irrigation or rainfall. This leads to better nutrient
              availability for plants, more robust root development, and ultimately higher crop yields. In addition,
              biochar supports beneficial microbial activity in the soil, creating a thriving ecosystem that supports
              healthy plant growth.
            </p>

            <p >
              Beyond its agricultural benefits, biochar plays a crucial role in carbon sequestration and climate change
              mitigation. Because the carbon in biochar is highly stable, it can remain in the soil for hundreds to
              thousands of years without breaking down, effectively locking away atmospheric carbon dioxide. This makes
              biochar one of the few scalable, nature-based solutions for reducing greenhouse gas concentrations in the
              atmosphere. By converting agricultural waste into biochar instead of allowing it to decompose or burn, we
              can significantly reduce methane and carbon dioxide emissions, contributing to a more sustainable planet.
            </p>
          </div>

          <div className="product-image">
            <img src="/biochar.jpg" alt="Biochar product" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiocharProduct;
