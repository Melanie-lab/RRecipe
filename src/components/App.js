import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
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
  const match = useRouteMatch();
  return (
    <Switch>
      <recipeDataContext.Provider value={recipeData}>
        <Route path="/recipe/new">
          <DefaultLayout
            filteredRecipes={filteredRecipes}
            setFilteredRecipes={setFilteredRecipes}
          >
            <Newrecipe />
          </DefaultLayout>
        </Route>

        <Route path="/recipes/:category">
          <DefaultLayout
            filteredRecipes={filteredRecipes}
            setFilteredRecipes={setFilteredRecipes}
          >
            <div>Unterseite für die Rezepte Kategorien</div>
          </DefaultLayout>
        </Route>

        <Route path={`${match.path}/:topicId`}>
          <DefaultLayout
            filteredRecipes={filteredRecipes}
            setFilteredRecipes={setFilteredRecipes}
          >
            <RecipeDetails />
          </DefaultLayout>
        </Route>

        <Route path="/recipes">
          <DefaultLayout
            filteredRecipes={filteredRecipes}
            setFilteredRecipes={setFilteredRecipes}
          >
            <AllRecipes recipes={filteredRecipes} match={match} />
          </DefaultLayout>
        </Route>

        <Route path="/">
          <DefaultLayout
            filteredRecipes={filteredRecipes}
            setFilteredRecipes={setFilteredRecipes}
          >
            <Welcome />
          </DefaultLayout>
        </Route>
      </recipeDataContext.Provider>
    </Switch>
  );
};

export default App;
