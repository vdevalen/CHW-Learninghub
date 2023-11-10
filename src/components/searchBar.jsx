import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "../style/searchBar.css"


function SearchBar() {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="I'm looking for..."
        className="search-input"
      />
      <button className="search-button">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
}

export default SearchBar;
