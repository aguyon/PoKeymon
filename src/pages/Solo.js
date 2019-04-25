import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import '../css/Solo.css';
import Player from '../components/Player';
import PokemonACapturer from '../components/PokemonACapturer';
import AlerteResultat from '../components/AlerteResultat';


class Solo extends Component {
  constructor() {
    super();
    this.state = {
      index: '',
      modal: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  pokemonRandom = (indexPlayedPokemon, playedPokemonName) => {
    this.setState({
      index: indexPlayedPokemon,
      name: playedPokemonName,
    });
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  }

  render() {
    const { index, name, modal } = this.state;
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
          <Player />
          <PokemonACapturer getPokemon={this.pokemonRandom} />
          <Button color="danger" onClick={this.toggle}>Open Modal</Button>
          <AlerteResultat show={modal} pokemon={index} pokemonName={name} />
        </div>
      </div>
    );
  }
}

export default Solo;
