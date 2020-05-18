import React from "react";
import recipes from "../../../data/recipes.json";
import { useParams } from "react-router-dom";

const RecipeDetails = ({ match }) => {
  let { id: recipeId } = useParams();

  const details = recipes.find(({ id }) => id === recipeId);
  return (
    <div>
      <h2>{details.name}</h2>
      <p>Description</p>
    </div>
  );
};

export default RecipeDetails;
