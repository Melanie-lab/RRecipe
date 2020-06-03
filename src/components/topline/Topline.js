import React, { useState, useRef, useContext } from "react";
import "./_topline.scss";
import Searchbar from "./searchbar/Searchbar";
import Navbar from "../navbar/Navbar";
import MenuBtn from "../navbar/MenuBtn";
import { CSSTransition } from "react-transition-group";
import { useLockBodyScroll, useToggle } from "react-use";
import { toggleNavContext } from "../../layouts/Default";

const Topline = ({ setFilteredRecipes }) => {
  const { navVisible, setNavVisible } = useContext(toggleNavContext);
  const [searchVisible, setSearchVisible] = useState(false);
  const searchRef = useRef(null);
  const [locked, toggleLocked] = useToggle(false);
  useLockBodyScroll(locked);

  const handleClick = () => {
    setNavVisible(!navVisible);
    toggleLocked(!locked);
  };

  return (
    <div className="topline-container">
      <header className="topline">
        <MenuBtn onClick={handleClick} />
        <h1>Yummie</h1>
        <button
          className="searchbtn"
          onClick={() => setSearchVisible(!searchVisible)}
        ></button>
      </header>
      {/* {searchVisible && ( */}
      <CSSTransition
        nodeRef={searchRef}
        in={searchVisible}
        timeout={500}
        classNames="searchtransition"
        appear
        unmountOnExit
        mountOnEnter
        /* onEnter={() => setSearchVisible(!searchVisible)} */
      >
        <Searchbar
          ref={searchRef}
          role="link"
          aria-label="search"
          setFilteredRecipes={setFilteredRecipes}
        />
      </CSSTransition>
      {/*   )} */}
      {navVisible && (
        <Navbar role="link" aria-label="menu" setNavVisible={setNavVisible} />
      )}
    </div>
  );
};

export default Topline;
