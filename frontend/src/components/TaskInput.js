import React, { useState } from "react";
import axios from "axios";
//import Priority from "./Priority.js";
import ChooseDate from "./ChooseDate.js";
import DropdownSelect from "./DropdownSelect.js";
import { dropdownValues } from "./DropdownSelect.js";
const moment = require("moment");
const url = "http://localhost:8080/tasks/";

const TaskInput = ({
  title,
  setTitle,
  tasks,
  setTasks,
  onRemove,
  setVisible,
  setHeader,
}) => {
  const [dueDate, setDueDate] = useState(new Date());
  const [priority, setPriority] = useState();
  const [tag, setTag] = useState();

  const addTask = async () => {
    const hr = await axios.post(url, {
      title: title,
      due_date: moment(dueDate).format("YYYY-MM-DD"),
      priority: priority,
      tag: tag,
    });
    const newTask = hr.data;
    setTasks([...tasks, newTask]);
    setVisible(false);
    setHeader("All");
    setTitle("");
  };
  const inputTextHandler = (e) => {
    setTitle(e.target.value);
  };
  const saveTaskHandler = (e) => {
    e.preventDefault();
    if (title) {
      addTask();
    }
  };
  return (
    <form className="new-task">
      <div className="due_date input">
        Deadline
        <ChooseDate dueDate={dueDate} setDueDate={setDueDate} />
      </div>
      <div className="priority input">
        Priority
        <DropdownSelect
          value={priority}
          setValue={setPriority}
          dropdownValues={dropdownValues.priorityValues}
        />
      </div>
      <div className="tag input">
        Tag
        <DropdownSelect
          value={tag}
          setValue={setTag}
          dropdownValues={dropdownValues.tagValues}
        />
      </div>
      <input
        value={title}
        onChange={inputTextHandler}
        type="text"
        className="text input"
      />
      <button onClick={saveTaskHandler} className="save-button" type="submit">
        Save
      </button>
    </form>
  );
};

export default TaskInput;
