/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import bulbasaur from '../media/PokemonACapturer/001-bulbasaur.svg';
import charmander from '../media/PokemonACapturer/004-charmander.svg';
import squirtle from '../media/PokemonACapturer/007-squirtle.svg';
import '../css/Home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      scale: 1,
      scale1: 1,
      scale2: 1,
    };
  }

  selectionPokemon1 = () => {
    let { scale, scale1, scale2 } = this.state;
    localStorage.setItem('listPokemons', 'bulbasaur');
    if (scale === 1.4) {
      scale = 1;
    } else {
      scale = 1.4;
      scale1 = 1;
      scale2 = 1;
    }
    this.setState({
      scale,
      scale1,
      scale2,
    });
  }

  selectionPokemon2 = () => {
    let { scale1, scale, scale2 } = this.state;
    localStorage.setItem('listPokemons', 'charmander');
    if (scale1 === 1.4) {
      scale1 = 1;
    } else {
      scale1 = 1.4;
      scale = 1;
      scale2 = 1;
    }
    this.setState({
      scale1,
      scale,
      scale2,
    });
  }

  selectionPokemon3 = () => {
    let { scale2, scale1, scale } = this.state;
    localStorage.setItem('listPokemons', 'squirtle');
    if (scale2 === 1.4) {
      scale2 = 1;
    } else {
      scale2 = 1.4;
      scale1 = 1;
      scale = 1;
    }
    this.setState({
      scale2,
      scale1,
      scale,
    });
  }

  // addPokemonInPokedex = () => {
  //   let pokemonIndex;
  //   if (!localStorage.getItem('listPokemons')) {
  //     localStorage.setItem('listPokemons', '');
  //   }
  //   const newPokedex = `${localStorage.getItem('listPokemons')} ${pokemonIndex}`;
  //   localStorage.setItem('listPokemons', newPokedex);
  // }

  render() {
    const { scale, scale1, scale2 } = this.state;
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

        <div id="HomeGeneral">
          <h3>Choose your first Pokemon</h3>
          <img onClick={() => this.selectionPokemon1()} className="ImageAcceuil1" src={bulbasaur} alt="Bulbizarre" style={{ transform: `scale(${scale})` }} />
          <img onClick={() => this.selectionPokemon2()} className="ImageAcceuil2" src={charmander} alt="Salameche" style={{ transform: `scale(${scale1})` }} />
          <img onClick={() => this.selectionPokemon3()} className="ImageAcceuil3" src={squirtle} alt="Carapuce" style={{ transform: `scale(${scale2})` }} />
          <br />

          <Nav>
            <div id="testmadiv">
              <NavLink to="/solo-mode"><button type="button" className="ModeHomePage2">Solo Mode</button></NavLink>
            </div>
          </Nav>
        </div>
      </div>
    );
  }
}

export default Home;