import React from "react";
import "./Header.scss";
import { FaSearch } from "react-icons/fa";

export const Header = props => {
  const { searchQuery, updateFilterSearch } = props;

  return (
    <header className="Header">
      <div className="site-title">
        <h1>Property Listing</h1>
      </div>
      <div className="search">
        <input
          name="searchQuery"
          value={searchQuery}
          onChange={updateFilterSearch}
          placeholder={`Search by location name...`}
        />
        <div className="icon">
          <FaSearch />
        </div>
      </div>
    </header>
  );
};

export default Header;
