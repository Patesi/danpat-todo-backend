import React, { useState } from "react";
import axios from "axios";
import DropdownSelect, { dropdownValues } from "./DropdownSelect.js";
const url = "http://localhost:8080/tasks/";

const ViewSearch = ({ searchTerm, setSearchTerm }) => {
  const [sortValue, setSortValue] = useState(5);
  const [order, setOrder] = useState();
  const searchInputTextHandler = (e) => {
    setSearchTerm(e.target.value);
  };
  const searchHandler = (e) => {
    e.preventDefault();
    if (searchTerm) {
      console.log("searching");
      setSearchTerm("");
    }
  };
  return (
    <div className="input_field">
      <div className="priority input">
        Sort by
        <DropdownSelect
          value={sortValue}
          setValue={setSortValue}
          dropdownValues={dropdownValues.sortValues}
        />
      </div>
      <div className="tag input">
        <DropdownSelect
          value={order}
          setValue={setOrder}
          dropdownValues={dropdownValues.orderValues}
        />
      </div>
      <input
        value={searchTerm}
        onChange={searchInputTextHandler}
        type="text"
        className="text input"
      />
      <button onClick={searchHandler} className="submit-button" type="submit">
        Search
      </button>
    </div>
  );
};

export default ViewSearch;
