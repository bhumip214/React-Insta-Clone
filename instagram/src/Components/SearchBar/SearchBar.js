import React from "react";
import "./SearchBar.css";

const SearchBar = props => {
  return (
    <div className="searchBar">
      <div className="logo-header">
        <i className="logo fab fa-instagram" />
        <hr />
        <h1>Instagram</h1>
      </div>
      <div>
        <input
          className="search-input"
          onChange={props.handleSearchInput}
          type="text"
          value={props.searchInputValue}
          placeholder="Search"
        />
      </div>
      <div className="searchBar-icons">
        <div className="social">
          <i className="far fa-compass" />
        </div>
        <div className="social">
          <i className="far fa-heart" />
        </div>
        <div className="social">
          <i className="far fa-user" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
