import React, { useState, useRef, useContext } from "react";
import "./_topline.scss";
import Searchbar from "./searchbar/Searchbar";
import Navbar from "../navbar/Navbar";
import MenuBtn from "../navbar/MenuBtn";
import { CSSTransition } from "react-transition-group";
import { useLockBodyScroll } from "react-use";
import { toggleNavContext } from "../../layouts/Default";

const Topline = ({ setFilteredRecipes }) => {
  const { navVisible, setNavVisible } = useContext(toggleNavContext);
  const [searchVisible, setSearchVisible] = useState(false);

  const searchRef = useRef(null);
  useLockBodyScroll(navVisible);

  return (
    <div className="topline-container searchtransition">
      <header className="topline">
        <MenuBtn onClick={() => setNavVisible(!navVisible)} />
        <h1>Zero Waste Recipes</h1>
        <button
          className="searchbtn"
          onClick={() => setSearchVisible(!searchVisible)}
        ></button>
        <Searchbar className="searchbar_desktop" />
      </header>
      <CSSTransition
        nodeRef={searchRef}
        in={searchVisible}
        timeout={100}
        classNames="searchtransition"
        appear
        unmountOnExit
        mountOnEnter
      >
        <Searchbar
          ref={searchRef}
          role="link"
          aria-label="search"
          setFilteredRecipes={setFilteredRecipes}
          className="serachbar_mobile"
        />
      </CSSTransition>
      <Navbar role="link" aria-label="menu" setNavVisible={setNavVisible} />
    </div>
  );
};

export default Topline;
