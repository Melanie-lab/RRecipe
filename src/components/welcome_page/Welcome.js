import React from "react";
import "./welcome_page.scss";

const Welcome = () => {
  const categories = [
    "fish",
    "desert",
    "veggie",
    "arabic",
    "persian",
    "indian",
  ];
  const renderMainButtons = (category, i) => {
    let angle = ((2 * Math.PI) / categories.length) * i;
    let radius = 50;
    let topP = 50 + Math.cos(angle) * radius;
    let leftP = 50 + Math.sin(angle) * radius;
    return (
      <MainButton
        link="#Top"
        className={`link ${category.toUpperCase()}`}
        text={category.toUpperCase()}
        style={{ top: topP, left: leftP }}
        key={i}
      />
    );
  };

  return (
    <div className="welcome_page">
      <div className="welcome_text">
        <h2>Welcome to Yummie</h2>
        <p>Choose your favourite style:</p>
      </div>
      <div className="link_buttons">{categories.map(renderMainButtons)}</div>
    </div>
  );
};

const MainButton = ({ className, link, text, style }) => {
  return (
    <a className={className} href={link} style={style}>
      {text}
    </a>
  );
};

export default Welcome;
