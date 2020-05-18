import React, { useContext, useReducer } from "react";
import "./_searchbar.scss";
import { recipeDataContext } from "../../App";

const Searchbar = ({ setFilteredRecipes }) => {
  const recipeDetails = useContext(recipeDataContext);
  const [searchinput, setSearchinput] = React.useState("");

  const handleChange = (event) =>
    setSearchinput(event.currentTarget.value.toLocaleLowerCase());

  const handleSubmit = (event) => {
    event.preventDefault();
    let f = recipeDetails.filter((data) => {
      return data.name.toLocaleLowerCase().includes(searchinput) && data.name;
    });
    setFilteredRecipes(f);

    console.log(recipeDataContext);
  };

  return (
    <div className="searchbar">
      <form className="searchform" onSubmit={handleSubmit}>
        <label htmlFor="searchinput">Search for your favourite Recipe:</label>
        <div className="inputwrapper">
          <input
            onChange={handleChange}
            id="searchinput"
            placeholder="Search..."
            type="text"
            value={searchinput}
          />
          <button type="submit" onSubmit={handleSubmit}></button>
        </div>
      </form>
    </div>
  );
};

export default Searchbar;

/* form validation:  const searchInputRef = React.useRef();
ref={searchInputRef} 
<div style={{ color: "red" }}>{error}</div>
  const isLowerCase = searchinput === searchinput.toLowerCase();
  const error = isLowerCase ? null : "Please use lower case";
  disabled={Boolean(error)} */
