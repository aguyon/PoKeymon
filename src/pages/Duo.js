import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Player1 from '../components/Player1';
import Player2 from '../components/Player2';
import PokemonRareACapturer from '../components/PokemonRareACapturer';
import btnHelp from '../media/btnHelp.png';

class Duo extends Component {
  constructor() {
    super();
    this.state = {
      index: '',
      showPokDuo: true,
      newUser: '',
    };
  }

  componentDidMount() {
    localStorage.getItem('userActive');
    this.setState({ newUser: localStorage.getItem('userActive') });
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
      index, name, showPokDuo, newUser,
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
          <p className="userLog">
          Trainer:
            {' '}
            {newUser}
          </p>
        </Nav>
        <div className="fullPage">
          <Player2
            pokemonRare={index}
            pokemonName={name}
            handlePokHideDuo={this.handlePokHideDuo}
          />
          <PokemonRareACapturer
            getPokemon={this.pokemonRandom}
            showPokemonDuo={showPokDuo}
          />
          <div className="instructions">
            <a href="button">
              <img className="btnHelp" src={btnHelp} alt="Help" />
              <div className="bulleHelp">
                <span className="help">Instructions</span>
              </div>
            </a>
          </div>
          <Player1
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
