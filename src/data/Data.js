import recipeDataJSON from "./recipes.json";

let recipeData = [...recipeDataJSON];
let check = true;

/* export const handleCheck = (item) => { */
let item;
for (let i = 0; i < localStorage.length; i++) {
  item = localStorage.getItem(localStorage.key(i));
  check ? recipeData.push(item) : (recipeData = [].push(item));
}
/* }; */

console.log(recipeData);

export default recipeData;

// ifcheckbox checked
