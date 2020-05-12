import React from "react";
import "./_searchbar.scss";

const Searchbar = () => {
  return (
    <div>
      <div className="searchbar">
        <label>Search for recipes</label>
        <input type="text" />
      </div>
    </div>
  );
};

export default Searchbar;
