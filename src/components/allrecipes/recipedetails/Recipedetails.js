import React, { useState, useRef } from "react";
import recipes from "../../../data/recipes.json";
import { useParams } from "react-router-dom";
import "./_recipedetails.scss";

const RecipeDetails = () => {
  let { id: recipeId } = useParams();
  const portionsRef = React.useRef();
  const [portion, setPortion] = useState(1);
  const details = recipes.find(({ id }) => id === recipeId);

  const Ingredient = () => {
    console.log(details);
    return details.ingredient.map((e, i) => (
      <ul key={i} className="ingr_details">
        <li>
          {e.amount}
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
      <p>{details.description}</p>
      <form>
        <label htmlFor="portions">How many portions do you want cook?</label>
        <select
          ref={portionsRef}
          name="portions"
          id="portions"
          /* value={portion} */
          /* onChange={setPortion(2)} */
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
      </form>
      <Ingredient />
      <div className="arrowbtns">
        <button className="btn-left">Left</button>
        <button className="btn-right">Right</button>
      </div>
    </div>
  );
};

export default RecipeDetails;
