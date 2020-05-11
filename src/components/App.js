import React from "react";
import Topline from "./topline/Topline";
import "./_app.scss";
import Welcome from "./welcome_page/Welcome";
import AllRecipes from "./allrecipes//Allrecipes";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Topline />
        <div className="main">
          <div className="white_container">
            <Welcome />
            <AllRecipes />
          </div>
        </div>
        <footer className="footer">Impressum</footer>
      </div>
    );
  }
}

export default App;
