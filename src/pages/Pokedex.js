import React, { Component } from 'react';
import {
  HashRouter as Router, Route, Switch, NavLink,
} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import PokemonList from '../components/PokemonList';
import Pokemon from '../components/Pokemon';

import '../css/Pokedex.css';


export default class Pokedex extends Component {
  constructor() {
    super();
    this.state = {
      newUser: '',
    };
  }

  componentWillMount() {
    localStorage.getItem('userActive');
    this.setState({ newUser: localStorage.getItem('userActive') });
  }

  render() {
    const { newUser } = this.state;
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
            <NavLink to="/dual-mode">Dual Mode</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/pokedex" activeClassName="selected">PoKeydex</NavLink>
          </Nav.Item>
          <p
            className="userLog"
          >
            Trainer:
            {' '}
            {newUser}
          </p>
        </Nav>
        <Router>
          <Switch>
            <Route exact path="/" component={PokemonList} />
            <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
          </Switch>
        </Router>
      </div>
    );
  }
}
