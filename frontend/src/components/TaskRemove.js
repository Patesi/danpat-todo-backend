import React from "react";

/*const remove = (index) => {
  setInputText([...tasks.slice(0, index), ...tasks.slice(index + 1)]);
};*/
const TaskRemove = ({ task, onRemove }) => {
  return (
    <div className="task">
      <span>{task.name}</span>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
};
/*<div className="tasks"> //Tee tässtä tollanen ku savetaskHndlr
  {tasks.map((task, index) => {
    <TaskRemove task={task} onRemove={() => remove(index)} />;
  })}
</div>;*/

export default TaskRemove;
