import React, { Component, Fragment } from "react";
import * as MovieAPI from "./lib/MovieAPI";

const url = "https://image.tmdb.org/t/p/w500";
const defaultImg = "/image-not-available.jpg";

// export default App;
class App extends Component {
  state = {
    movies: [],
    genres: [],
  };

  componentDidMount = () => {
    const movies = MovieAPI.getAll();
    movies.then((movie) => {
      this.setState({ movies: movie });
    });

    const genres = MovieAPI.genres();
    genres.then((genre) => {
      this.setState({ genres: genre });
    });
  };

  render = () => {
    // const [movies, setMovies] = useState();
    // setMovies(MovieAPI.getAll());

    return (
      <Fragment>
        <header className="header">
          <a href="/">
            <img
              src="https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png"
              alt="netflix-font"
              border="0"
            />
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
          <form id="search" className="search">
            <input type="search" placeholder="Search for a title..." value="" />
            <div className="searchResults"></div>
          </form>
        </header>

        <div className="titleList">
          <div className="title">
            {this.state.genres.map((genre) => {
              console.log(genre);
            })}
          </div>
        </div>
      </Fragment>
    );
  };
}

export default App;
