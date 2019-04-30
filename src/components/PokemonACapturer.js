import React, { Component } from 'react';


const pokemonsImg = require.context('../media/PokemonACapturer');
const pokemonsMulti = pokemonsImg.keys();
const pokemonRandom = Math.floor(Math.random() * 100);
const pokemonName = (pokemonsMulti[pokemonRandom]).slice(6, -4);

class PokemonACapturer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const { getPokemon } = this.props;
    if (getPokemon) {
      getPokemon(pokemonRandom, pokemonName);
    }
  }

  render() {
    const { imageOnly, showPokemon } = this.props;
    return (
      <figure className="pokemonAcap" style={{ visibility: showPokemon ? 'visible' : 'hidden' }}>
        <img className="pokemonImage" height="340px" src={pokemonsImg(pokemonsMulti[pokemonRandom])} alt={pokemonName} />
        <figcaption>
          {imageOnly ? null
            : (
              <blockquote>
                {pokemonName.toLowerCase()
                  .split(' ')
                  .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                  .join(' ')}
              </blockquote>
            )
          }
        </figcaption>
      </figure>
    );
  }
}

export default PokemonACapturer;
