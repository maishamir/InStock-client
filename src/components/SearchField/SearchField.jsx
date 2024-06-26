import React from "react";
import "./SearchField.scss";

function SearchField({ placeholder }) {
  return (
    <form className="form-group-search">
      <label htmlFor="searchField"> </label>
      <input
        type="text"
        name="searchField"
        id="searchField"
        placeholder={placeholder}
        className="search-field"
      />
    </form>
  );
}

export default SearchField;
