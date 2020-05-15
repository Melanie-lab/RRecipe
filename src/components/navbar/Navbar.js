import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import "./_navbar.scss";
import AllRecipes from "../allrecipes/Allrecipes";
import Newrecipe from "../newrecipe/Newrecipe";

const Navbar = () => {
  return (
    <div className="navlinks">
      <nav>
        <ul>
          <li>
            <Link smooth to="/">
              Home
            </Link>
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
        <Route path="/App#recipe">
          <AllRecipes />
        </Route>
        <Route path="/newrecipe">
          <Newrecipe />
        </Route>
        <Route path="/"></Route>
      </Switch>
    </div>
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
