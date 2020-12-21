import React from "react";
import DropdownSelect, { dropdownValues } from "./DropdownSelect.js";

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
      setSearchValue("");
    }
  };
  return (
    <div className="input_field">
      <div className="pri_tag input">
        <span className="sortdd dropi">Sort by</span>
        <span className="sortdd dropin">by</span>
        <DropdownSelect
          value={queryValue2}
          setValue={setQueryValue2}
          dropdownValues={dropdownValues.sortValues}
        />
        <span className="filterdd dropin">Sort</span>
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
