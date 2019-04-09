import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import ArrowKeysReact from 'arrow-keys-react';

class Duo extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/solo-mode">Solo Mode</NavLink>
        <NavLink to="/dual-mode" activeClassName="selected">
          Dual Mode
        </NavLink>
        <NavLink to="/pokedex">Pokedex</NavLink>
        <h2>Dual Mode</h2>
      </div>
    );
  }
}

export default Duo;
