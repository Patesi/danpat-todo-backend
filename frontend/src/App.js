import React, { useState } from "react";
//import axios from "axios";
import "./scss/index.scss";
import TaskInput from "./components/TaskInput.js";
import TaskList from "./components/TaskList.js";
import ViewSearch from "./components/ViewSearch";
//const baseUrl = "http://localhost:8080/tasks";

function App() {
  const [title, setTitle] = useState("");
  const [header, setHeader] = useState("Tasks");
  const [tasks, setTasks] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [queryKey1, setQueryKey1] = useState("is_done");
  const queryKey2 = "sort";
  const [queryValue1, setQueryValue1] = useState("0");
  const [queryValue2, setQueryValue2] = useState("creation_time");
  const [order, setOrder] = useState("+");
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
    setSearchValue("");
  };
  const viewTaskHandler = () => {
    setShowForm(false);
    setAddButtonStyle("tab-button-inactive");
    setViewButtonStyle("tab-button-active");
    setHeader("Tasks");
    setTitle("");
  };

  const filterHandler = (filterKey, filterValue) => {
    setQueryKey1(filterKey);
    setQueryValue1(filterValue);
    console.log("painettu");
    setShowForm(false);
    setAddButtonStyle("tab-button-inactive");
    setViewButtonStyle("tab-button-active");
    setHeader("Tasks");
    setSearchValue("");
  };
  return (
    <div className="App">
      <>
        <div className="container" id="root">
          <div className="header">{header}</div>
          <div className="side_menu">
            <ul>
              <li>
                <h3 className="side_items">Categories</h3>
              </li>
              <li>
                <button
                  onClick={() => filterHandler("is_done", "0")}
                  className="sidebar-button"
                >
                  To-do
                </button>
              </li>
              <li>
                <button
                  onClick={() => filterHandler("is_done", "1")}
                  className="sidebar-button"
                >
                  Completed
                </button>
              </li>
              <li>
                <button
                  onClick={() => filterHandler("priority", "1")}
                  className="sidebar-button"
                >
                  Important
                </button>
              </li>
              <li>
                <button
                  onClick={() => filterHandler("tag", "life")}
                  className="sidebar-button"
                >
                  #Life
                </button>
              </li>
              <li>
                <button
                  onClick={() => filterHandler("tag", "misc")}
                  className="sidebar-button"
                >
                  #Misc
                </button>
              </li>
              <li>
                <button
                  onClick={() => filterHandler("tag", "school")}
                  className="sidebar-button"
                >
                  #School
                </button>
              </li>
              <li>
                <button
                  onClick={() => filterHandler("tag", "work")}
                  className="sidebar-button"
                >
                  #Work
                </button>
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
            <ViewSearch
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              setQueryKey1={setQueryKey1}
              setQueryValue1={setQueryValue1}
              setQueryValue2={setQueryValue2}
              queryValue2={queryValue2}
              order={order}
              setOrder={setOrder}
            />
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
          <div className="content">
            <TaskList
              tasks={tasks}
              setTasks={setTasks}
              queryKey1={queryKey1}
              queryValue1={queryValue1}
              queryKey2={queryKey2}
              queryValue2={queryValue2}
              order={order}
            />
          </div>
        </div>
      </>
    </div>
  );
}

export default App;
