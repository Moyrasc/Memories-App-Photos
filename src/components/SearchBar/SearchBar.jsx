import React, { useState } from "react";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';

const SearchBar = () => {
    const [queries, setQueries] = useState("")
  return (
    <div className="input-container">
      <input
        className="inputSearch"
        placeholder="Search photos"
        name="searchImg"
        value={queries}
        onChange={e => setQueries(e.target.value)}
      />
      <SearchSharpIcon className="input-icon"/>
    </div>
  );
};

export default SearchBar;
