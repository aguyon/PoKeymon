import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <NavLink to="/" activeClassName="selected">Accueil</NavLink>
        <NavLink to="/solo-mode">Solo Mode</NavLink>
        <NavLink to="/dual-mode">Dual Mode</NavLink>
        <NavLink to="/pokedex">Pokedex</NavLink>
        <h2>Accueil</h2>
      </div>
    );
  }
}

export default Home;
