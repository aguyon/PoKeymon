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
import pokeball from '../media/pokeball.svg';

class Command extends Component {
  constructor() {
    super();
    this.state = {
      content: '',
      toDoArr: [down, right, left, up, right, left, down, right, left, left, up],
      i: 0,
      pokeballClass: 'pokeball2',
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

  keyIsFalse = () => {
    const {
      content, toDoArr, i, pokeballClass,
    } = this.state;
    if (content === toDoArr[i]) {
      this.setState({ pokeballClass: 'pokeball' });
    }
    return pokeballClass;
  }

  render() {
    this.keyIsToDo();
    this.keyIsFalse();
    this.isActiveR();
    this.isActiveL();
    this.isActiveU();
    this.isActiveD();

    const { toDoArr, i, pokeballClass } = this.state;

    return (
      <div className="allGameplay" {...ArrowKeysReact.events} tabIndex="0">
        <div className="toDo"><img src={toDoArr[i]} alt="end" /></div>
        <img src={pokeball} className={pokeballClass} alt="pokeball" />
        <div className="controller">
          <div>
            <img className="arrKeys" src={upb} id={this.idU} alt="up" />
          </div>
          <div>
            <img className="arrKeys" src={leftb} id={this.idL} alt="left" />
            <img className="arrKeys" src={downb} id={this.idD} alt="down" />
            <img className="arrKeys" src={rightb} id={this.idR} alt="right" />
          </div>
          {i === toDoArr.length ? <AlerteResultat /> : ''}
        </div>
      </div>
    );
  }
}

export default Command;
