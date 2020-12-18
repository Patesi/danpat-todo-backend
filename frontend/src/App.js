import React, { useState } from "react";
//import axios from "axios";
import "./scss/index.scss";
import TaskInput from "./components/TaskInput.js";
import TaskList from "./components/TaskList.js";
import ViewSearch from "./components/ViewSearch";

function App() {
  const [title, setTitle] = useState("");
  const [header, setHeader] = useState("Tasks");
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [addButtonStyle, setAddButtonStyle] = useState("tab-button-inactive");
  const [viewButtonStyle, setViewButtonStyle] = useState("tab-button-active");

  /*         {
              document.addEventListener("DOMContentLoaded", (e) =>
                document
                  .querySelector(".add_task")
                  .addEventListener("click", (e) => addTaskHandler())
              );
            }*/
  const addTaskHandler = () => {
    setShowForm(true);
    setAddButtonStyle("tab-button-active");
    setViewButtonStyle("tab-button-inactive");
    setHeader("Add Task");
    setSearchTerm("");
  };
  const viewTaskHandler = () => {
    setShowForm(false);
    setAddButtonStyle("tab-button-inactive");
    setViewButtonStyle("tab-button-active");
    setHeader("Tasks");
    setTitle("");
  };
  return (
    <div className="App">
      <>
        <div className="container" id="root">
          <div className="header">{header}</div>
          <div className="side_menu">
            <ul>
              <li>
                <a className="side_items" href="#home">
                  Categories
                </a>
              </li>
              <li>
                <a href="#this">All</a>
              </li>
              <li>
                <a href="#that">Done</a>
              </li>
              <li>
                <a href="#this">Important</a>
              </li>
              <li>
                <a href="#this">#Life</a>
              </li>
              <li>
                <a href="#this">#Misc</a>
              </li>
              <li>
                <a href="#this">#School</a>
              </li>
              <li>
                <a href="#this">#Work</a>
              </li>
            </ul>
          </div>
          <div className="done">
            Done
            <hr />
          </div>
          <div className="main">
            Title
            <hr />
            <TaskList tasks={tasks} setTasks={setTasks} />
          </div>
          <div className="due_date">
            Deadline
            <hr />
          </div>
          <div className="priority">
            Pri
            <hr />
          </div>
          {showForm && (
            <TaskInput
              title={title}
              setTitle={setTitle}
              tasks={tasks}
              setTasks={setTasks}
              setShowForm={setShowForm}
              setHeader={setHeader}
              setAddButtonStyle={setAddButtonStyle}
              setViewButtonStyle={setViewButtonStyle}
            />
          )}
          {!showForm && (
            <ViewSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          )}
          <div className="add_task">
            <button onClick={addTaskHandler} className={addButtonStyle}>
              Add Task
            </button>
          </div>
          <div className="search_task">
            <button onClick={viewTaskHandler} className={viewButtonStyle}>
              Sort/Search Tasks
            </button>
          </div>
        </div>
      </>
    </div>
  );
}

export default App;
