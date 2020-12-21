import React, { useState } from "react";
import axios from "axios";
import ChooseDate from "./ChooseDate.js";
import { formatDate } from "./Task.js";
import DropdownSelect, { dropdownValues } from "./DropdownSelect.js";
import { baseUrl } from "../App.js";

const TaskEdit = ({
  setShowEditForm,
  setHeader,
  setAddButtonStyle,
  setViewButtonStyle,
  taskValues,
  setTaskValues,
  trigger,
  setTrigger,
}) => {
  const [newTitle, setNewTitle] = useState(taskValues.title);
  const [newDueDate, setNewDueDate] = useState(new Date(taskValues.due_date));
  const [newPriority, setNewPriority] = useState(taskValues.priority);
  const [newTag, setNewTag] = useState(() =>
    taskValues.tag === null ? "" : taskValues.tag
  );

  const saveTask = async () => {
    setShowEditForm(false);
    setHeader("Tasks");
    setAddButtonStyle("tab-button-inactive");
    setViewButtonStyle("tab-button-active");
    await axios.put(`${baseUrl}/${taskValues.id}`, {
      id: taskValues.id,
      is_done: taskValues.is_done,
      title: newTitle,
      due_date: formatDate(newDueDate, "YYYY-MM-DD"),
      priority: newPriority,
      tag: newTag,
    });
    setTrigger(!trigger);
    setNewTitle("");
    setTaskValues({});
  };
  const inputTextHandler = (e) => {
    setNewTitle(e.target.value);
  };
  const saveTaskHandler = (e) => {
    e.preventDefault();
    if (newTitle && newTitle.length <= 60) {
      saveTask();
    }
  };
  return (
    <form className="input_field">
      <div className="due_dater input">
        <span className="pridd droppi">Priority</span>
        <DropdownSelect
          value={newPriority}
          setValue={setNewPriority}
          dropdownValues={dropdownValues.priorityValues}
        />
        <span className="tagdd droppi">Tag</span>
        <DropdownSelect
          value={newTag}
          setValue={setNewTag}
          dropdownValues={dropdownValues.tagValues}
        />
        <span>Deadline</span>
        <ChooseDate
          className="choose-date"
          dueDate={newDueDate}
          setDueDate={setNewDueDate}
        />
      </div>
      <input
        value={newTitle}
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

export default TaskEdit;
