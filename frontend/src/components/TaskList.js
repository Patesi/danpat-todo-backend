import React, { useEffect } from "react";
import axios from "axios";
import Task from "./Task.js";
import { baseUrl } from "../App.js";

const TaskList = ({
  tasks,
  setTasks,
  queryKey1,
  queryValue1,
  queryKey2,
  queryValue2,
  order,
  setTaskValues,
  setShowEditForm,
  showEditForm,
  setHeader,
  showForm,
  trigger,
  setTrigger,
}) => {
  useEffect(() => {
    (async () => {
      const hr = await axios.get(
        `${baseUrl}?${queryKey1}=${queryValue1}&${queryKey2}=${order}${queryValue2}`
      );
      const newTasks = hr.data;
      setTasks(newTasks);
    })();
  }, [queryValue1, queryValue2, queryKey1, order, trigger]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="list-container">
      <ul className="todo-list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            due_date={task.due_date}
            priority={task.priority}
            is_done={task.is_done}
            tag={task.tag}
            setTaskValues={setTaskValues}
            showEditForm={showEditForm}
            setShowEditForm={setShowEditForm}
            showForm={showForm}
            setHeader={setHeader}
            trigger={trigger}
            setTrigger={setTrigger}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
