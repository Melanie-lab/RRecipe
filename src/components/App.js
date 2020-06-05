import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import DefaultLayout from "../layouts/Default";
import Welcome from "./welcome_page/Welcome";
import AllRecipes from "./allrecipes/Allrecipes";
import FormikNewrecipe from "./newrecipe/FormikNewRecipe";
/* import recipeData from "../data/recipes.json"; */
import recipeData from "../data/Data";
import RecipeDetails from "./allrecipes/recipedetails/Recipedetails";
import "./_app.scss";
import { animated, useTransition } from "react-spring";
import Categories from "./allrecipes/categories/Categories";

export const recipeDataContext = React.createContext(recipeData);

const App = () => {
  const [filteredRecipes, setFilteredRecipes] = React.useState(recipeData);
  const recipeValue = { filteredRecipes, setFilteredRecipes, recipeData };
  const location = useLocation();

  const transitions = useTransition(location, (location) => location.key, {
    from: {
      opacity: 0,
      position: "absolute",
      width: "100%",
      transform: "translate3d(100%, 0, 0)",
    },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(-50%, 0, 0)" },
  });

  return transitions.map(({ item, props: transition, key }) => (
    <animated.div key={key} style={transition}>
      <recipeDataContext.Provider value={recipeValue}>
        <Switch location={item}>
          <Route path="/recipe/new" exact>
            <DefaultLayout>
              <FormikNewrecipe />
            </DefaultLayout>
          </Route>

          <Route path={`/recipes/:category`}>
            <DefaultLayout>
              <Categories />
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
    </animated.div>
  ));
};

export default App;
