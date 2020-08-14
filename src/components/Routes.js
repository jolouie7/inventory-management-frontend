import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import NavBar from "./NavBar";
import CategoryList from "../containers/CategoryList";
import ItemList from "../containers/ItemList"

export default function App() {
  return (
    <Router>
      <div>
        <NavBar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/category-list">
            <CategoryList />
          </Route>
          <Route path="/item-list">
            <ItemList />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
