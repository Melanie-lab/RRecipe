import React from "react";
import recipes from "../../../data/recipes.json";
import { useParams } from "react-router-dom";
import "./_recipedetails.scss";

const RecipeDetails = ({ match }) => {
  let { id: recipeId } = useParams();

  const details = recipes.find(({ id }) => id === recipeId);
  return (
    <div className="rdetails">
      <h2>{details.name}</h2>
      <p>{details.description}</p>
      <img src={details.image} alt="" />
    </div>
  );
};

export default RecipeDetails;
