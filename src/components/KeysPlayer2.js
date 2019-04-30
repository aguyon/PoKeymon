import React, { Component } from 'react';
import KeysShow2 from './KeysShow2';
import ToDoArrows2 from './ToDoArrows2';
import '../css/Dual.css';
import AlerteResultatDual from './AlerteResultatDual';
// import Context from './Context';

const arr = ['z', 'q', 's', 'd'];
const toDoArrRandom = [];
for (let i = 0; i < 20; i += 1) {
  toDoArrRandom.push(arr[Math.floor(Math.random() * 4)]);
}

class KeysPlayer2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      output: '',
      outputD: '',
      i: 0,
      touchKeyClass: '',
    };
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  componentDidMount() {
    document.onkeydown = (e) => {
      // e = e || window.event;
      //   console.log(e.keyCode);
      // console.log('1', e.keyCode,String.fromCharCode(e.keyCode))
      switch (`${e.keyCode}`) {
        case '90':
          // o
          this.onKeyDown(String.fromCharCode(e.keyCode).toLowerCase());
          break;

        case '81':
          // k
          this.onKeyDown(String.fromCharCode(e.keyCode).toLowerCase());
          break;
        case '83':

          // l
          this.onKeyDown(String.fromCharCode(e.keyCode).toLowerCase());
          break;
        case '68':
          // m
          this.onKeyDown(String.fromCharCode(e.keyCode).toLowerCase());
          break;
        case '69':
          // p
          this.onKeyDown(String.fromCharCode(e.keyCode).toLowerCase());
          break;
        default:
          break;
      }
    };
    document.onkeyup = (e) => {
      //   e = e || window.event;
      //   console.log(e.keyCode);
      // console.log('1', e.keyCode,String.fromCharCode(e.keyCode))
      switch (`${e.keyCode}`) {
        case '90':
          // up arrow
          this.onKeyUp(String.fromCharCode(e.keyCode).toLowerCase());
          break;
        case '81':
          this.onKeyUp(String.fromCharCode(e.keyCode).toLowerCase());
          // down arrow
          break;
        case '83':
          this.onKeyUp(String.fromCharCode(e.keyCode).toLowerCase());
          // left arrow
          break;
        case '68':
          this.onKeyUp(String.fromCharCode(e.keyCode).toLowerCase());
          // right arrow
          break;
        case '69':
          this.onKeyUp(String.fromCharCode(e.keyCode).toLowerCase());
          // right arrow
          break;
        default:
          break;
      }
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
        touchKeyClass: 'good',
      }, () => {
        const { handlePokHideDuo } = this.props;
        if (i === toDoArrRandom.length - 1) handlePokHideDuo();
      });
    }
  }

  render() {
    this.keyIsToDo();
    const { pokemon, pokemonName, showPokemonDuo } = this.props;
    const { output, i, touchKeyClass } = this.state;

    return (
      <div className="gameplay">
        <ToDoArrows2 toDoArrow={toDoArrRandom[i]} />
        <div>
          <h1>
            {i}
            {' '}
            /20
            {' '}
          </h1>
        </div>
        <KeysShow2 output2={output} toDoArrow={toDoArrRandom[i]} touchKeyClass={touchKeyClass} />
        {(i === toDoArrRandom.length) ? <AlerteResultatDual pokemon={pokemon} pokemonName={pokemonName} showPokemonDuo={showPokemonDuo} /> : ''}
      </div>
    );
  }
}

export default KeysPlayer2;
