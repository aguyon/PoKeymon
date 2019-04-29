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
      index: '',
      showPok: true,
    };
  }

  pokemonRandom = (indexPlayedPokemon, playedPokemonName) => {
    this.setState({
      index: indexPlayedPokemon,
      name: playedPokemonName,
    });
  }

  handlePokHide = () => {
    this.setState({ showPok: false });
  }

  render() {
    const { index, name, showPok } = this.state;
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
        <div className="fullPage">
          <Player pokemon={index} pokemonName={name} handlePokHide={this.handlePokHide} />
          <PokemonACapturer getPokemon={this.pokemonRandom} showPokemon={showPok} />
        </div>
      </div>
    );
  }
}

export default Solo;
