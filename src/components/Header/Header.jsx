import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <SearchBar />
        <button>
          <AiOutlineShoppingCart />
        </button>
      </div>
    </header>
  );
}

export default Header;
