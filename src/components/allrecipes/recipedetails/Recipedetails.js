import React, { useReducer } from "react";
import recipes from "../../../data/Data";
import { useParams } from "react-router-dom";
import "./_recipedetails.scss";

const RecipeDetails = () => {
  const portionsRef = React.useRef(null);
  let { id: recipeId } = useParams();
  const details = recipes.find(({ id }) => id === recipeId);
  const initialAmount = details.ingredient.map((ingr) =>
    Number.parseFloat(Number(ingr.amount)) ? ingr.amount : (ingr.amount = "")
  );

  const initialState = {
    portion: 1,
    amount: initialAmount,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "portion":
        return {
          ...state,
          portion: Number(action.payload),
        };
      case "calcAmount":
        return {
          ...state,
          amount: action.payload.ingredient.map(
            (ingr) => Number(ingr.amount) * Number(state.portion)
          ),
        };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleCalculation = (event) => {
    event.preventDefault();
    dispatch({ type: "portion", payload: Number(portionsRef.current.value) });
    dispatch({
      type: "calcAmount",
      payload: details,
    });
  };

  const Ingredient = () => {
    return details.ingredient.map((e, i) => (
      <li key={i}>
        {state.amount[i]}
        <span> </span>
        {e.unit}
        <span> </span>
        {e.name}
      </li>
    ));
  };

  return (
    <div className="rdetails">
      <h2>{details.name}</h2>
      <p>You chose to prepare a {details.category}.</p>
      <h3>Ingredients</h3>
      <ol className="ingr_details">
        <Ingredient amount={state.amount} />
      </ol>
      <form>
        <div className="portion_container">
          <label htmlFor="portions" className="portions">
            How many portions you want to cook?
          </label>
          <div>
            <select
              ref={portionsRef}
              name="portions"
              id="portions"
              /*   value={portion}
          onChange={setPortion(event.target.value)} */
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
            </select>
            <button type="submit" onClick={handleCalculation}>
              Calculate
            </button>
          </div>
        </div>
      </form>
      <h3>Instructions</h3>
      <p>{details.step.map((step) => step.description + " ")} </p>
    </div>
  );
};

export default RecipeDetails;
