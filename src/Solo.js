import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import ArrowKeysReact from 'arrow-keys-react';

class Solo extends Component {
  render() {
    return (
      <div>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/solo-mode" activeClassName="selected">Solo Mode</NavLink>
        <NavLink to="/dual-mode">Dual Mode</NavLink>
        <NavLink to="/pokedex">Pokedex</NavLink>
        <h2>Solo Mode</h2>
      </div>
    );
  }
}

export default Solo;
