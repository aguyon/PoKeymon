import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import '../css/Solo.css';
import Player from '../components/Player';
import PokemonACapturer from '../components/PokemonACapturer';

class Solo extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
    };
  }

  pokemonRandom = (indexPlayedPokemon) => {
    this.setState({
      index: indexPlayedPokemon,
    });
  }

  render() {
    const { index } = this.state;
    return (
      <div>
        <div>
          <Nav className="justify-content-center">
            <Nav.Item>
              <NavLink to="/">Accueil</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/solo-mode" activeClassName="selected">Solo Mode</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/dual-mode">Dual Mode</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/pokedex">PoKeydex</NavLink>
            </Nav.Item>
          </Nav>
        </div>
        <div>
          <PokemonACapturer index={index} setPlayedPokemon={this.pokemonRandom} />
          <Player />
        </div>
      </div>
    );
  }
}

export default Solo;
