import React from "react";
import { useGlobalContext } from "./context";
import * as MovieAPI from "./lib/MovieAPI";

const defaultImg = "/image-not-available.jpg";

const MovieDetail = (props) => {
  const { movies, isLoading, setMoviesMyList } = useGlobalContext();

  const updateMovieList = async (event) => {
    const eventTarget = event.target.parentElement.parentElement;
    const movieTarget =
      event.target.parentElement.parentElement.parentElement.parentElement;

    let isToogled = eventTarget.getAttribute("data-toggled");

    if (isToogled === "false") {
      eventTarget.setAttribute("data-toggled", "true");
      await MovieAPI.addToList(movieTarget.getAttribute("movie_id"));
    } else {
      eventTarget.setAttribute("data-toggled", "false");
      await MovieAPI.removeFromList(movieTarget.getAttribute("movie_id"));
    }

    const moviesMyList = await MovieAPI.getMoviesFromList();
    setMoviesMyList(moviesMyList);
  };

  if (isLoading) {
    return <div className="loading"></div>;
  }

  // loop through movies array and find movies to show
  let moviesToLoad = [];
  movies.forEach((movie) => {
    if (movie.genre_ids.indexOf(props.genreId) !== -1) {
      moviesToLoad.push(movie);
    }
  });

  if (moviesToLoad.length > 0) {
    return (
      <div className="titles-wrapper">
        {moviesToLoad.map((movie) => {
          const {
            id,
            title,
            my_list,
            overview,
            poster_path: poster,
            vote_average: rating,
          } = movie;
          return (
            <div className="movie" key={id} movie_id={id}>
              <img
                src={`${poster === null ? defaultImg : `${poster}`}`}
                alt="Movie poster"
              />
              <div className="overlay">
                <div className="title">{title}</div>
                <div className="rating">{rating}</div>
                <div className="plot">{overview}</div>
                <div
                  className="listToggle"
                  data-toggled={my_list}
                  onClick={updateMovieList}
                >
                  <div>
                    <i className="fa fa-fw fa-plus"></i>
                    <i className="fa fa-fw fa-check"></i>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <div>No movies to show!</div>;
  }
};

export default MovieDetail;
