import React, { useState } from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { setQuery } = useGlobalContext();
  const [querySearch, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    setQuery(querySearch);

    setSearchTerm("");
  };

  return (
    <header className="header">
      <a href="/">
        <img
          src="https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png"
          alt="netflix-font"
          border="0"
        ></img>
      </a>
      <div id="navigation" className="navigation">
        <nav>
          <ul>
            <li>
              <a href="/myList">My List</a>
            </li>
          </ul>
        </nav>
      </div>
      <form id="search" className="search" onSubmit={handleSearch}>
        <input
          type="search"
          placeholder="Search for a title..."
          value={querySearch}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <div className="searchResults"></div>
      </form>
    </header>
  );
};

export default SearchForm;
