import React from "react";
import Topline from "./topline/Topline";
import "./_app.scss";
import Welcome from "./welcome_page/Welcome";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Topline />
        <div className="main">
          <div className="white_container"></div>
          <Welcome />
        </div>
        <footer className="footer">Impressum</footer>
      </div>
    );
  }
}

export default App;
