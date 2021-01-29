import React from "react";
import { useGlobalContext } from "./context";
import * as MovieAPI from "./lib/MovieAPI";

const defaultImg = "/image-not-available.jpg";

const MyListDetail = () => {
  const { moviesMyList, isLoading, setMoviesMyList } = useGlobalContext();

  const toggleBtn = async (event) => {
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

  if (moviesMyList.length > 0) {
    return (
      <div className="titleList">
        <div className="title">
          <div className="titles-wrapper">
            {moviesMyList.map((movie) => {
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
                      onClick={toggleBtn}
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
        </div>
      </div>
    );
  } else {
    return <div>No movies to show!</div>;
  }
};

export default MyListDetail;
