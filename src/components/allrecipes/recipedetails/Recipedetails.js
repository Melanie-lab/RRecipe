import React, { useState, useReducer } from "react";
import recipes from "../../../data/Data";
import { useParams } from "react-router-dom";
import "./_recipedetails.scss";
import { useImmerReducer } from "use-immer";

const RecipeDetails = () => {
  const portionsRef = React.useRef(null);
  let { id: recipeId } = useParams();
  const details = recipes.find(({ id }) => id === recipeId);
  const initialAmount = details.ingredient.map((ingr) =>
    Number.parseFloat(Number(ingr.amount)) ? ingr.amount : (ingr.amount = "")
  );

  console.log(initialAmount);
  const initialState = {
    portion: 1,
    amount: initialAmount,
  };

  function reducer(draft, action) {
    switch (action.type) {
      case "portion":
        return (draft.portion = Number(portionsRef.current.value));
      case "calcAmount":
        return (draft.amount = details.ingredient.map(
          (ingr) => Number(ingr.amount) * Number(draft.portion)
        ));
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleCalculation = (event) => {
    event.preventDefault();
    dispatch({ type: "portion", value: Number(portionsRef.current.value) });
    dispatch({
      type: "calcAmount",
      value: details.ingredient.map(
        (ingr) => Number(ingr.amount) * Number(state.portion)
      ),
    });
  };

  const Ingredient = ({ initialAmount }) => {
    return details.ingredient.map((e, i) => (
      <ul key={i} className="ingr_details">
        <li>
          {state.amount[i]}
          <span> </span>
          {e.unit}
          <span> </span>
          {e.name}
        </li>
      </ul>
    ));
  };

  return (
    <div className="rdetails">
      <h2>{details.name}</h2>
      <form>
        <label htmlFor="portions">How many portions do you want cook?</label>
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
      </form>
      <Ingredient amount={state.amount} />
    </div>
  );
};

export default RecipeDetails;
