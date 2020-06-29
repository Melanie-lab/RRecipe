import React, { useContext, useState } from "react";
import "./editrecipe.scss";
import StateContext from "../../StateContext";
import { useParams } from "react-router-dom";
import DispatchContext from "../../DispatchContext";

const Editrecipe = () => {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);
  let { id: recipeId } = useParams();
  console.log(appState.recipes);
  const originalValue = appState.recipes.find(({ id }) => id === recipeId);
  console.log(originalValue);
  const [editValue, setEditValue] = useState(originalValue);

  const handleChange = (event) => {
    const updatedRecipe = {
      ...editValue,
      [event.target.name]: event.target.value,
    };
    setEditValue(updatedRecipe);
  };

  const handleSubmit = () => {
    appDispatch({ type: "editRecipes", value: editValue });
  };

  const removeIngr = () => {
    const removeIngr = editValue;
    removeIngr.ingredient.pop();
    setEditValue(removeIngr);
  };

  return (
    <div>
      <h2>Edit Recipe</h2>
      <form className="new_recipe_form" onSubmit={handleSubmit}>
        <label htmlFor="name">Recipe name:</label>
        <input
          name="name"
          className="name"
          value={editValue.name}
          onChange={handleChange}
        />
        <label htmlFor="category">Category</label>
        <select
          name="category"
          className="category"
          value={editValue.category}
          onChange={handleChange}
        >
          <option value="defaultValue">Select Category</option>
          <option value="entree">Entrée</option>
          <option value="mainDish">Main dish</option>
          <option value="desert">Desert</option>
        </select>
        <h3>Ingredients</h3>
        {editValue.ingredient.map((ingr, i) => (
          <div className="ingredient" key={i}>
            <div>
              <label htmlFor="ingredient.name">Ingredient</label>
              <input
                name="ingrName"
                className="ingredient"
                value={editValue.ingredient[i].name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="ingredient.amount">Amount</label>
              <input
                name="ingrAmount"
                className="amount"
                value={editValue.ingredient[i].amount}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="ingredient.unit">unit</label>
              <input
                name="ingrunit"
                className="unit"
                value={editValue.ingredient[i].unit}
                onChange={handleChange}
              />
            </div>
          </div>
        ))}
        <div className="edit_recipe_buttons">
          <button
            className="add_ingr"
            type="button"
            onClick={() =>
              editValue.ingredient.push({
                ingredient: "",
                amount: "",
                unit: "",
              })
            }
          >
            Add Ingredient
          </button>
          <button className="remove_ingr" type="button" onClick={removeIngr}>
            Remove Ingredient
          </button>
        </div>
        <label htmlFor="instructions">Instructions</label>
        <textarea></textarea>
        <button className="submit-button" type="submit">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Editrecipe;

/* onChange={e => dispatch({ type: "titleChange", value: e.target.value })} value={state.title.value}

case "titleChange":
  draft.title.hasErrors = false
  draft.title.value = action.value
 */
/* const appState = useContext(StateContext);
const appDispatch = useContext(DispatchContext);

const originalState = {
  name: {
    value: "",
    hasErrors: false,
  },
  category: {
    value: "",
  },
  ingrediendt: {
    name: { value: "", hasErrors: false },
    amount: {
      value: "",
      hasErrors: false,
    },
    unit: {
      value: "",
      hasErrors: false,
    },
  },
};

function reducer(draft, action) {
 switch (action.type) {
   case "nameChange":
     draft.name.hasErrors = false
     draft.name.value = action.value.name
     return
     case "categoryChange":
     draft.category.hasErrors = false
     draft.category.value = action.value.category
     return
     default:
    return action.state
 }
}

const [state, dispatch] = useImmerReducer(reducer, originalState) */
