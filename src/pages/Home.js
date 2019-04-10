import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
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
        <h2>Accueil</h2>
      </div>
    );
  }
}

export default Home;
