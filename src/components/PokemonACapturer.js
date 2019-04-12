import React, { Component } from 'react';
import bulbasaur from '../media/001-bulbasaur.svg';

class PokemonACapturer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="pokemon">
        <img height="500px" src={bulbasaur} alt="Bulbasar" />
        <h2>Bulbasaur</h2>
      </div>
    );
  }
}

export default PokemonACapturer;
