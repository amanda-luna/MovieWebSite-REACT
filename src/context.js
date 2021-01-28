import React, { useState, useContext, useEffect } from "react";
import * as MovieAPI from "./lib/MovieAPI";
import MovieList from "./movies";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [genres, setGenres] = useState();
  const [movies, setMovies] = useState();
  const [query, setQuery] = useState("");

  const fetchMovies = async () => {
    try {
      setIsLoading(true);
      const response = await MovieAPI.genres();
      setGenres(response);

      const responseMovies = await MovieAPI.getAll();
      setMovies(responseMovies);

      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [query]);

  return (
    <AppContext.Provider
      value={{ isLoading, error, genres, movies, query, setQuery }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
