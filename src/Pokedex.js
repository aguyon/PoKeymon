import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Pokedex extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/solo-mode">Solo Mode</NavLink>
        <NavLink to="/dual-mode">Dual Mode</NavLink>
        <NavLink to="/pokedex" activeClassName="selected">
          Pokedex
        </NavLink>
        <h2>Pokedex</h2>
      </div>
    );
  }
}

export default Pokedex;
