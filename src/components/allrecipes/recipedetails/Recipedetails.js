import React from "react";
import recipes from "../../../data/recipes.json";
import { useParams } from "react-router-dom";

const RecipeDetails = ({ match }) => {
  let { topicId } = useParams();
  match.params = { topicId: "tahini-bread-pudding" };

  const details = recipes.find(({ id }) => id === match.params.topicId);
  console.log(match.params);
  console.log(topicId);

  return (
    <div>
      <h2>{details.name}</h2>
      <p>Description</p>
    </div>
  );
};

export default RecipeDetails;
