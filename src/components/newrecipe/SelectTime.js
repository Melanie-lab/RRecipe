import React from "react";

const SelectTime = (props) => {
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
      <p>min</p>
    </div>
  );
};

export default SelectTime;
