import React, { useState } from "react";
import axios from "axios";
import ChooseDate from "./ChooseDate.js";
import { formatDate } from "./Task.js";
import DropdownSelect, { dropdownValues } from "./DropdownSelect.js";
const url = "http://localhost:8080/tasks/";

const TaskInput = ({
  title,
  setTitle,
  tasks,
  setTasks,
  setShowForm,
  setHeader,
  setAddButtonStyle,
  setViewButtonStyle,
}) => {
  const [dueDate, setDueDate] = useState(new Date());
  const [priority, setPriority] = useState(5);
  const [tag, setTag] = useState();

  const saveTask = async () => {
    setShowForm(false);
    setHeader("Tasks");
    setAddButtonStyle("tab-button-inactive");
    setViewButtonStyle("tab-button-active");
    const hr = await axios.post(url, {
      title: title,
      due_date: formatDate(dueDate, "YYYY-MM-DD"),
      priority: priority,
      tag: tag,
    });
    const newTask = hr.data;
    setTasks([...tasks, newTask]);
    setTitle("");
  };
  const inputTextHandler = (e) => {
    setTitle(e.target.value);
  };
  const saveTaskHandler = (e) => {
    e.preventDefault();
    if (title) {
      saveTask();
    }
  };
  return (
    <form className="input_field">
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
      <button onClick={saveTaskHandler} className="submit-button" type="submit">
        Save
      </button>
    </form>
  );
};

export default TaskInput;
