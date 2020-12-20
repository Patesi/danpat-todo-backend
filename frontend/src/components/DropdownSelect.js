import React from "react";

export const dropdownValues = {
  tagValues: {
    None: null,
    Life: "Life",
    Misc: "Misc",
    School: "School",
    Work: "Work",
  },
  priorityValues: {
    5: 5,
    4: 4,
    3: 3,
    2: 2,
    1: 1,
  },
  sortValues: {
    Added: "creation_time",
    Deadline: "due_date",
    Priority: "priority",
    Title: "title",
    Completed: "is_done",
  },
  orderValues: {
    Ascending: "+",
    Descending: "-",
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
