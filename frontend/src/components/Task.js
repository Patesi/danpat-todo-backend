import React from "react";
const moment = require("moment");

export const formatDate = (date, format) => {
  if (date !== null) {
    return moment(date).format(format);
  } else return null;
};

const Task = ({ title, due_date, priority }) => {
  return (
    <li className="task">
      {/*<div className="taskTitle">{title}</div>
      <div className="taskDate">{formatDate(due_date, "DD-MM-YYYY")}</div>
  <div className="taskPriority">{priority}</div>*/}
      {title} {formatDate(due_date, "DD-MM-YYYY")} {priority}
    </li>
  );
};

export default Task;
