import React, { Component, Fragment } from "react";
import * as MovieAPI from "./lib/MovieAPI";
import { Switch, Route } from "react-router-dom";
import Home from "./home";

const url = "https://image.tmdb.org/t/p/w500";
const defaultImg = "/image-not-available.jpg";

function App() {
  return (
    <Switch>
      <Route>
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
