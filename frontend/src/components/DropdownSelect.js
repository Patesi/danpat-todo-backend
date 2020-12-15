import React from "react";

export const dropdownValues = {
  tagValues: {
    None: "",
    School: "School",
    Work: "Work",
    Life: "Life",
    Misc: "Misc",
  },
  priorityValues: {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
  },
};

const DropdownSelect = (props) => {
  return (
    <>
      <select
        className="drop_down"
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
      >
        {Object.entries(props.dropdownValues).map(([name, value]) => (
          <option key={`${name}`} value={value}>
            {name}
          </option>
        ))}
      </select>
    </>
  );
};

export default DropdownSelect;
