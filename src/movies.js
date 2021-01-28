import React from "react";
import { useGlobalContext } from "./context";
import MovieDetail from "./movieDetail";

const MovieList = () => {
  const { genres, movies, isLoading } = useGlobalContext();

  if (isLoading) {
    return <div className="loading"></div>;
  }

  // logic to eliminate genres without movies
  // Need validation
  let genresWithMovies = [];
  genres.forEach((genre) => {
    movies.forEach((movie) => {
      if (movie.genre_ids.indexOf(genre.id) !== -1) {
        genresWithMovies.push(genre);
      }
    });
  });

  return (
    <div className="titleList">
      <div className="title">
        {genres.map((genre) => {
          return (
            <div key={genre.id}>
              <h1>{genre.name}</h1>
              <div className="title-wrapper">
                <MovieDetail genreId={genre.id} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
