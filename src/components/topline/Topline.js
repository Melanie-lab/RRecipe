import React, { useState, useRef } from "react";
import "./_topline.scss";
import Searchbar from "./searchbar/Searchbar";
import Navbar from "../navbar/Navbar";
import MenuBtn from "../navbar/MenuBtn";
import { CSSTransition } from "react-transition-group";

const Topline = ({ setFilteredRecipes }) => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [navVisible, setNavVisible] = useState(false);
  const searchRef = useRef(null);
  console.log(searchVisible);

  return (
    <div className="topline-container">
      <header className="topline">
        <MenuBtn
          onClick={
            () => setNavVisible(!navVisible)
            /* &&  document.querySelector("body").style.overflow ="hidden" */
          }
        />
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
        timeout={3000}
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
