import React from "react";
import "./_allrecipes.scss";
import { Link } from "react-router-dom";
/* import data from "../../data/recipes.json"; */
import RecipeDetails from "./recipedetails/Recipedetails";

const AllRecipes = ({ recipes, match }) => {
  return (
    <div>
      <h2>Recipes:</h2>
      <p>
        Yummie recipes found: <span>{/* filteredRecipes.length} */}</span>
      </p>
      <ShowRecipes match={match} recipes={recipes} />
      <RecipeDetails match={match} />
    </div>
  );
};

const ShowRecipes = ({ recipes, match }) => {
  return recipes.map((element, i) => (
    <div key={i} className="recipe_container">
      <Recipe {...element} match={match} />
    </div>
  ));
};

const Recipe = ({ match, name, id, image }) => {
  return (
    <div className="recipecard">
      <h3 className="recipename">{name}</h3>
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="card_icons">
        <Link to={`${match.params}/${id}`} className="details">
          Details
        </Link>
        <button className="edit">Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default AllRecipes;
