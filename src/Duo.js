import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import ArrowKeysReact from 'arrow-keys-react';
import Nav from 'react-bootstrap/Nav';

class Duo extends Component {
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
            <NavLink to="/dual-mode" activeClassName="selected">Dual Mode</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/pokedex">PoKeydex</NavLink>
          </Nav.Item>
        </Nav>
        <h2>Dual Mode</h2>
      </div>
    );
  }
}

export default Duo;
