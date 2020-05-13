import React from "react";
import Topline from "./topline/Topline";
import "./_app.scss";
import Welcome from "./welcome_page/Welcome";
import AllRecipes from "./allrecipes//Allrecipes";
import Newrecipe from "./newrecipe/Newrecipe";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Topline />
        <div className="main">
          <div className="white_container">
            <Welcome />
            <hr />
            <h2>Recipes:</h2>
            <AllRecipes id="recipe" />
            <Newrecipe />
          </div>
        </div>
        <footer className="footer">Impressum</footer>
      </div>
    );
  }
}

export default App;
