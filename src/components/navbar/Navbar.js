import React from "react";
import { Link } from "react-router-dom";
import "./_navbar.scss";

const Navbar = ({ setNavVisible }) => {
  const closeNav = () => setNavVisible(false);
  return (
    <div className="navlinks">
      <nav>
        <ul>
          <li>
            <Link onClick={closeNav} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={closeNav} to="/recipes">
              See all recipes
            </Link>
          </li>
          <li>
            <Link onClick={closeNav} to="/recipes/fish">
              Fish recipes
            </Link>
          </li>
          <li>
            <Link onClick={closeNav} to="/recipe/new">
              New recipe
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
