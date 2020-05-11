import React, { useState } from "react";
import "./_searchbar.scss";

const Searchbar = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);

  const onMagnifierClick = () => {
    setSearchVisible(true);
  };

  return (
    <div>
      <div
        className="searchbar"
        style={{ display: isSearchVisible ? "block" : "none" }}
      >
        <label>Search for recipes</label>
        <input type="text" />
      </div>
    </div>
  );
};

export default Searchbar;
