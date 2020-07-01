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
  const appDispatch = useContext(DispatchContext);
  const [check, setCheck] = useState(true);
  const [activePage, setActivePage] = useState(15);

  const handleCheck = () => {
    setCheck(!check);
    if (check) {
      appDispatch({ type: "toggleStaticData", value: "check" });
      /*  setRecipes(recipes.slice(17, recipes.length)); */
    }
  };

  console.log(appState.filteredRecipeIds);

  const filteredRecipes = appState.filteredRecipeIds?.map((id) =>
    appState.recipes.find((recipe) => recipe.id === id)
  );

  console.log("showFR", filteredRecipes);

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
        Recipes found:{" "}
        <span>
          {appState.filteredRecipeIds
            ? appState.filteredRecipeIds.length
            : appState.recipes.length}
        </span>
      </p>
      <div className="flexWrap">
        <ShowRecipes
          recipes={
            filteredRecipes !== undefined ? filteredRecipes : appState.recipes
          }
        />
      </div>

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

const ShowRecipes = ({ recipes }) => {
  return recipes.map((element, i) => <Recipe key={i} {...element} />);
};

export const Recipe = ({ name, id, image }) => {
  const appDispatch = useContext(DispatchContext);
  console.log(name);

  const handleDelete = () => {
    appDispatch({
      type: "deleteRecipes",
      value: id,
    });
  };

  return (
    <div className="recipecard">
      <h3 className="recipename">{name}</h3>
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="card_icons">
        <div>
          <Link to={`/recipe/${id}`} className="details">
            Details
          </Link>
        </div>
        <div>
          <Link to={`/recipes/edit/${id}`} className="edit">
            Edit
          </Link>
        </div>
        <div>
          <button className="delete" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllRecipes;

/*     if (appState.filteredRecipeIds !== null) {
      const updatedFilteredRecipeIds = appState.filteredRecipeIds.filter(
        (recipeId) => recipeId !== id
      );
      appDispatch({
        type: "filtereRecipeIds",
        value: updatedFilteredRecipeIds,
      });
    }
      const recipes = JSON.parse(localStorage.getItem("recipes")); 
    const updatedR = appState.recipes.filter((recipe) => recipe.id !== id);
    localStorage.setItem("recipes", JSON.stringify(updatedR));
    appDispatch({ type: "setRecipes", value: updatedR }); */
