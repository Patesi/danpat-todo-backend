import React from "react";
import axios from "axios";
import TestiYkss from "./TestiYkss.js";
//import ChangeView from "./ChangeView.js";

export default class MainThing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      backendAddress: "http://127.0.0.1:4011/tasks",
    };
  }

  connectBackEnd = () => {
    axios.get(this.state.backendAddress).then(
      (response) => {
        this.setState({ tasks: response.data });
      },
      (error) => {
        alert("Eroorororo: " + error);
      }
    );
  };

  todoDataChanged = (id, title) => {
    let newTasks = [];
    const l = this.state.tasks.length;
    for (let i = 0; i < l; i++) {
      let newTask = { ...this.state.tasks[i] };
      if (newTask.id === id) {
        newTask.title = title;
      }
      newTasks.push(newTask);
    }
    this.setState({ tasks: newTasks });
  };

  componentDidMount() {
    this.connectBackEnd();
  }

  addTask = () => {
    fetch(this.state.backendAddress, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "",
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ tasks: [...this.state.tasks, data] });
      });
  };

  saveAll = () => {
    const l = this.state.tasks.length;
    for (let i = 0; i < l; i++) {
      let task = this.state.tasks[i];
      axios.put(this.state.backendAddress + "/" + task.id, task).then(
        (resp) => {
          console.log(resp);
        },
        (e) => {
          console.log(e);
        }
      );
    }
  };

  render() {
    /*const kikkeli = this.state.tasks.map((t) => (
      <ChangeView
        task={t}
        changeCallback={this.todoDataChanged}
        key={t.id.toString()}
      />
    ));*/
    return <></>;
  }
}
