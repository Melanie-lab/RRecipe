import React, { useState } from "react";
import "./_newrecipe.scss";
import { useFormik } from "formik";

const Newrecipe = () => {
  const [count, setCount] = useState([1, 1, 1]);
  const formik = useFormik({
    initialValues: {
      recipeName: "",
      category: "",
    },
    onSubmit: (values) => {
      /* const key = initialValues.recipeName; */
      console.log(JSON.stringify(values, null));
    },
  });

  const renderIngredients = () => {
    return count.map((element, i) => (
      <Ingredients key={i} handleChange={formik.handleChange} {...element} />
    ));
  };

  const plus = () => {
    count.push(1);
    setCount(count);
    console.log(count);
  };

  return (
    <div className="new_recipe_container">
      <h2>New Recipe:</h2>
      <form className="new_recipe_form" onSubmit={formik.handleSubmit}>
        <label htmlFor="recipename">Recipe name:</label>
        <input
          id="recipeName"
          type="text"
          name="recipeName"
          onChange={formik.handleChange}
          value={formik.values.recipeName}
        />
        <label htmlFor="fish">Category: </label>
        <select
          className="selectfield category"
          id="category"
          name="category"
          onChange={formik.handleChange}
          value={formik.values.category}
        >
          <option value="fish">Fish</option>
          <option value="meat">Meat</option>
          <option value="veggie">Veggie</option>
          <option value="desert">Desert</option>
        </select>
        <hr></hr>
        <h3>Ingredients:</h3>
        <div className="form_ingredients">
          <button className="plus" type="button" onClick={plus}>
            +
          </button>
          <button className="min">-</button>
          <div className="ingredient_components">{renderIngredients()}</div>
          <button type="button" className="plus">
            +
          </button>
          <button type="button" className="min">
            -
          </button>
        </div>
        <hr></hr>
        <Selectfield
          id="preptime"
          time="preptime"
          timetext="Preparation time:"
        />
        <Selectfield id="cooktime" time="cooktime" timetext="Cooking time:" />
        <label htmlFor="instructions">Instructions:</label>
        <textarea id="instructions" rows="5"></textarea>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

//dropdown
const Ingredients = ({ handleChange }) => {
  return (
    <div>
      <br></br>

      <div className="ingredient_div">
        <div className="ingredients_div_div">
          <label>Ingredient</label>
          <input
            type="text"
            placeholder="Flour..."
            name="ingredients"
            onChange={handleChange}
          />
        </div>
        <div className="ingredient_amount_div">
          <label htmlFor="amount">Amount </label>
          <input className="amount" name="amount" placeholder="" />
        </div>
        <div className="ingredient_unit_div">
          <label htmlFor="unit">Unit </label>
          <select name="unit">
            <option>-</option>
            <option>g</option>
            <option>kg</option>
            <option>mL</option>
            <option>L</option>
          </select>
        </div>
      </div>
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

/*   const inputData = {
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
  }; */
