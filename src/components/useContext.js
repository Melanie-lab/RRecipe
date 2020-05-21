import React, (useContext) from "react";

export const recipeDataContext = React.createContext(recipeData);

const App = () => {
  const [filteredRecipes, setFilteredRecipes] = React.useState(recipeData);
  const recipeValue = { filteredRecipes, setFilteredRecipes, recipeData };

  return (
    <recipeDataContext.Provider value={recipeValue}>

        <Route path="/recipe/new" exact>
          <DefaultLayout>
            <Newrecipe />
          </DefaultLayout>
        </Route>

    </recipeDataContext.Provider>
  );
};

export default App;
