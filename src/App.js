import React from "react";
import "./App.css";

import Header from "./Header";
import LinkButton from "./LinkButton";

import DatabaseQuery from "./DatabaseQuery";
import DatabaseAddition from "./DatabaseAddition";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact={true}>
          <div className="flex-center">
            <LinkButton link="/query" text="Query Database" />
            <LinkButton link="/add" text="Add to Database" />
          </div>
        </Route>
        <Route path="/query" exact={true}>
          <DatabaseQuery />
        </Route>
        <Route path="/add" exact={true}>
          <DatabaseAddition />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
