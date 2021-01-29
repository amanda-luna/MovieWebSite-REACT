import React, { useState, useEffect } from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";
import * as MovieAPI from "./lib/MovieAPI";

const SearchForm = () => {
  const { movies, setMovies, isLoading } = useGlobalContext();
  const [querySearch, setQuerySearch] = useState("");
  const [countMovies, setCountMovies] = useState("");

  useEffect(() => {
    if (querySearch.length >= 1) {
      const moviesFiltered = movies.filter(
        (movie) =>
          movie.title.toLowerCase().includes(querySearch.toLowerCase()) ||
          movie.overview.toLowerCase().includes(querySearch.toLowerCase())
      );

      setMovies(moviesFiltered);
      setCountMovies(
        `Found ${moviesFiltered.length} movies with the query '${querySearch}'`
      );
    } else {
      const allMovies = async () => {
        const responseMovies = await MovieAPI.getAll();
        setMovies(responseMovies);
        setCountMovies("");
      };
      allMovies();
    }
  }, [movies, querySearch, setMovies]);

  if (isLoading) {
    return <div className="loading"></div>;
  }

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
              <Link to={"/myList"}>My List</Link>
            </li>
          </ul>
        </nav>
      </div>
      <form id="search" className="search" onSubmit={(e) => e.preventDefault()}>
        <input
          type="search"
          placeholder="Search for a title..."
          value={querySearch}
          onChange={(e) => setQuerySearch(e.target.value)}
        />
        <div className="searchResults">{countMovies}</div>
      </form>
    </header>
  );
};

export default SearchForm;
