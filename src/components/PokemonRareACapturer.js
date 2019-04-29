import React, { Component } from 'react';
import articuno from '../media/PokemonACapturer/144-articuno.svg';
import zapdos from '../media/PokemonACapturer/145-zapdos.svg';
import moltres from '../media/PokemonACapturer/146-moltres.svg';


const pokemons = [
  {
    pokemonName: 'articuno',
    pokemonImage: articuno,
  },
  {
    pokemonName: 'zapdos',
    pokemonImage: zapdos,
  },
  {
    pokemonName: 'moltres',
    pokemonImage: moltres,
  },
];

// localStorage.setItem('listPokemons', [pokemons]);

const pokemonRandom = Math.floor(Math.random() * pokemons.length);

class PokemonRareACapturer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const { getPokemon } = this.props;
    if (getPokemon) {
      getPokemon(pokemonRandom, pokemons[pokemonRandom].pokemonName);
    }
  }

  render() {
    const { imageOnly } = this.props;
    return (
      <figure>
        <img className="pokemonImage" height="340px" src={pokemons[pokemonRandom].pokemonImage} alt={pokemons[pokemonRandom].pokemonName} />
        <figcaption>
          {imageOnly ? null : (
            <blockquote>
              {pokemons[pokemonRandom].pokemonName.toLowerCase()
                .split(' ')
                .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                .join(' ')}
            </blockquote>
          )}
        </figcaption>
      </figure>
    );
  }
}

export default PokemonRareACapturer;
