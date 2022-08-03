import React, { Component } from "react";

class Overview extends Component {
  render() {
    const items = this.props.tasks.map((task) => {
      return (
        <li key={task.id} id={task.id}>
          {task.itemNumber}. {task.inputValue}{" "}
          <button onClick={this.props.deleteItem}>Delete</button>{" "}
          <button onClick={this.props.editItem}>Edit</button>{" "}
        </li>
      );
    });
    return <ul>{items}</ul>;
  }
}

export default Overview;
