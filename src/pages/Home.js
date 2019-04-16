import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import bulbasaur from '../media/001-bulbasaur.svg';
import charmander from '../media/004-charmander.svg';
import squirtle from '../media/007-squirtle.svg';
import '../css/Home.css';

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
        <h3>Choose your first Pokemon</h3>
        <img className="ImageAcceuil" src={bulbasaur} alt="Bulbizarre" />
        <img className="ImageAcceuil" src={charmander} alt="Salameche" />
        <img className="ImageAcceuil" src={squirtle} alt="Carapuce" />
        <br />

        <Nav>
          <NavLink to="/solo-mode" className="ModeHomePage2">Solo Mode</NavLink>
          <NavLink to="/dual-mode" className="ModeHomePage2">Dual Mode</NavLink>
        </Nav>  
      </div>
    );
  }
}

export default Home;
