import React, { useState } from "react";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { useDispatch } from "react-redux";
import { apiGetPhotos } from "../../features/imgSlice/imgSlice";

const SearchBar = () => {
    const [queries, setQueries] = useState("")
    const dispatch = useDispatch();

    const handleOnKeyDown = (e) =>{
        if(e.key=== 'Enter'){
            dispatch(apiGetPhotos(queries))
        }
    }
  return (
    <div className="input-container">
      <input
        className="inputSearch"
        placeholder="Search photos"
        name="searchImg"
        value={queries}
        onChange={e => setQueries(e.target.value)}
        onKeyDown={handleOnKeyDown}
      />
      <SearchSharpIcon className="input-icon"/>
    </div>
  );
};

export default SearchBar;
