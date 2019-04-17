import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import '../css/Solo.css';
import Command from '../components/Command';
import PokemonACapturer from '../components/PokemonACapturer';

class Solo extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
    };
    setInterval(() => this.setState({
      index: Math.floor(Math.random() * 3),
    }), 1000);
  }

  render() {
    const { index } = this.state;
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
          <Command />
          <PokemonACapturer index={index} />
        </div>
      </div>
    );
  }
}

export default Solo;
