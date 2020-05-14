import React from "react";
import Topline from "./topline/Topline";
import "./_app.scss";
import Welcome from "./welcome_page/Welcome";
import AllRecipes from "./allrecipes//Allrecipes";
import Newrecipe from "./newrecipe/Newrecipe";
import recipeData from "../data/recipes.json";

const App = () => {
  const [filteredRecipes, setFilteredRecipes] = React.useState(recipeData);

  return (
    <div className="ui container">
      <Topline
        recipeData={recipeData}
        setFilteredRecipes={setFilteredRecipes}
      />
      <div className="main">
        <div className="white_container">
          <Welcome />
          <hr />
          <h2>Recipes:</h2>
          <AllRecipes recipes={filteredRecipes} />
          <Newrecipe />
        </div>
      </div>
      <footer className="footer">Impressum</footer>
    </div>
  );
};

export default App;
