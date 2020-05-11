import React from "react";
import "./allrecipes.scss";
import data from "../../data/recipes.json";

const AllRecipes = () => {
  return data.map((element, i) => (
    <div key={i} className="recipe_container">
      <Recipe {...element} />
    </div>
  ));
};

const Recipe = ({ name, description }) => (
  <div>
    <p className="name">{name}</p>
    <p className="description">{description}</p>
  </div>
);

export default AllRecipes;
