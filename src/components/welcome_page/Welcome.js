import React, { useState } from "react";
import "./welcome_page.scss";
import { useSpring, animated } from "react-spring";
import garden_image from "./garden.jpg";

const Welcome = () => {
  const categories = [
    "common super-market",
    "desert",
    "veggie",
    "vegan",
    "persian",
    "wochen-markt",
    "garden",
  ];

  const renderMainButtons = (category, i) => {
    const angle = ((2 * Math.PI) / categories.length) * i;
    const radius = 120;
    const pos = 102;
    const topP = pos + Math.cos(angle) * radius;
    const leftP = pos + Math.sin(angle) * radius;
    return (
      <MainButton
        link="#Top"
        className={`link ${category}`}
        text={category}
        style={{ top: topP, left: leftP, fontSize: "inherit" }}
        key={i}
      />
    );
  };

  return (
    <div className="welcome_page">
      <div className="welcome_text">
        <h2>Welcome to Zero Waste Recipes</h2>
        <div className="img_wrapper">
          <img src={garden_image} alt="garden_image" />
        </div>
        <h3>Choose your Style:</h3>
      </div>
      <div className="position_relative">
        <div className="green_circle">
          <div className="link_buttons">
            {categories.map(renderMainButtons)}
          </div>
        </div>
      </div>
    </div>
  );
};

const MainButton = ({ className, link, text, style }) => {
  const [isToggled, setToggle] = useState(false);
  const fade = useSpring({ fontSize: isToggled ? "0.5rem" : "1.75rem" });

  return (
    <div className="circle">
      <animated.div style={fade}>
        <a
          className={className}
          href={link}
          style={style}
          onClick={() => setToggle(!isToggled)}
        >
          {text}
        </a>
      </animated.div>
    </div>
  );
};

export default Welcome;
