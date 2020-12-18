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
      {
        <>
          <span className="taskTitle">{title}</span>
          <span className="taskDate">{formatDate(due_date, "DD-MM-YYYY")}</span>
          <span className="taskPriority">{priority}</span>
        </>
      }
    </li>
  );
};

export default Task;
/*{title} {formatDate(due_date, "DD-MM-YYYY")} {priority}*/
