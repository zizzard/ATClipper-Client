import React from "react";
import "./App.css";

import Header from "./Header";
import LinkButton from "./LinkButton";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact={true}>
          <div className="main-container">
            <LinkButton link="/query" text="Query Database" />
            <LinkButton link="/add" text="Add to Database" />
          </div>
        </Route>
        <Route path="/query" exact={true}>
          <p>Query</p>
        </Route>
        <Route path="/add" exact={true}>
          <p>Add</p>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
