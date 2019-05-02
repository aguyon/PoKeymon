import React, { Component } from 'react';
import KeysShow1 from './KeysShow1';
import ToDoArrows1 from './ToDoArrows1';
import '../css/Dual.css';
import AlerteResultatDual from './AlerteResultatDual';
// import Context from './Context';

const arr = ['l', 'k', 'm', 'o'];
const toDoArrRandom = [];
for (let i = 0; i < 20; i += 1) {
  toDoArrRandom.push(arr[Math.floor(Math.random() * 4)]);
}

class KeysPlayer1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      output: '',
      outputD: '',
      i: 0,
      touchKeyClass: '',
    };
  }

  componentDidMount() {
    window.onkeydown = (e) => {
      //   console.log(e.keyCode);
      // console.log('1', e.keyCode,String.fromCharCode(e.keyCode))
      switch (`${e.keyCode}`) {
        case '79':
          // o
          this.onKeyDown(String.fromCharCode(e.keyCode).toLowerCase());
          break;

        case '75':
          // k
          this.onKeyDown(String.fromCharCode(e.keyCode).toLowerCase());
          break;
        case '76':

          // l
          this.onKeyDown(String.fromCharCode(e.keyCode).toLowerCase());
          break;
        case '77':
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
    window.onkeyup = (e) => {
      //   e = e || window.event;
      //   console.log(e.keyCode);
      // console.log('1', e.keyCode,String.fromCharCode(e.keyCode))
      switch (`${e.keyCode}`) {
        case '79':
          // up arrow
          this.onKeyUp(String.fromCharCode(e.keyCode).toLowerCase());
          break;
        case '75':
          this.onKeyUp(String.fromCharCode(e.keyCode).toLowerCase());
          // down arrow
          break;
        case '76':
          this.onKeyUp(String.fromCharCode(e.keyCode).toLowerCase());
          // left arrow
          break;
        case '77':
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
    const {
      pokemon, pokemonName, showPokemonDuo, newGuest,
    } = this.props;
    const { output, i, touchKeyClass } = this.state;

    return (
      <div className="gameplay">

        <ToDoArrows1 toDoArrow={toDoArrRandom[i]} output2={output} />
        <div>
          <h1>
            {i}
            {' '}
            /20
            {' '}
          </h1>
        </div>
        <KeysShow1 output2={output} toDoArrow={toDoArrRandom[i]} touchKeyClass={touchKeyClass} />
        {(i === toDoArrRandom.length)
          ? (
            <AlerteResultatDual
              pokemon={pokemon}
              pokemonName={pokemonName}
              showPokemonDuo={showPokemonDuo}
              newGuest={newGuest}
            />
          ) : ''}

      </div>
    );
  }
}

export default KeysPlayer1;
