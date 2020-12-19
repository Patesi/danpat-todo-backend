import React, { useEffect } from "react";
import axios from "axios";
import Task from "./Task.js";
const url = "http://localhost:8080/tasks?is_done=0";

const TaskList = ({ tasks, setTasks }) => {
  useEffect(() => {
    (async () => {
      const hr = await axios.get(url);
      const tasks = hr.data;
      setTasks(tasks);
    })();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="list-container">
      <ul className="todo-list"></ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          title={task.title}
          due_date={task.due_date}
          priority={task.priority}
        />
      ))}
    </div>
  );
};

export default TaskList;
