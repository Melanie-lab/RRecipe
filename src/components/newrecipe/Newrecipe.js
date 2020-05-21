import React, { useState } from "react";
import "./_newrecipe.scss";

const Newrecipe = () => {
  const inputData = {
    recipename: "",
    ingredients: "",
  };
  const [inputValue, setInputValue] = useState(inputData);

  const handleChange = (el) => {
    const input = el.currentTarget.value;
    const inputData = { ...inputValue, [el.target.name]: input };
    setInputValue(inputData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const key = inputValue.recipename;
    localStorage.setItem(key, JSON.stringify(inputValue));
  };

  return (
    <div className="new_recipe_container">
      <h2>New Recipe:</h2>
      <form className="new_recipe_form" onSubmit={handleSubmit}>
        <label htmlFor="recipename">Recipe name:</label>
        <input
          id="recipename"
          type="text"
          name="recipename"
          onChange={handleChange}
          required
        />
        <label htmlFor="fish">Category: </label>
        <select className="selectfield category">
          <option value="fish">Fish</option>
          <option value="meat">Meat</option>
          <option value="veggie">Veggie</option>
          <option value="desert">Desert</option>
        </select>
        <hr></hr>
        <br></br>
        <h3>Ingredients:</h3>
        <Ingredients handleChange={handleChange} />
        <hr></hr>
        <Selectfield
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

//dropdown
const Ingredients = (handleChange) => {
  return (
    <div>
      <button>+</button>
      <button>-</button>
      <br></br>
      <label>Ingredient</label>
      <button>x</button>
      <input type="text" name="ingredients" onChange={handleChange} required />
      <label htmlFor="amount">Amount </label>
      <input className="amount" name="amount" />
      <label htmlFor="unit">Unit </label>
      <select name="unit">
        <option></option>
        <option>g</option>
        <option>kg</option>
        <option>mL</option>
        <option>L</option>
      </select>
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
