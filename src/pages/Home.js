/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import bulbasaur from '../media/001-bulbasaur.svg';
import charmander from '../media/PokemonACapturer/004-charmander.svg';
import squirtle from '../media/PokemonACapturer/007-squirtle.svg';
import player from '../media/player.png';
import solomode from '../media/solo-mode.png';

import '../css/Home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      scale: 1,
      scale1: 1,
      scale2: 1,
      zIndex: 10,
    };
  }

  selectionPokemon1 = () => {
    let {
      scale, scale1, scale2, zIndex,
    } = this.state;
    localStorage.setItem('listPokemons', '["bulbasaur"]');
    if (scale === 1.4 && zIndex === 10) {
      scale = 1;
      zIndex = 11;
    } else {
      scale = 1.4;
      scale1 = 1;
      scale2 = 1;
    }
    this.setState({
      scale,
      zIndex,
      scale1,
      scale2,
    });
  };

  selectionPokemon2 = () => {
    let {
      scale, scale1, scale2, zIndex,
    } = this.state;
    localStorage.setItem('listPokemons', '["charmander"]');
    if (scale1 === 1.4 && zIndex === 10) {
      scale1 = 1;
      zIndex = 11;
    } else {
      scale1 = 1.4;
      scale = 1;
      scale2 = 1;
    }
    this.setState({
      scale1,
      zIndex,
      scale,
      scale2,
    });
  };

  selectionPokemon3 = () => {
    let {
      scale, scale1, scale2, zIndex,
    } = this.state;
    localStorage.setItem('listPokemons', '["squirtle"]');
    if (scale2 === 1.4 && zIndex === 10) {
      scale2 = 1;
      zIndex = 11;
    } else {
      scale2 = 1.4;
      scale1 = 1;
      scale = 1;
    }
    this.setState({
      scale2,
      zIndex,
      scale1,
      scale,
    });
  };

  render() {
    const {
      scale, scale1, scale2, zIndex,
    } = this.state;
    return (
      <div>
        <Nav className="justify-content-center">
          <Nav.Item>
            <NavLink to="/" activeClassName="selected">
              Accueil
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/solo-mode">Solo Mode</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/dual-mode">Dual Mode</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/pokedex">PoKeydex</NavLink>
          </Nav.Item>
        </Nav>
        <NavLink to="/login">
          <img className="user-icon" src={player} alt="log-in" />
        </NavLink>
        <div id="herb" />
        <div id="HomeGeneral">
          <h3>Choose your first Pokemon</h3>
          <div className="accueilPokemon">
            <img
              onClick={() => this.selectionPokemon1()}
              className="ImageAccueil"
              src={bulbasaur}
              alt="Bulbizarre"
              style={{ transform: `scale(${scale})`, zIndex: `(${zIndex})` }}
            />
            <img
              onClick={() => this.selectionPokemon2()}
              className="ImageAccueil"
              src={charmander}
              alt="Salameche"
              style={{ transform: `scale(${scale1})` }}
            />
            <img
              onClick={() => this.selectionPokemon3()}
              className="ImageAccueil"
              src={squirtle}
              alt="Carapuce"
              style={{ transform: `scale(${scale2})` }}
            />
          </div>

          <Nav className="justify-content-center">
            <div>
              <NavLink to="/solo-mode">
                <img className="battle" src={solomode} alt="log-in" />
              </NavLink>
            </div>
          </Nav>
        </div>
      </div>
    );
  }
}

export default Home;
