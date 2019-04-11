/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { Component } from 'react';
import ArrowKeysReact from 'arrow-keys-react';

import upb from '../media/upb.png';
import downb from '../media/downb.png';
import leftb from '../media/leftb.png';
import rightb from '../media/rightb.png';
import up from '../media/up.png';
import down from '../media/down.png';
import left from '../media/left.png';
import right from '../media/right.png';

class Command extends Component {
  constructor() {
    super();
    this.state = {
      content: '',
      toDoArr: [down, right, left, up, right, left, down, right, left, left, up],
      i: 0,
    };

    ArrowKeysReact.config({
      left: () => {
        this.setState({
          content: left,
        });
      },
      right: () => {
        this.setState({
          content: right,
        });
      },
      up: () => {
        this.setState({
          content: up,
        });
      },
      down: () => {
        this.setState({
          content: down,
        });
      },
    });
  }

  isActiveR = () => {
    const { content } = this.state;
    if (content === right) {
      this.idR = 'active';
    } else {
      this.idR = 'inactive';
    }
    return this.idR;
  }

  isActiveL = () => {
    const { content } = this.state;
    if (content === left) {
      this.idL = 'active';
    } else {
      this.idL = 'inactive';
    }
    return this.idL;
  }

  isActiveU = () => {
    const { content } = this.state;
    if (content === up) {
      this.idU = 'active';
    } else {
      this.idU = 'inactive';
    }
    return this.idU;
  }

  isActiveD = () => {
    const { content } = this.state;
    if (content === down) {
      this.idD = 'active';
    } else {
      this.idD = 'inactive';
    }
    return this.idD;
  }

  keyIsToDo = () => {
    const { content, toDoArr, i } = this.state;
    if (content === toDoArr[i]) {
      this.setState({ i: i + 1 });
    }
    return i;
  }

  render() {
    this.keyIsToDo();
    this.isActiveR();
    this.isActiveL();
    this.isActiveU();
    this.isActiveD();

    const { toDoArr, i } = this.state;

    return (
      <div>
        <div className="content" {...ArrowKeysReact.events} tabIndex="0">
          <div className="toDo"><img src={toDoArr[i]} alt="end" /></div>

          <div className="controller">
            <div>
              <img className="arrKeys" src={upb} id={this.idU} alt="up" />
            </div>

            <div>
              <img className="arrKeys" src={leftb} id={this.idL} alt="left" />
              <img className="arrKeys" src={downb} id={this.idD} alt="down" />
              <img className="arrKeys" src={rightb} id={this.idR} alt="right" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Command;
