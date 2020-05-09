import React from "react";
import "./_topline.scss";

const Topline = () => {
  return (
    <div className="topline-container">
      <header className="topline">
        <div className="menu" role="link" aria-label="menu">
          <div className="bar1" aria-hidden="true"></div>
          <div className="bar1" aria-hidden="true"></div>
          <div className="bar1" aria-hidden="true"></div>
        </div>
        <h1>Yummie</h1>
        <button className="searchbtn"></button>
      </header>
    </div>
  );
};

export default Topline;
