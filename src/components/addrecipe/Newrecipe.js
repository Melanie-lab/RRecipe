import React from "react";
import "./_newrecipe.scss";

const Newrecipe = () => {
  return (
    <div className="new_recipe_container">
      <h2>New Recipe:</h2>
      <form className="new_recipe_form">
        <Inputfield label="Recipe Name:" />
        <Inputfield label="Ingredients:" />
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

const Inputfield = (props) => {
  return (
    <div className="input_field">
      <label>
        {props.label}
        <input />
      </label>
    </div>
  );
};

export default Newrecipe;
