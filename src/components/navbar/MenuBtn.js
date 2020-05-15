import React from "react";

const MenuBtn = ({ onClick }) => {
  return (
    // TODO: Nutze hier unbedingt ein button element, egal was du dafür CSS mäßig verbiegen musst, damit du nicht die ganze accessbility nachrüsten musst
    <div onClick={onClick} className="menu" role="link" aria-label="menu">
      <div className="bar1" aria-hidden="true"></div>
      <div className="bar1" aria-hidden="true"></div>
      <div className="bar1" aria-hidden="true"></div>
    </div>
  );
};

export default MenuBtn;
