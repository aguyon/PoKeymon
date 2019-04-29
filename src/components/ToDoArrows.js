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
    };
  }

  render() {
    const { toDoArrow } = this.props;
    return (
      <div>
        <div className="toDo"><img className="flecheToDo" src={imgs[toDoArrow]} alt=" " /></div>
      </div>
    );
  }
}

export default ToDoArrows;
