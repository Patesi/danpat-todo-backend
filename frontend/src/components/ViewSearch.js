import React, { useState } from "react";
import axios from "axios";
import DropdownSelect, { dropdownValues } from "./DropdownSelect.js";
const url = "http://localhost:8080/tasks/";

const ViewSearch = ({
  searchValue,
  setSearchValue,
  setQueryValue1,
  setQueryKey1,
  queryValue2,
  setQueryValue2,
  order,
  setOrder,
}) => {
  const searchInputTextHandler = (e) => {
    setSearchValue(e.target.value);
  };
  const searchHandler = (e) => {
    e.preventDefault();
    if (searchValue) {
      setQueryKey1("search");
      setQueryValue1(searchValue);
      console.log("searching");
      setSearchValue("");
    }
  };
  return (
    <div className="input_field">
      <div className="pri_tag input">
        Sort by
        <DropdownSelect
          value={queryValue2}
          setValue={setQueryValue2}
          dropdownValues={dropdownValues.sortValues}
        />
        <DropdownSelect
          value={order}
          setValue={setOrder}
          dropdownValues={dropdownValues.orderValues}
        />
        <span className="filler">Lorem ipsum sis sos sasas_k!!</span>
      </div>
      <input
        value={searchValue}
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
