import React from "react";
const moment = require("moment");

const Task = ({ title, due_date, priority }) => {
  const formatDate = (date) => {
    if (date !== null) {
      return moment(date).format("DD-MM-YYYY");
    }
  };
  return (
    <li className="task">
      {title} {formatDate(due_date)} {priority}
    </li>
  );
};

export default Task;
