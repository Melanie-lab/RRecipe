import React from "react";
import "./welcome_page.scss";

class Welcome extends React.Component {
  /*   state = {};

  componentDidMount() {
    const linkFish = document.querySelector(".link fish");
    linkFish.addEventListener("click", myFunction);
  }
 */
  render() {
    return (
      <div className="welcome_page">
        <div className="welcome_text">
          <h2>Welcome to Yummie</h2>
          <p>Your favourite Recipe App</p>
        </div>
        <div className="link_buttons">
          <MainButton link="#Top" className="fish" text="fish" />
          <MainButton link="#Top" className="link meat" text="meat" />
          <MainButton link="#Top" className="link veggie" text="veggie" />
          <MainButton link="#Top" className="link desert" text="desert" />
        </div>
      </div>
    );
  }
}

const MainButton = (props) => {
  return (
    <div>
      <a className={props.className} href={props.link}>
        {props.text}
      </a>
    </div>
  );
};

export default Welcome;
