import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home";
import MyList from "./myList";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route exact path="/myList" component={MyList}></Route>
    </Switch>
  );
}

export default App;
