/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-no-bind */
import React, { Component } from 'react';
import Hotkeys from 'react-hot-keys';
import KeysShow from './KeysShow';
import ToDoArrows from './ToDoArrows';
import '../css/Solo.css';
import AlerteResultat from './AlerteResultat';
import AlerteDefaite from './AlerteDefaite';
import Context from './Context';
import Timer from './Timer';

const arr = ['down', 'left', 'right', 'up'];
const toDoArrRandom = [];
for (let i = 0; i < 30; i += 1) {
  toDoArrRandom.push(arr[Math.floor(Math.random() * 4)]);
}

class KeysPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      output: ' ',
      i: 0,
    };
  }

  onKeyUp(keyName) {
    this.setState({
      output: `Up${keyName}`,
    });
  }

  onKeyDown(keyName) {
    this.setState({
      output: keyName,
    });
  }

  handleChange = (val) => {
    const { touchKey } = this.props;
    touchKey(val);
  };

  keyIsToDo = () => {
    const { output, i } = this.state;
    if (output === toDoArrRandom[i]) {
      this.setState({ i: i + 1 });
    }
    return i;
  }

  render() {
    const {
      haut, gauche, bas, droite,
    } = this.props;
    this.keyIsToDo();
    const { output, i } = this.state;
    return (
      <div>
        <div className="gameplay">
          <div>
            <Hotkeys
              keyName={haut}
              onKeyDown={this.onKeyDown.bind(this)}
              onKeyUp={this.onKeyUp.bind(this)}
            />
            <Hotkeys
              keyName={bas}
              onKeyDown={this.onKeyDown.bind(this)}
              onKeyUp={this.onKeyUp.bind(this)}
            />
            <Hotkeys
              keyName={droite}
              onKeyDown={this.onKeyDown.bind(this)}
              onKeyUp={this.onKeyUp.bind(this)}
            />
            <Hotkeys
              keyName={gauche}
              onKeyDown={this.onKeyDown.bind(this)}
              onKeyUp={this.onKeyUp.bind(this)}
            />
          </div>
          <ToDoArrows toDoArrow={toDoArrRandom[i]} />
          <KeysShow output2={output} />
        </div>
        <div>
          <Timer>
            <Context.Consumer>
              {context => ((context.width) === 101 && i < toDoArrRandom.length ? <AlerteDefaite /> : i === toDoArrRandom.length ? <AlerteResultat /> : '')}
            </Context.Consumer>
          </Timer>
        </div>
      </div>
    );
  }
}

export default KeysPlayer;
