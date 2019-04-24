import React, { Component } from 'react';
import bulbasaur from '../media/001-bulbasaur.svg';
import charmander from '../media/004-charmander.svg';
import squirtle from '../media/007-squirtle.svg';

const pokemons = [
  {
    pokemonName: 'Bulbasaur',
    pokemonImage: bulbasaur,
  },
  {
    pokemonName: 'Charmander',
    pokemonImage: charmander,
  },
  {
    pokemonName: 'Squirtle',
    pokemonImage: squirtle,
  },
];
const pokemonRandom = Math.floor(Math.random() * 3);

class PokemonACapturer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <figure className="pokemon">
        <img height="250px" src={pokemons[pokemonRandom].pokemonImage} alt={pokemons[pokemonRandom].pokemonName} />
        <figcaption>
          <blockquote>{pokemons[pokemonRandom].pokemonName}</blockquote>
        </figcaption>
      </figure>
    );
  }
}

export default PokemonACapturer;
