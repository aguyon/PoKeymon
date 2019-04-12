/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { Component } from 'react';
import ArrowKeysReact from 'arrow-keys-react';
import AlerteResultat from './AlerteResultat';

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
      toDoArr: [down, right, left, up, right, left, down, right, left, left, up, 'end'],
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


  keyIsToDo() {
    const { content, toDoArr, i } = this.state;
    // eslint-disable-next-line no-return-assign
    return (content === toDoArr[i]) ? this.state.i += 1 : i;
  }

  render() {
    // eslint-disable-next-line no-lone-blocks
    { this.keyIsToDo(); }
    const { toDoArr, i } = this.state;

    return (
      <div>
        {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
        {/* eslint-disable-next-line jsx-a11y/tabindex-no-positive */}
        <div className="content" {...ArrowKeysReact.events} tabIndex="1">
          <p><img src={toDoArr[i]} alt="end" /></p>

          <div>
            <img className="arrKeys" src={upb} id={this.id} alt="up" />
          </div>
          <div>
            {i === toDoArr.length - 1 ? <AlerteResultat /> : ''}
          </div>
          <div>
            <img className="arrKeys" src={leftb} id={this.id} alt="left" />
            <img className="arrKeys" src={downb} id={this.id} alt="down" />
            <img className="arrKeys" src={rightb} id={this.id} alt="right" />
          </div>
        </div>
      </div>
    );
  }
}

export default Command;
