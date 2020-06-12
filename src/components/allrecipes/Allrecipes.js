import React, { useContext, useState } from "react";
import "./_allrecipes.scss";
import { Link } from "react-router-dom";
/* import { recipeDataContext } from "../Statehandler"; */
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Pagination from "react-js-pagination";
import DispatchContext from "../DispatchContext";
import StateContext from "../StateContext";

const AllRecipes = () => {
  /*   const { filteredRecipeIds, recipes } = useContext(recipeDataContext); */
  const appState = useContext(StateContext);
  const [check, setCheck] = useState(true);
  const [activePage, setActivePage] = useState(15);

  const handleCheck = () => {
    console.log("a");
    /*     setCheck(!check);
    if (check) {
      setRecipes(recipes.slice(17, recipes.length));
    } */
  };

  const filteredRecipes = appState.filteredRecipeIds?.map((id) =>
    appState.recipes.find((recipe) => recipe.id === id)
  );

  console.log(filteredRecipes);

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
        Yummie recipes found: <span>{appState.recipes.length}</span>
      </p>
      <ShowRecipes
        recipes={
          filteredRecipes !== undefined ? filteredRecipes : appState.recipes
        } /*  handleDelete={handleDelete}  */
      />
      <div>
        <Pagination
          className="pagination"
          activePage={activePage}
          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          onChange={(pageNumber) => setActivePage(pageNumber)}
        />
      </div>
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
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);
  /*   const {
    recipes,
    setRecipes,
    filteredRecipeIds,
    setFilteredRecipeIds,
  } = useContext(recipeDataContext); */

  const handleDelete = () => {
    const updatedFilteredRecipeIds = appState.filteredRecipeIds.filter(
      (recipeId) => recipeId !== id
    );
    /*   const recipes = JSON.parse(localStorage.getItem("recipes")); */
    const updatedR = appState.recipes.filter((recipe) => recipe.id !== id);
    localStorage.setItem("recipes", JSON.stringify(updatedR));
    appDispatch({ type: "setRecipes", value: updatedR });
    /*    setRecipes(updatedR); */
    appDispatch({ type: "filtereRecipeIds", value: updatedFilteredRecipeIds });
    /* setFilteredRecipeIds(updatedFilteredRecipeIds); */
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
        <Link to={`/recipes/edit/${id}`} className="edit">
          Edit
        </Link>
        <button className="delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default AllRecipes;
