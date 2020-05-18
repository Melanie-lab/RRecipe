import React, { useState } from "react";
import "./_newrecipe.scss";

const Newrecipe = () => {
  let inputData = {
    recipename: "",
    ingredients: "",
  };
  const [input, setInput] = useState(inputData);

  const handleSubmit = (e) => {
    const value = e.currentTarget.value;
    console.log(inputData);
    inputData = { ...input, [e.target.name]: value };

    const storeData = localStorage.setItem(
      inputData.recipename.value,
      JSON.stringify(inputData)
    );
    setInput(storeData);
  };

  return (
    <div className="new_recipe_container">
      <h2>New Recipe:</h2>
      <form className="new_recipe_form" onSubmit={handleSubmit}>
        <label htmlFor="recipename">Recipe name:</label>
        <input
          /* ref="recipeName" */
          id="recipename"
          type="text"
          name="recipename"
          /* value={inputData.recipename}
          onChange={handleChange} */
          required
        />
        <label>Ingredients</label>
        <input
          type="text"
          name="ingredients"
          /* value={inputData.ingredients} */
          /* onChange={handleChange} */
          required
        />
        <Selectfield
          /* ref={prepRef} */
          id="preptime"
          time="preptime"
          timetext="Preparation time:"
        />
        <Selectfield id="cooktime" time="cooktime" timetext="Cooking time:" />
        <label htmlFor="instructions">Instructions:</label>
        <textarea id="instructions" rows="5"></textarea>
        <button className="submit-button" type="submit" onSubmit={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

const Selectfield = (props) => {
  return (
    <div className="selectfield">
      <label htmlFor={props.time}>{props.timetext}</label>
      <select id={props.preptime}>
        <option value="5">5</option>
        <option value="10"> 10</option>
        <option value="15"> 15</option>
        <option value="20"> 20</option>
        <option value="25"> 25</option>
        <option value="30"> 30</option>
        <option value="35"> 35</option>
        <option value="40"> 40</option>
        <option value="45"> 45</option>
        <option value="50"> 50</option>
        <option value="55"> 55</option>
        <option value="60"> 60</option>
        <option value="75"> 75</option>
        <option value="90"> 90</option>
        <option value="120"> 120</option>
      </select>
      min
    </div>
  );
};

export default Newrecipe;
/* const handleSubmit = (event) => {
  event.preventDefault();
  const recipeData = {
    recipeName: inputField[0].value,
    ingredients: inputField[1].value,
    cookTime: selectField[1].value,
    prepTime: selectField[2].value,
    instructions: textAreaField[0].value,
  };
  let key = 0;
  key += 1;
  const inputData = localStorage.setItem(key, JSON.stringify(recipeData));
  setStoreInput(inputData);  */
