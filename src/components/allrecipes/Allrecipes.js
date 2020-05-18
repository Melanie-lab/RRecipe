import React, { useContext } from "react";
import "./_allrecipes.scss";
import { Link } from "react-router-dom";
import { recipeDataContext } from "../App";

/* import data from "../../data/recipes.json"; */

const AllRecipes = () => {
  const { filteredRecipes: recipes } = useContext(recipeDataContext);

  return (
    <div>
      <h2>Recipes:</h2>
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

const Recipe = ({ name, id, image }) => {
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
