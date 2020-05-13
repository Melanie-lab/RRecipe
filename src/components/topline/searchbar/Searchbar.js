import React from "react";
import "./_searchbar.scss";

const Searchbar = () => {
  const [searchinput, setSearchinput] = React.useState("");

  const isLowerCase = searchinput === searchinput.toLowerCase();
  const error = isLowerCase ? null : "Please use lower case";

  const searchInputRef = React.useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(searchinput);
  };

  function handleChange(event) {
    setSearchinput(event.target.value.toLowerCase());
  }

  return (
    <div className="searchbar">
      <form className="searchform" onSubmit={handleSubmit}>
        <label htmlFor="searchinput">Search for your favourite Recipe:</label>
        <div className="inputwrapper">
          <input
            ref={searchInputRef}
            onChange={handleChange}
            id="searchinput"
            placeholder="Search..."
            type="text"
            value={searchinput}
          />
          <button disabled={Boolean(error)} type="submit"></button>
        </div>
        <div style={{ color: "red" }}>{error}</div>
      </form>
    </div>
  );
};

export default Searchbar;
