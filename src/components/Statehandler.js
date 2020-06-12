import React, { useState } from "react";
import recipeData from "../data/Data";
import { useImmerReducer } from "use-immer";

import DispatchContext from "./DispatchContext";
import StateContext from "./StateContext";

const Statehandler = ({ children }) => {
  const initialState = {
    recipes: recipeData,
    filteredRecipeIds: [],
  };

  const reducer = (draft, action) => {
    switch (action.type) {
      case "setRecipes":
        draft.recipes = action.value;
        console.log(action.value);
        return;
      case "editRecipes":
        draft.recipes.name = action.value;
        return;
      case "filteredRecipeIds":
        draft.filteredRecipeIds = action.value;
        return;
      default:
        return state;
    }
  };

  const [state, dispatch] = useImmerReducer(reducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export default Statehandler;

/* export const recipeDataContext = React.createContext();

const Statehandler = ({ children }) => {
  const [recipes, setRecipes] = useState(recipeData);
  const [filteredRecipeIds, setFilteredRecipeIds] = useState(null);
  const recipeValue = {
    filteredRecipeIds,
    setFilteredRecipeIds,
    recipes,
    setRecipes,
  };
  return (
    <recipeDataContext.Provider value={recipeValue}>
      {children}
    </recipeDataContext.Provider>
  );
}; */
