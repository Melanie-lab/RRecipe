import recipeDataJSON from "./recipes.json";

let recipeData = [];
let recipeDataStorage = [];

const localStorageEmpty = JSON.parse(localStorage.getItem("recipes")) === null;
if (!localStorageEmpty) {
  recipeDataStorage = [...JSON.parse(localStorage.getItem("recipes"))];
}

const dublicateCheck = recipeDataStorage.some(
  (recipe, index) =>
    recipe.id === recipeDataJSON.map((recipe) => recipe.id)[index]
);

if (localStorageEmpty) {
  recipeData = [...recipeDataJSON];
  localStorage.setItem("recipes", JSON.stringify(recipeData));
} else if (!dublicateCheck) {
  recipeData = [
    ...recipeDataJSON,
    ...JSON.parse(localStorage.getItem("recipes")),
  ];
  localStorage.setItem("recipes", JSON.stringify(recipeData));
} else {
  recipeData = [...JSON.parse(localStorage.getItem("recipes"))];
}

export default recipeData;

// ifcheckbox checked
