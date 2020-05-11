import React from "react";
import "./_navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <MenuBtn />
      <div className="navlinks">
        <a href="#Top">Home</a>
        <a href="#Top">See all recipes</a>
        <a href="#Top">Add a new recipe</a>
        <a href="#Top">Contact</a>
      </div>
    </nav>
  );
};

const MenuBtn = () => {
  return (
    <div className="menu" role="link" aria-label="menu">
      <div className="bar1" aria-hidden="true"></div>
      <div className="bar1" aria-hidden="true"></div>
      <div className="bar1" aria-hidden="true"></div>
    </div>
  );
};

export default Navbar;
