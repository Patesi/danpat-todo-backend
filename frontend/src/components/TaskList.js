import React, { useEffect } from "react";
import axios from "axios";
import Task from "./Task.js";
const baseUrl = "http://localhost:8080/tasks";

const TaskList = ({
  tasks,
  setTasks,
  queryKey1,
  queryValue1,
  queryKey2,
  queryValue2,
  order,
}) => {
  useEffect(() => {
    (async () => {
      const hr = await axios.get(
        `${baseUrl}?${queryKey1}=${queryValue1}&${queryKey2}=${order}${queryValue2}`
      );
      const tasks = hr.data;
      setTasks(tasks);
      console.log("get");
    })();
  }, [queryValue1, queryValue2, queryKey1, order]); // eslint-disable-line react-hooks/exhaustive-deps
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
