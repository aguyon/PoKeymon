import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import PokemonList from '../components/PokemonList';
import '../css/Pokedex.css';


class Pokedex extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
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
            <NavLink to="/dual-mode">Dual Mode</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/pokedex" activeClassName="selected">PoKeydex</NavLink>
          </Nav.Item>
        </Nav>
        <PokemonList />
      </div>
    );
  }
}

export default Pokedex;
