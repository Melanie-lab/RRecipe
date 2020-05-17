import React, { useState } from "react";
import "./_topline.scss";
import Searchbar from "./searchbar/Searchbar";
import Navbar from "../navbar/Navbar";
import MenuBtn from "../navbar/MenuBtn";
import { CSSTransition } from "react-transition-group";

const Topline = ({ setFilteredRecipes }) => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [navVisible, setNavVisible] = useState(false);
  const [inProp, setInProp] = useState(false);

  return (
    <div className="topline-container">
      <header className="topline">
        <MenuBtn onClick={() => setNavVisible(!navVisible)} />
        <CSSTransition in={inProp} timeout={10000} classNames="my-node">
          <h1>Yummie</h1>
        </CSSTransition>
        <button
          className="searchbtn"
          onClick={() => setSearchVisible(!searchVisible) && setInProp(true)}
        ></button>
      </header>
      <button type="button" onClick={() => setInProp(true)}>
        Transition
      </button>
      {searchVisible && (
        <CSSTransition in={inProp} timeout={30000} classNames="my-node">
          <Searchbar
            role="link"
            aria-label="search"
            setFilteredRecipes={setFilteredRecipes}
          />
        </CSSTransition>
      )}
      {navVisible && (
        <Navbar role="link" aria-label="menu" setNavVisible={setNavVisible} />
      )}
    </div>
  );
};

export default Topline;
