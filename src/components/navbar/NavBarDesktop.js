import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbardesktop.scss";

const NavBarDesktop = () => {
  const [visible, setVisible] = useState(false);

  return (
    <nav>
      <NaviLink to="/" linktext="Home" />
      <NaviLink to="/about" linktext="About" />

      <NaviLink to="/recipe/new" linktext="Add new recipe" />
      <div className="recipesDropDownDiv" onClick={() => setVisible(!visible)}>
        <button className="dropdown">Recipes</button>
        {visible && <RecipesDropDown />}
      </div>
    </nav>
  );
};

const NaviLink = ({ linktext, to }) => {
  return <Link to={to}>{linktext}</Link>;
};

const RecipesDropDown = () => {
  return (
    <div className="recipesDropDown">
      <NaviLink to="/recipes" linktext="See all recipes" />
      <NaviLink to="/recipes/desert" linktext="Desert" />
      <NaviLink to="/recipes/maindish" linktext="Main dish" />
      <NaviLink to="/recipes/entree" linktext="Entrée" />
    </div>
  );
};

export default NavBarDesktop;
