import React, { useState } from "react";
import "./welcome_page.scss";
import { useSpring, animated } from "react-spring";

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
    const angle = ((2 * Math.PI) / categories.length) * i;
    const radius = 80;
    const pos = 70;
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
        <h2>Welcome to Yummie</h2>
        <p>Choose your favourite style:</p>
      </div>
      <div className="link_buttons">{categories.map(renderMainButtons)}</div>
    </div>
  );
};

const MainButton = ({ className, link, text, style }) => {
  const [isToggled, setToggle] = useState(false);
  const fade = useSpring({ fontSize: isToggled ? "0.5rem" : "2rem" });

  return (
    <div>
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
