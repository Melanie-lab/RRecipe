import React, { useState } from "react";
import "./_topline.scss";
import Searchbar from "./searchbar/Searchbar";
import Navbar from "../navbar/Navbar";
import { MenuBtn } from "../navbar/Navbar";
import { CSSTransition } from "react-transition-group";

const Topline = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [navVisible, setNavVisible] = useState(true);

  return (
    <div className="topline-container">
      <header className="topline">
        <MenuBtn onClick={() => setNavVisible(!navVisible)} />
        <h1>Yummie</h1>
        <button
          className="searchbtn"
          onClick={() => setSearchVisible(!searchVisible)}
        ></button>
      </header>
      <Animation />
      {searchVisible && <Searchbar role="link" aria-label="search" />}
      {navVisible && <Navbar role="link" aria-label="menu" />}
    </div>
  );
};

export default Topline;

function Animation() {
  const [inProp, setInProp] = useState(false);
  return (
    <div>
      <CSSTransition in={inProp} timeout={200} classNames="my-node">
        <div>Transition Try</div>
      </CSSTransition>
      <button type="button" onClick={() => setInProp(true)}>
        Click to Transition
      </button>
    </div>
  );
}
