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

class PokemonACapturer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { index } = this.props;
    return (
      <figure className="pokemon">
        <img height="250px" src={pokemons[index].pokemonImage} alt={pokemons[index].pokemonName} />
        <figcaption>
          <blockquote>{pokemons[index].pokemonName}</blockquote>
        </figcaption>
      </figure>

    );
  }
}

export default PokemonACapturer;
