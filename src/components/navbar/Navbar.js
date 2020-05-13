import React from "react";
import "./_navbar.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AllRecipes from "../allrecipes/Allrecipes";
import Newrecipe from "../newrecipe/Newrecipe";

const Navbar = () => {
  return (
    <Router>
      <div className="navlinks">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/allrecipes">See all recipes</Link>
            </li>
            <li>
              <Link to="/newrecipe">New recipe</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/allrecipes">
            <AllRecipes />
          </Route>
          <Route path="/newrecipe">
            <Newrecipe />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export const MenuBtn = () => {
  return (
    <div className="menu" role="link" aria-label="menu">
      <div className="bar1" aria-hidden="true"></div>
      <div className="bar1" aria-hidden="true"></div>
      <div className="bar1" aria-hidden="true"></div>
    </div>
  );
};

export default Navbar;
