import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import "./_navbar.scss";
import { toggleNavContext } from "../../layouts/Default";
import { useSpring, animated } from "react-spring";
import { useClickAway } from "react-use";

const Navbar = () => {
  const { navVisible, setNavVisible } = useContext(toggleNavContext);
  const fadeIn = useSpring({
    transform: navVisible ? `translate3d(0,0,0)` : `translate3d(-110%,0,0)`,
  });
  const ref = useRef(null);
  useClickAway(ref, () => {
    setNavVisible(false);
  });

  return (
    <animated.div ref={ref} className="navlinks" style={fadeIn}>
      <nav>
        <ul>
          <NaviLink to="/" linktext="Home" />
          <hr></hr>
          <NaviLink to="/recipes" linktext="See all recipes" />
          <ul>
            <NaviLink to="/recipes/desert" linktext="Desert" />
            <NaviLink to="/recipes/maindish" linktext="Main dish" />
            <NaviLink to="/recipes/entree" linktext="Entrée" />
          </ul>
          <hr></hr>
          <NaviLink to="/recipe/new" linktext="Add new recipe" />
        </ul>
      </nav>
    </animated.div>
  );
};

const NaviLink = ({ linktext, to }) => {
  const { setNavVisible } = useContext(toggleNavContext);
  const closeNav = () => setNavVisible(false);
  return (
    <li>
      <Link onClick={closeNav} to={to}>
        {linktext}
      </Link>
    </li>
  );
};

export default Navbar;
