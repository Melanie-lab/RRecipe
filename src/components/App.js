import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { animated, useTransition } from "react-spring";

import DefaultLayout from "../layouts/Default";
import Welcome from "./welcome_page/Welcome";
import AllRecipes from "./allrecipes/Allrecipes";
import FormikNewrecipe from "./newrecipe/FormikNewRecipe";
import RecipeDetails from "./allrecipes/recipedetails/Recipedetails";
import Categories from "./allrecipes/categories/Categories";
import Editrecipe from "./allrecipes/editrecipe/Editrecipe";
import Statehandler from "./Statehandler";

const App = () => {
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
      <Statehandler>
        <Switch location={item}>
          <Route path="/recipes/edit/:id" exact>
            <DefaultLayout>
              <Editrecipe headline="Edit Recipe" submittext="Save changes" />
            </DefaultLayout>
          </Route>

          <Route path="/recipe/new" exact>
            <DefaultLayout>
              <FormikNewrecipe headline="New Recipe" submittext="Submit" />
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
      </Statehandler>
    </animated.div>
  ));
};

export default App;
