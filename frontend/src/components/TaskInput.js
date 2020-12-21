import React, { useState } from "react";
import axios from "axios";
import ChooseDate from "./ChooseDate.js";
import { formatDate } from "./Task.js";
import DropdownSelect, { dropdownValues } from "./DropdownSelect.js";
import { baseUrl } from "../App.js";

const TaskInput = ({
  title,
  setTitle,
  setShowForm,
  setHeader,
  setAddButtonStyle,
  setViewButtonStyle,
  trigger,
  setTrigger,
}) => {
  const [dueDate, setDueDate] = useState(new Date());
  const [priority, setPriority] = useState(5);
  const [tag, setTag] = useState();

  const saveTask = async () => {
    setShowForm(false);
    setHeader("Tasks");
    setAddButtonStyle("tab-button-inactive");
    setViewButtonStyle("tab-button-active");
    await axios.post(`${baseUrl}/`, {
      title: title,
      due_date: formatDate(dueDate, "YYYY-MM-DD"),
      priority: priority,
      tag: tag,
    });
    setTrigger(!trigger);
    setTitle("");
  };
  const inputTextHandler = (e) => {
    setTitle(e.target.value);
  };
  const saveTaskHandler = (e) => {
    e.preventDefault();
    if (title && title.length <= 60) {
      saveTask();
    }
  };
  return (
    <form className="input_field">
      <div className="due_dater input">
        <span className="pridd droppi">Priority</span>
        <DropdownSelect
          value={priority}
          setValue={setPriority}
          dropdownValues={dropdownValues.priorityValues}
        />
        <span className="tagdd droppi">Tag</span>
        <DropdownSelect
          value={tag}
          setValue={setTag}
          dropdownValues={dropdownValues.tagValues}
        />
        <span className="DL-span droppi">Deadline</span>
        <ChooseDate
          className="choose-date"
          dueDate={dueDate}
          setDueDate={setDueDate}
        />
      </div>
      <input
        value={title}
        onChange={inputTextHandler}
        type="text"
        className="text input"
      />
      <button onClick={saveTaskHandler} className="submit-button" type="submit">
        Save
      </button>
    </form>
  );
};

export default TaskInput;
