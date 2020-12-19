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
        <span>Deadline</span>
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
