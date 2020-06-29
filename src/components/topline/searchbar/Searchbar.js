import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import "./_searchbar.scss";
/* import { recipeDataContext } from "../../Statehandler"; */
import DispatchContext from "../../DispatchContext";
import StateContext from "../../StateContext";

const Searchbar = React.forwardRef((props, ref) => {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);
  /*   const { recipes, setFilteredRecipeIds } = useContext(recipeDataContext); */
  const [searchinput, setSearchinput] = React.useState("");
  const history = useHistory();

  const handleChange = (event) =>
    setSearchinput(event.currentTarget.value.toLocaleLowerCase());

  const handleSubmit = (event) => {
    event.preventDefault();
    let f = appState.recipes.reduce((acc, data) => {
      if (data.name.toLocaleLowerCase().includes(searchinput)) {
        acc.push(data.id);
      }
      return acc;
    }, []);
    /*  f = recipeData.filter((data) => {
      return data.tag.filter((tags) => {
        console.log(tags);
        return tags.includes(searchinput) && tags.tag;
      });
    }); */
    /*  setFilteredRecipeIds(f); */
    appDispatch({ type: "storeFilteredRecipeIds", value: f });
    history.push({
      pathname: "/recipes",
      search: `?search=${encodeURIComponent(searchinput)}`, //useLocation()
    });
  };

  return (
    <div ref={ref} className="searchbar">
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
});

export default Searchbar;
