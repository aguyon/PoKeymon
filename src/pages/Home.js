/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';
import bulbasaur from '../media/001-bulbasaur.svg';
import charmander from '../media/PokemonACapturer/004-charmander.svg';
import squirtle from '../media/PokemonACapturer/007-squirtle.svg';
import player from '../media/player.png';
import solomode from '../media/solo-mode.png';

import '../css/Home.css';

const BattleButton = styled.img`
hoverable: true,
display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
`;

class Home extends Component {
  constructor() {
    super();
    this.state = {
      scale: 1,
      scale1: 1,
      scale2: 1,
    };
  }

  selectionPokemon1 = () => {
    let { scale, scale1, scale2 } = this.state;
    localStorage.setItem('listPokemons', 'bulbasaur');
    if (scale === 1.4) {
      scale = 1;
    } else {
      scale = 1.4;
      scale1 = 1;
      scale2 = 1;
    }
    this.setState({
      scale,
      scale1,
      scale2,
    });
  }

  selectionPokemon2 = () => {
    let { scale1, scale, scale2 } = this.state;
    localStorage.setItem('listPokemons', 'charmander');
    if (scale1 === 1.4) {
      scale1 = 1;
    } else {
      scale1 = 1.4;
      scale = 1;
      scale2 = 1;
    }
    this.setState({
      scale1,
      scale,
      scale2,
    });
  }

  selectionPokemon3 = () => {
    let { scale2, scale1, scale } = this.state;
    localStorage.setItem('listPokemons', 'squirtle');
    if (scale2 === 1.4) {
      scale2 = 1;
    } else {
      scale2 = 1.4;
      scale1 = 1;
      scale = 1;
    }
    this.setState({
      scale2,
      scale1,
      scale,
    });
  }

  render() {
    const { scale, scale1, scale2 } = this.state;
    return (
      <div>
        <Nav className="justify-content-center">
          <Nav.Item>
            <NavLink to="/" activeClassName="selected">Accueil</NavLink>
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

        <div id="HomeGeneral">
          <h3>Choose your first Pokemon</h3>
          <img onClick={() => this.selectionPokemon1()} className="ImageAcceuil1" src={bulbasaur} alt="Bulbizarre" style={{ transform: `scale(${scale})` }} />
          <img onClick={() => this.selectionPokemon2()} className="ImageAcceuil2" src={charmander} alt="Salameche" style={{ transform: `scale(${scale1})` }} />
          <img onClick={() => this.selectionPokemon3()} className="ImageAcceuil3" src={squirtle} alt="Carapuce" style={{ transform: `scale(${scale2})` }} />
          <br />

          <Nav>
            <div id="testmadiv">
              <NavLink to="/solo-mode"><BattleButton className="battle" src={solomode} alt="log-in" /></NavLink>
            </div>
          </Nav>
        </div>
      </div>


    );
  }
}

export default Home;
