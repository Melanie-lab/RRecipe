import React, { useReducer } from "react";
import recipeData from "../data/Data";

import DispatchContext from "./DispatchContext";
import StateContext from "./StateContext";

console.log(recipeData);
const Statehandler = ({ children }) => {
  const initialState = {
    recipes: recipeData,
    filteredRecipeIds: null,
  };

  const reducer = (state, action) => {
    console.log("reducer", action.value);
    console.log("state", state);
    switch (action.type) {
      case "setRecipes":
        return {
          ...state,
          recipes: action.value,
        };
      case "editRecipes":
        return {
          ...state,
          recipes: action.value,
        };
      case "storeFilteredRecipeIds":
        return { ...state, filteredRecipeIds: action.value };
      case "deleteRecipes":
        return {
          recipes: state.recipes.filter((recipe) => recipe.id !== action.value),
          /* localStorage.setItem("recipes", JSON.stringify(updatedR)) */
        };
      case "storeRecipes":
        return {
          ...state,
          recipes: action.value,
        };
      case "toggleStaticData":
        return (
          action.value && {
            recipes: state.recipes.filter(
              (recipe) => recipe.step === undefined
            ),
          }
        );

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export default Statehandler;

/* if (state.filteredRecipeIds !== null) {
  state.filteredRecipeIds.filter((recipeId) => recipeId !== id) 
} 
 */
