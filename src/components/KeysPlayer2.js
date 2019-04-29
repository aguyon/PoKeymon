/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-no-bind */
import React, { Component } from 'react';
import Hotkeys from 'react-hot-keys';
import KeysShow2 from './KeysShow2';
import ToDoArrows2 from './ToDoArrows2';
import '../css/Dual.css';
import AlerteResultatDual from './AlerteResultatDual';
// import Context from './Context';

const arr = ['s', 'q', 'd', 'z'];
const toDoArrRandom = [];
for (let i = 0; i < 20; i += 1) {
  toDoArrRandom.push(arr[Math.floor(Math.random() * 4)]);
}

class KeysPlayer2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      output: ' ',
      outputD: ' ',
      i: 0,
      touchKeyClass: '',
    };
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
      }, () => {
        const { handlePokHideDuo } = this.props;
        if (i === toDoArrRandom.length - 1) handlePokHideDuo();
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
      haut, gauche, bas, droite, attack, pokemon, pokemonName, showPokemonDuo,
    } = this.props;
    const { output, i, touchKeyClass } = this.state;

    return (
      <div className="gameplay2">
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
          <Hotkeys
            keyName={attack}
            onKeyDown={this.onKeyDown.bind(this)}
            onKeyUp={this.onKeyUp.bind(this)}
          />
        </div>
        <ToDoArrows2 toDoArrow={toDoArrRandom[i]} />
        <KeysShow2 output2={output} toDoArrow={toDoArrRandom[i]} touchKeyClass={touchKeyClass} />
        {(i === toDoArrRandom.length) ? <AlerteResultatDual pokemon={pokemon} pokemonName={pokemonName} showPokemonDuo={showPokemonDuo} /> : ''}
      </div>
    );
  }
}

export default KeysPlayer2;
