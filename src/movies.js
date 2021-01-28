import React from "react";
import { useGlobalContext } from "./context";
import MovieDetail from "./movieDetail";

const MovieList = () => {
  const { genres, isLoading } = useGlobalContext();

  if (isLoading) {
    return <div className="loading"></div>;
  }

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
