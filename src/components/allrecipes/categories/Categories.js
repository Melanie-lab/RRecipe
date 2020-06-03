import React from "react";
import "./categories.scss";
import { useParams } from "react-router-dom";
import recipes from "../../../data/recipes.json";
import { Recipe } from "../Allrecipes";

const Categories = () => {
  let { category: recipeCategory } = useParams();

  const catMatch = recipes.filter(
    ({ category }) => category === recipeCategory
  );

  return catMatch.map((e, i) => (
    <div key={i}>
      <h2>{catMatch.category}</h2>
      <Recipe name={catMatch.name} {...e} />
    </div>
  ));
};

export default Categories;
