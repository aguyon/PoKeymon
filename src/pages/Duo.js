import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Player1 from '../components/Player1';
import Player2 from '../components/Player2';
import Instruction from '../components/Instruction';
import PokemonRareACapturer from '../components/PokemonRareACapturer';
import btnHelp from '../media/btnHelp.png';


class Duo extends Component {
  constructor() {
    super();
    this.state = {
      index: '',
      showPokDuo: true,
      newUser: '',
      newGuest: '',
    };
  }

  componentDidMount() {
    localStorage.getItem('userActive', 'guestActive');
    this.setState({
      newUser: localStorage.getItem('userActive'),
      newGuest: localStorage.getItem('guestActive'),
    });
  }

  pokemonRandom = (indexPlayedPokemon, playedPokemonName) => {
    this.setState({
      index: indexPlayedPokemon,
      name: playedPokemonName,
    });
  };

  handlePokHideDuo = () => {
    this.setState({ showPokDuo: false });
  };

  render() {
    const {
      index, name, showPokDuo, newUser, newGuest,
    } = this.state;

    return (
      <div>
        <Nav className="justify-content-center">
          <Nav.Item>
            <NavLink to="/">Accueil</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/solo-mode">Solo Mode</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/dual-mode" activeClassName="selected">
              Dual Mode
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/pokedex">PoKeydex</NavLink>
          </Nav.Item>
          <p
            className="userLog"
          >
            <div>
Trainer:
              {' '}
              {newUser}

            </div>
            <div>
              {' '}
Guest:
              {' '}
              {newGuest}

            </div>
          </p>
        </Nav>
        <div className="fullPage">
          <Player2
            pokemonRare={index}
            pokemonName={name}
            handlePokHideDuo={this.handlePokHideDuo}
            newUser={newUser}
          />
          <PokemonRareACapturer
            getPokemon={this.pokemonRandom}
            showPokemonDuo={showPokDuo}
          />
          <div className="instructions">
            <img className="btnHelp" src={btnHelp} alt="Help" />
            <div className="bulleHelp">
              <span className="help"><Instruction /></span>
            </div>
          </div>
          <Player1
            newGuest={newGuest}
            pokemonRare={index}
            pokemonName={name}
            handlePokHideDuo={this.handlePokHideDuo}
          />
        </div>
      </div>
    );
  }
}

export default Duo;
