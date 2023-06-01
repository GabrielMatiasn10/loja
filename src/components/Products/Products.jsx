import React, { useEffect, useState } from 'react';
import './Products.css';
import fetchProducts from '../../api/fetchProducts';
import ProductCart from '../ProductCard/ProductCart';


function Products () {
  const [products, setProducts] = useState([]);

  useEffect (() => {
    fetchProducts('iphone').then((response) =>{
      setProducts(response);
      console.log(products);
    });
  });
  
  
  return (
    <section className="products conteiner">
      <ProductCart />
    </section>
  );
}
export default Products;