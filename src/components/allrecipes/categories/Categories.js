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

  const cat = catMatch[0].category;
  const name = cat.replace(/^\w/, (d) => d.toUpperCase());

  return (
    <div>
      <h2>{name}</h2>
      <p>
        Recipes found: <span>{catMatch.length}</span>
      </p>
      {catMatch.map((e, i) => (
        <div key={i}>
          <Recipe name={catMatch.name} {...e} />
        </div>
      ))}
    </div>
  );
};

export default Categories;
