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

const Recipe = ({ name, image }) => {
  console.log(image);
  return (
    <div>
      <p className="name">{name}</p>
      <figure>{/*    <img src={image} alt={name} /> */}</figure>
      <p className="description"></p>
    </div>
  );
};

export default AllRecipes;
