import React from "react";
import "./_topline.scss";
import Searchbar from "./searchbar/Searchbar";
import Navbar from "../navbar/Navbar";

const Topline = (props) => {
  return (
    <div className="topline-container">
      <header className="topline">
        <Navbar />
        <h1>Yummie</h1>
        <button className="searchbtn" onClick={props.onMagnifierClick}></button>
        <Searchbar role="link" aria-label="search" />
      </header>
    </div>
  );
};

export default Topline;
