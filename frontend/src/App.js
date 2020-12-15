import React, { useState } from "react";
//import axios from "axios";
import "./scss/index.scss";
import ChangeView from "./ChangeView.js";
import TaskInput from "./components/TaskInput.js";
import TaskList from "./components/TaskList.js";
//import TaskRemove2 from "./components/TaskRemove2.js";
//import TaskRemove from "./components/TaskRemove.js";

function App() {
  const [title, setTitle] = useState("");
  const [header, setHeader] = useState("All");
  const [tasks, setTasks] = useState([]);
  const [visible, setVisible] = useState(false);

  const addTaskHandler = () => {
    setVisible(true);
    setHeader("Add Task");
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
                  Kategoriat
                </a>
              </li>
              <li>
                <a href="#this">Kaikki</a>
              </li>
              <li>
                <a href="#that">Tehty</a>
              </li>
              <li>
                <a href="#this">#Koulu</a>
              </li>
            </ul>
          </div>
          <div className="done">
            Tehty
            <hr />
          </div>
          <div className="main">
            Tehtävä
            <hr />
            <TaskList tasks={tasks} setTasks={setTasks} />
          </div>
          <div className="due_date">
            Määräaika
            <hr />
          </div>
          <div className="priority">
            Pri
            <hr />
          </div>
          <div className="input_field">
            {visible && (
              <TaskInput
                title={title}
                setTitle={setTitle}
                tasks={tasks}
                setTasks={setTasks}
                setVisible={setVisible}
                setHeader={setHeader}
              />
            )}
          </div>
          <div className="add_task">
            <button onClick={addTaskHandler} className="tab-button">
              Add task
            </button>
          </div>
          <div className="search_task">
            <ChangeView />
          </div>
        </div>
      </>
    </div>
  );
}

export default App;
