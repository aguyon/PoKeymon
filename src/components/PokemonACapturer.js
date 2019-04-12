import React, { Component } from 'react';
import bulbasaur from '../media/001-bulbasaur.svg';

class PokemonACapturer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <img height="300px" width="600px" src={bulbasaur} alt="Bulbasar" />;
  }
}

export default PokemonACapturer;
