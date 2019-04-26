import React, { Component } from 'react';
import bulbasaur from '../media/PokemonACapturer/001-bulbasaur.svg';
import ivysaur from '../media/PokemonACapturer/002-ivysaur.svg';
import venusaur from '../media/PokemonACapturer/003-venusaur.svg';
import charmander from '../media/PokemonACapturer/004-charmander.svg';
import charmeleon from '../media/PokemonACapturer/005-charmeleon.svg';
import charizard from '../media/PokemonACapturer/006-charizard.svg';
import squirtle from '../media/PokemonACapturer/007-squirtle.svg';
import wartortle from '../media/PokemonACapturer/008-wartortle.svg';
import blastoise from '../media/PokemonACapturer/009-blastoise.svg';
import caterpie from '../media/PokemonACapturer/010-caterpie.svg';
import metapod from '../media/PokemonACapturer/011-metapod.svg';
import butterfree from '../media/PokemonACapturer/012-butterfree.svg';
import weedleShiny from '../media/PokemonACapturer/013-weedle-shiny.svg';
import kakuna from '../media/PokemonACapturer/014-kakuna.svg';
import beedrill from '../media/PokemonACapturer/015-beedrill.svg';
import pidgey from '../media/PokemonACapturer/016-pidgey.svg';
import pidgeotto from '../media/PokemonACapturer/017-pidgeotto.svg';
import pidgeot from '../media/PokemonACapturer/018-pidgeot.svg';
import rattata from '../media/PokemonACapturer/019-rattata.svg';
import raticate from '../media/PokemonACapturer/020-raticate.svg';

const pokemons = [
  {
    pokemonName: 'Bulbasaur',
    pokemonImage: bulbasaur,
  },
  {
    pokemonName: 'Ivysaur',
    pokemonImage: ivysaur,
  },
  {
    pokemonName: 'Venusaur',
    pokemonImage: venusaur,
  },
  {
    pokemonName: 'Charmander',
    pokemonImage: charmander,
  },
  {
    pokemonName: 'Charmeleon',
    pokemonImage: charmeleon,
  },
  {
    pokemonName: 'Charizard',
    pokemonImage: charizard,
  },
  {
    pokemonName: 'Squirtle',
    pokemonImage: squirtle,
  },
  {
    pokemonName: 'Wartortle',
    pokemonImage: wartortle,
  },
  {
    pokemonName: 'Blastoise',
    pokemonImage: blastoise,
  },
  {
    pokemonName: 'Caterpie',
    pokemonImage: caterpie,
  },
  {
    pokemonName: 'Metapod',
    pokemonImage: metapod,
  },
  {
    pokemonName: 'Butterfree',
    pokemonImage: butterfree,
  },
  {
    pokemonName: 'WeedleShiny',
    pokemonImage: weedleShiny,
  },
  {
    pokemonName: 'Kakuna',
    pokemonImage: kakuna,
  },
  {
    pokemonName: 'Beedrill',
    pokemonImage: beedrill,
  },
  {
    pokemonName: 'Pidgey',
    pokemonImage: pidgey,
  },
  {
    pokemonName: 'Pidgeotto',
    pokemonImage: pidgeotto,
  },
  {
    pokemonName: 'Pidgeot',
    pokemonImage: pidgeot,
  },
  {
    pokemonName: 'Rattata',
    pokemonImage: rattata,
  },
  {
    pokemonName: 'Raticate',
    pokemonImage: raticate,
  },
];

// localStorage.setItem('listPokemons', [pokemons]);

const pokemonRandom = Math.floor(Math.random() * pokemons.length);

class PokemonACapturer extends Component {
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
      <figure className="pokemon2">
        <img height="300px" src={pokemons[pokemonRandom].pokemonImage} alt={pokemons[pokemonRandom].pokemonName} />
        <figcaption>
          {imageOnly ? null : <blockquote>{pokemons[pokemonRandom].pokemonName}</blockquote>}
        </figcaption>
      </figure>
    );
  }
}

export default PokemonACapturer;
