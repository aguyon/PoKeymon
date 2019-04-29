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
    pokemonName: 'bulbasaur',
    pokemonImage: bulbasaur,
  },
  {
    pokemonName: 'ivysaur',
    pokemonImage: ivysaur,
  },
  {
    pokemonName: 'venusaur',
    pokemonImage: venusaur,
  },
  {
    pokemonName: 'charmander',
    pokemonImage: charmander,
  },
  {
    pokemonName: 'charmeleon',
    pokemonImage: charmeleon,
  },
  {
    pokemonName: 'charizard',
    pokemonImage: charizard,
  },
  {
    pokemonName: 'squirtle',
    pokemonImage: squirtle,
  },
  {
    pokemonName: 'wartortle',
    pokemonImage: wartortle,
  },
  {
    pokemonName: 'blastoise',
    pokemonImage: blastoise,
  },
  {
    pokemonName: 'caterpie',
    pokemonImage: caterpie,
  },
  {
    pokemonName: 'metapod',
    pokemonImage: metapod,
  },
  {
    pokemonName: 'butterfree',
    pokemonImage: butterfree,
  },
  {
    pokemonName: 'weedleShiny',
    pokemonImage: weedleShiny,
  },
  {
    pokemonName: 'kakuna',
    pokemonImage: kakuna,
  },
  {
    pokemonName: 'beedrill',
    pokemonImage: beedrill,
  },
  {
    pokemonName: 'pidgey',
    pokemonImage: pidgey,
  },
  {
    pokemonName: 'pidgeotto',
    pokemonImage: pidgeotto,
  },
  {
    pokemonName: 'pidgeot',
    pokemonImage: pidgeot,
  },
  {
    pokemonName: 'rattata',
    pokemonImage: rattata,
  },
  {
    pokemonName: 'raticate',
    pokemonImage: raticate,
  },
];

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
      <figure className="pokemonAcap">
        <img className="pokemonImage" height="340px" src={pokemons[pokemonRandom].pokemonImage} alt={pokemons[pokemonRandom].pokemonName} />
        <figcaption>
          {/* eslint-disable-next-line max-len */}
          {imageOnly ? null : <blockquote>{pokemons[pokemonRandom].pokemonName.toUpperCase()}</blockquote>}
        </figcaption>
      </figure>
    );
  }
}

export default PokemonACapturer;
