import React from "react";
import "./welcome_page.scss";
import ReactCSSTransitionGroup from "react-transition-group";

class Welcome extends React.Component {
  render() {
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
        {/* <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}
        >
          <p>Fading at Initial Mount</p>
        </ReactCSSTransitionGroup> */}
      </div>
    );
  }
}

const MainButton = (props) => {
  return (
    <a className={props.className} href={props.link}>
      {props.text}
    </a>
  );
};

export default Welcome;
