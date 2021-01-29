import React, { useState, useContext, useEffect } from "react";
import * as MovieAPI from "./lib/MovieAPI";
import * as UtilMethods from "./lib/Util";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [genres, setGenres] = useState();
  const [movies, setMovies] = useState();
  const [moviesMyList, setMoviesMyList] = useState();
  const [query, setQuery] = useState("");

  const fetchMovies = async () => {
    try {
      setIsLoading(true);
      const response = await MovieAPI.genres();
      setGenres(UtilMethods.orderGenresArray(response));

      const responseMovies = await MovieAPI.getAll();
      setMovies(responseMovies);

      const moviesMyList = await MovieAPI.getMoviesFromList();
      setMoviesMyList(moviesMyList);

      setIsLoading(false);
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [query]);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        error,
        genres,
        movies,
        moviesMyList,
        query,
        setQuery,
        setMoviesMyList,
        setMovies,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
