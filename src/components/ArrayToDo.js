import React, { Component } from 'react';
import ToDoArrows from './ToDoArrows';

class ArrayToDo extends Component {
  constructor() {
    super();
    this.state = {
      content: '',
      i: 0,
    };
  }

  toDoArray = () => {
    const arr = ['down', 'left', 'right', 'up'];
    const toDoArrRandom = [];
    for (let i = 0; i < 30; i += 1) {
      toDoArrRandom.push(arr[Math.floor(Math.random() * 4)]);
    }
    return toDoArrRandom;
  }

  render() {
    this.toDoArray();

    const { i } = this.state;

    return (
      <div>
        <ToDoArrows toDoArray={this.toDoArray()} />
      </div>
    );
  }
}

export default ArrayToDo;
