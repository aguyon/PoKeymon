import React, { Component } from 'react';

import up from '../media/up.png';
import down from '../media/down.png';
import left from '../media/left.png';
import right from '../media/right.png';

const imgs = {
  up,
  down,
  left,
  right,
};

class ToDoArrows extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
  }

  /* keyIsToDo = () => {
    const { content, toDoArr, i } = this.state;
    if (content === toDoArrRandom[i]) {
      this.setState({ i: i + 1 });
    }
    return i;
  } */

  render() {
    const { toDoArray } = this.props;

    return (
      <div>
        <div className="toDo"><img src={imgs[toDoArray[0]]} alt="end" /></div>
      </div>
    );
  }
}

export default ToDoArrows;
