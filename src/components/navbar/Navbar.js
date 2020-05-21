import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./_navbar.scss";
import { toggleNavContext } from "../../layouts/Default";

const Navbar = () => {
  return (
    <div className="navlinks">
      <nav>
        <ul>
          <NaviLink to="/" linktext="Home" />
          <hr></hr>
          <NaviLink to="/recipes" linktext="See all recipes" />
          <ul>
            <NaviLink to="/recipes/fish" linktext="Fish" />
            <NaviLink to="/recipes/meat" linktext="Meat" />
            <NaviLink to="/recipes/Veggie" linktext="Veggie" />
            <NaviLink to="/recipes/Desert" linktext="Desert" />
          </ul>
          <hr></hr>
          <NaviLink to="/recipe/new" linktext="Add new recipe" />
        </ul>
      </nav>
    </div>
  );
};

const NaviLink = (props) => {
  const { setNavVisible } = useContext(toggleNavContext);
  const closeNav = () => setNavVisible(false);
  return (
    <li>
      <Link onClick={closeNav} to={props.to}>
        {props.linktext}
      </Link>
    </li>
  );
};

export default Navbar;
