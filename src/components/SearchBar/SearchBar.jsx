import React from 'react';
import {BiSearchAlt} from 'react-icons/bi';
import './SearchBar.css';




function SearchBar() {
  return (
    <div>
      <form className="search-bar">
        <input
          type="search"
          placeholder="Buscar casa"
          className="search__input"
          required
        />
        <button type="submit" className="search__button">
          <BiSearchAlt />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
