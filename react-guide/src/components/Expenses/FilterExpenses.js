import React, { useState } from "react";

import "./FilterExpenses.css";

const FilterExpenses = (props) => {
  // const [selectedYear, setSelectedYear] = useState("2000");

  const changeYearHandler = (e) => {
    props.onSelectYear(e.target.value);
  };

  return (
    <div className="filter">
      <label>
        <b>Filter by Year</b>
      </label>

      <select onChange={changeYearHandler} name="year" id="year">
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
      </select>
    </div>
  );
};

export default FilterExpenses;
