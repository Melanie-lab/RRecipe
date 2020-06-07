import React, { useContext, useState } from "react";
import "./_allrecipes.scss";
import { Link } from "react-router-dom";
import { recipeDataContext } from "../App";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const AllRecipes = () => {
  const { filteredRecipes: recipes } = useContext(recipeDataContext);
  const [initialRecipes, setRecipes] = useState(recipes);
  const [check, setCheck] = useState(true);

  const handleCheck = () => {
    setCheck(!check);
    if (check) {
      setRecipes(recipes.slice(17, recipes.length));
    }
  };

  return (
    <div>
      <h2>Recipes:</h2>
      <FormControlLabel
        control={
          <Switch
            checked={check}
            onChange={handleCheck}
            name="checkedA"
            color="default"
          />
        }
        label="Including static data"
      />
      <p>
        Yummie recipes found: <span>{recipes.length}</span>
      </p>
      <ShowRecipes
        recipes={initialRecipes} /*  handleDelete={handleDelete}  */
      />
    </div>
  );
};

const ShowRecipes = ({ recipes /* , handleDelete */ }) => {
  return recipes.map((element, i) => (
    <div key={i} className="recipe_container">
      <Recipe {...element} /* handleDelete={handleDelete} */ />
    </div>
  ));
};

export const Recipe = ({ name, id, image }) => {
  const { filteredRecipes: recipes } = useContext(recipeDataContext);
  const [initialRecipes, setRecipes] = useState(recipes);
  console.log(recipes);
  const handleDelete = () => {
    /*   const recipes = JSON.parse(localStorage.getItem("recipes")); */
    const found = initialRecipes.findIndex((e) => e.id === id);
    recipes.splice(found, 1);
    setRecipes(initialRecipes);
    localStorage.setItem("recipes", JSON.stringify([...initialRecipes]));
  };
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
        <button className="delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default AllRecipes;
