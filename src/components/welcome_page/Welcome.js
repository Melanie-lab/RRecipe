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
      <div className="link_buttons">
        <MainButton href="#Top" className="link fish" text="fish" />
      </div>
    );
  }
}

const MainButton = (props) => {
  return (
    <div>
      <a>{this.props.text}</a>
    </div>
  );
};

export default Welcome;
