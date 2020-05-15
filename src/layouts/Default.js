import React from "react";

import Topline from "../components/topline/Topline";

const DefaultLayout = ({ children, recipeData, setFilteredRecipes }) => {
  return (
    <div className="ui container">
      <Topline
        recipeData={recipeData}
        setFilteredRecipes={setFilteredRecipes}
      />
      <div className="main">
        <div className="white_container">{children}</div>
      </div>
      <footer className="footer">Impressum</footer>
    </div>
  );
};

export default DefaultLayout;
