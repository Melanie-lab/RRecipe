import React from "react";
import { Switch, Route } from "react-router-dom";

import DefaultLayout from "../layouts/Default";
import Welcome from "./welcome_page/Welcome";
import AllRecipes from "./allrecipes/Allrecipes";
import Newrecipe from "./newrecipe/Newrecipe";
import recipeData from "../data/recipes.json";

import "./_app.scss";

const App = () => {
  /* ggf. macht es Sinn die Rezepte in einen React Context zu verschieben,da du darauf oft den Zugriff brauchst.
  Dann wären sie global verfügbar per useContext hook.
  Dann kann man das Default layout in die Dateien der Unterseiten verlegen und das Übergeben von filteredRecipes und
  setFilteredRecipes sparen */
  const [filteredRecipes, setFilteredRecipes] = React.useState(recipeData);

  return (
    <Switch>
      <Route path="/recipe/new">
        <DefaultLayout
          filteredRecipes={filteredRecipes}
          setFilteredRecipes={setFilteredRecipes}
        >
          <Newrecipe />
        </DefaultLayout>
      </Route>
      <Route path="/recipes/:category">
        {/* Schau dir hier zu mal parameter in react router an. Wenn du /recipes/fish aufrufst würde diese Route greifen
        und du könntest je nachdem was category ist reagieren und andere rezepte darstellen */}
        <DefaultLayout
          filteredRecipes={filteredRecipes}
          setFilteredRecipes={setFilteredRecipes}
        >
          <div>Unterseite für die Rezepte Kategorien</div>
        </DefaultLayout>
      </Route>
      <Route path="/recipes">
        <DefaultLayout
          filteredRecipes={filteredRecipes}
          setFilteredRecipes={setFilteredRecipes}
        >
          <AllRecipes recipes={filteredRecipes} />
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
    </Switch>
  );
};

export default App;
