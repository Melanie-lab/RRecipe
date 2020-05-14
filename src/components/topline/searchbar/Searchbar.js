import React from "react";
import "./_searchbar.scss";

const Searchbar = ({ recipeData, setFilteredRecipes }) => {
  const [searchinput, setSearchinput] = React.useState("");
  const handleChange = (event) =>
    setSearchinput(event.currentTarget.value.toLocaleLowerCase());

  const handleSubmit = (event) => {
    event.preventDefault();
    let f = recipeData.filter((data) => {
      return data.name.toLocaleLowerCase().includes(searchinput) && data.name;
    });
    setFilteredRecipes(f);
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
          <button type="submit"></button>
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
