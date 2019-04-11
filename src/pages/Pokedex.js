import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import PokemonList from '../components/PokemonList';

import '../css/Pokedex.css';

// import bulbasaur from "./media/bulbasaur.svg";
// import charmander from "./media/charmander.svg";
// import squirtle from "./media/squirtle.svg";

// const pokemons = [
//   {
//     id: 1,
//     name: "Bulbasaur",
//     url: bulbasaur
//   },
//   {
//     id: 2,
//     name: "Charmander",
//     url: charmander
//   },
//   {
//     id: 3,
//     name: "Squirtle",
//     url: squirtle
//   },
//   {
//     id: 4,
//     name: "Pikachu",
//     url: "https://i.postimg.cc/7Pn5CCGw/025-pikachu.png"
//   },
//   {
//     id: 5,
//     name: "Jigglypuff",
//     url: "https://i.postimg.cc/VvZrdT72/039-jigglypuff.png"
//   },
//   {
//     id: 6,
//     name: "Snorlax",
//     url: "https://i.postimg.cc/xTkq66pT/143-snorlax.png"
//   },
// ];

class Pokedex extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
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
            <NavLink to="/pokedex" activeClassName="selected">
              PoKeydex
            </NavLink>
          </Nav.Item>
        </Nav>
        <h2 className="title">PoKeydex</h2>
        <PokemonList />
      </React.Fragment>
    );
  }
}

export default Pokedex;
