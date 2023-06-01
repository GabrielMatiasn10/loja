import React from 'react';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import ProductCart from './components/ProductCard/ProductCart';

function App() {
  return (
    <div>
      <Header />
      <Products />
      <ProductCart />
    </div>
  );
}

export default App;