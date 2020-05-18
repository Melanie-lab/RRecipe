import React from "react";
import "./welcome_page.scss";

const Welcome = () => {
  const buttons = document.querySelectorAll("MainButton");
  for (let i = 1; i < buttons.length + 1; i++) {
    let angle = ((2 * Math.PI) / buttons.length) * i;
    let radius = 180;
    let topP = 180 + Math.cos(angle) * radius;
    let leftP = 180 + Math.sin(angle) * radius;
    buttons[i - 1].style.top = topP + "px";
    buttons[i - 1].style.left = leftP + "px";
  }

  return (
    <div className="welcome_page">
      <div className="welcome_text">
        <h2>Welcome to Yummie</h2>
        <p>Choose your favourite style:</p>
      </div>
      <div className="link_buttons">
        <MainButton link="#Top" className="link Fish" text="Fish" />
        <MainButton link="#Top" className="link Meat" text="Desert" />
        <MainButton link="#Top" className="link Veggie" text="Veggie" />
        <MainButton link="#Top" className="link Arabic" text="Arabic" />
        <MainButton link="#Top" className="link Persian" text="Persian" />
        <MainButton link="#Top" className="link Indian" text="Indian" />
      </div>
    </div>
  );
};

const MainButton = (props) => {
  return (
    <a className={props.className} href={props.link}>
      {props.text}
    </a>
  );
};

export default Welcome;
