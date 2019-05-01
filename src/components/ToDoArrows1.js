import React, { Component } from 'react';

import up from '../media/up.png';
import down from '../media/down.png';
import left from '../media/left.png';
import right from '../media/right.png';
import pokeball from '../media/pokeball.svg';

const imgs = {
  o: up,
  l: down,
  k: left,
  m: right,
};

class ToDoArrows1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { toDoArrow, output2 } = this.props;
    return (
      <div>
        <div className="toDo2">
          <div>
            <img className="flecheToDo" src={imgs[toDoArrow]} alt=" " />
          </div>
          <img className="pokeballU" src={pokeball} alt="up" id={`${output2}B`} />
        </div>
      </div>
    );
  }
}

export default ToDoArrows1;
