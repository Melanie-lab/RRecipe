import recipeDataJSON from "./recipes.json";

let recipeData = [];
if (!localStorage.getItem("recipes")) {
  recipeData = [...recipeDataJSON];
} else {
  recipeData = [
    ...recipeDataJSON,
    ...JSON.parse(localStorage.getItem("recipes")),
  ];
}

export default recipeData;

// ifcheckbox checked
