import React from "react";
import "./menubtn.scss";

const MenuBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} className="menu" role="link" aria-label="menu">
      <div className="bar1" aria-hidden="true"></div>
      <div className="bar1" aria-hidden="true"></div>
      <div className="bar1" aria-hidden="true"></div>
    </button>
  );
};

export default MenuBtn;
