import React, {useState} from 'react';
import {BiSearchAlt} from 'react-icons/bi';
import './SearchBar.css';


function SearchBar() {

  const [searchValue, setSearchValue] = useState ('');

  return (
    <div>
      <form className="search-bar">
        <input
          className="search__input"
          value={searchValue}
          type="search"
          placeholder="Buscar casa"
          onChange={({target}) => setSearchValue(target.value)}
          required
        />
        {searchValue}
        <button type="submit" className="search__button">
          <BiSearchAlt />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
