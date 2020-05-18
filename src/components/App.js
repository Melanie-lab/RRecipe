import React from "react";
import { Switch, Route } from "react-router-dom";
import DefaultLayout from "../layouts/Default";
import Welcome from "./welcome_page/Welcome";
import AllRecipes from "./allrecipes/Allrecipes";
import Newrecipe from "./newrecipe/Newrecipe";
import recipeData from "../data/recipes.json";
import RecipeDetails from "./allrecipes/recipedetails/Recipedetails";

import "./_app.scss";

export const recipeDataContext = React.createContext(recipeData);

const App = () => {
  const [filteredRecipes, setFilteredRecipes] = React.useState(recipeData);
  const recipeValue = { filteredRecipes, setFilteredRecipes, recipeData };

  return (
    <recipeDataContext.Provider value={recipeValue}>
      <Switch>
        <Route path="/recipe/new" exact>
          <DefaultLayout>
            <Newrecipe />
          </DefaultLayout>
        </Route>

        <Route path="/recipes/:category">
          <DefaultLayout>
            <div>Unterseite für die Rezepte Kategorien</div>
          </DefaultLayout>
        </Route>

        <Route path={`/recipe/:id`}>
          <DefaultLayout>
            <RecipeDetails />
          </DefaultLayout>
        </Route>

        <Route path="/recipes">
          <DefaultLayout>
            <AllRecipes />
          </DefaultLayout>
        </Route>

        <Route path="/">
          <DefaultLayout>
            <Welcome />
          </DefaultLayout>
        </Route>
      </Switch>
    </recipeDataContext.Provider>
  );
};

export default App;
