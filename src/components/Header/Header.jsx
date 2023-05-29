
import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="container">
        
        <form>
          <input
            type="search"
            placeholder="Buscar casa"
            className="search__input"
            required
          />
        </form>
        <button type="submit" className="search__button"> icon</button>
      </div>
    </header>
  );
}

export default Header;
