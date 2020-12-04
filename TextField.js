import React from "react";

export default class TextField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDone_spe: props.task.isDone,
      dueDate_spe: props.task.dueDate,
      priortity_spe: props.task.priority,
    };
  }
  handleTitleChange = (e) => {
    const title = e.target.value;
    this.props.changeCallback(
      this.props.task.id,
      title,
      this.state.isDone_spe,
      this.state.dueDate_spe,
      this.state.priortity_spe
    );
  };

  componentDidMount() {
    document.getElementById(
      this.props.task.id.toString()
    ).value = this.props.task.title;
  }

  componentDidUpdate() {
    document.getElementById(
      this.props.task.id.toString()
    ).value = this.props.task.title;
  }

  render() {
    let selectTdElements = ["isDone_spe", "dueDate_spe", "prioirity_spe"].map(
      (part) => (
        <td key={part}>
          <select
            value={this.state[part]}
            onChange={(e) => this.handleSpecChange(part, e)}
          ></select>
        </td>
      )
    );

    return (
      <p>
        <input
          type="text"
          id={this.props.task.id.toString()}
          placeholder="Student, New"
          onChange={this.handleNameChange}
        ></input>
      </p>
    );
  }
}
