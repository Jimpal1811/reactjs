import React from 'react';
import ProductsHero from '../components/product/ProductsHero';
import BiocharProduct from '../components/product/biochardetails';
import SwidustProduct from '../components/product/swidustdetails';

function Products() {
  return (
    <div>
      <ProductsHero />
      <BiocharProduct />
      <SwidustProduct />
    </div>
  );
}

export default Products;