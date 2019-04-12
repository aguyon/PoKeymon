import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import '../css/Solo.css';
import Command from '../components/Command';
import PokemonACapturer from '../components/PokemonACapturer';

class Solo extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
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
          <PokemonACapturer />
          <Command />
          <PokemonACapturer />
        </div>
      </div>
    );
  }
}

export default Solo;
