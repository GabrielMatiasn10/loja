import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <SearchBar />
        <button type="button" className="cart__button" >
          <AiOutlineShoppingCart />
          <span className="cart-status">1</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
