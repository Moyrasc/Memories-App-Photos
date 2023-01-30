import React from "react";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';

const SearchBar = () => {
  return (
    <div className="input-container">
      <input
        className="inputSearch"
        placeholder="Search photos"
        name="searchImg"
      />
      <SearchSharpIcon className="input-icon"/>
    </div>
  );
};

export default SearchBar;
