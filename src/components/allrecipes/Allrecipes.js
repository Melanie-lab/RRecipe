import React, { useContext, useState } from "react";
import "./_allrecipes.scss";
import { Link } from "react-router-dom";
import { recipeDataContext } from "../App";
import recipesJSON from "../../data/recipes.json";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const AllRecipes = () => {
  const { filteredRecipes: recipes } = useContext(recipeDataContext);
  const [check, setCheck] = useState(false);

  return (
    <div>
      <h2>Recipes:</h2>
      <FormControlLabel
        control={
          <Switch
            checked={check}
            onChange={() => setCheck(!check)}
            name="checkedA"
            color="default"
          />
        }
        label="Including static data"
      />
      <p>
        Yummie recipes found: <span>{recipes.length}</span>
      </p>
      <ShowRecipes recipes={recipes} />
    </div>
  );
};

const ShowRecipes = ({ recipes }) => {
  return recipes.map((element, i) => (
    <div key={i} className="recipe_container">
      <Recipe {...element} />
    </div>
  ));
};

export const Recipe = ({ name, id, image }) => {
  return (
    <div className="recipecard">
      <h3 className="recipename">{name}</h3>
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="card_icons">
        <Link to={`/recipe/${id}`} className="details">
          Details
        </Link>
        <button className="edit">Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default AllRecipes;

let item;
for (var i = 0; i < localStorage.length; i++) {
  item = localStorage.getItem(localStorage.key(i));
  recipesJSON.push(item);
}
