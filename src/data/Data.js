import recipeData from "./recipes.json";

let recipes = [...recipeData];
let check = false;

const handleCheck = (item) => {
  for (var i = 0; i < localStorage.length; i++) {
    item = localStorage.getItem(localStorage.key(i));
    check ? recipes.push(item) : (recipes = [].push(item));
  }
};

console.log(recipes);

export default recipes;

// ifcheckbox checked
