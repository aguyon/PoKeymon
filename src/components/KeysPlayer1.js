import React, { Component } from 'react';
import Hotkeys from 'react-hot-keys';
import KeysShow1 from './KeysShow1';
import ToDoArrows from './ToDoArrows';
import '../css/Solo.css';

const arr = ['down', 'left', 'right', 'up'];
const toDoArrRandom = [];
for (let i = 0; i < 28; i += 1) {
  toDoArrRandom.push(arr[Math.floor(Math.random() * 4)]);
}

class KeysPlayer1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      output: ' ',
      outputD: ' ',
      i: 0,
      touchKeyClass: '',
    };
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  onKeyUp(keyName) {
    this.setState({
      output: `Up${keyName}`,
      touchKeyClass: '',
    });
  }

  onKeyDown(keyName) {
    this.setState({
      output: keyName,
      outputD: keyName,
    });
  }

  keyIsToDo = () => {
    const { outputD, i } = this.state;
    if (outputD === toDoArrRandom[i]) {
      this.setState({
        i: i + 1,
      });
    }
  }

  keyIsGood = () => {
    const { output, i } = this.state;
    if (output === toDoArrRandom[i]) {
      this.setState({
        touchKeyClass: 'good',
      });
    }
  }

  render() {
    this.keyIsToDo();
    this.keyIsGood();
    const {
      haut, gauche, bas, droite, attack,
    } = this.props;
    const { output, i, touchKeyClass } = this.state;

    return (
      <div>
        <div className="gameplay">
          <div>
            <Hotkeys
              keyName={haut}
              onKeyDown={this.onKeyDown}
              onKeyUp={this.onKeyUp}
            />
            <Hotkeys
              keyName={bas}
              onKeyDown={this.onKeyDown}
              onKeyUp={this.onKeyUp}
            />
            <Hotkeys
              keyName={droite}
              onKeyDown={this.onKeyDown}
              onKeyUp={this.onKeyUp}
            />
            <Hotkeys
              keyName={gauche}
              onKeyDown={this.onKeyDown}
              onKeyUp={this.onKeyUp}
            />
            <Hotkeys
              keyName={attack}
              onKeyDown={this.onKeyDown}
              onKeyUp={this.onKeyUp}
            />
          </div>
          <ToDoArrows toDoArrow={toDoArrRandom[i]} />
          <KeysShow1 output2={output} toDoArrow={toDoArrRandom[i]} touchKeyClass={touchKeyClass} />
        </div>
      </div>
    );
  }
}

export default KeysPlayer1;
