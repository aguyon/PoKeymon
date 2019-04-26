import React, { Component } from 'react';
import axios from 'axios';

import PokemonCard from './PokemonCard';

class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://pokeapi.co/api/v2/pokemon',
      pokemon: null,
    };
  }

  async componentDidMount() {
    const { url } = this.state;
    const res = await axios.get(url);
    this.setState({ pokemon: res.data.results });
  }

  getMypokemonNames = () => {
    const listPokemonsACapturer = localStorage.getItem('listPokemons');
    return listPokemonsACapturer;
  };

  isInMyPokedex = (indexRef) => {
    const myPokemonName = this.getMypokemonNames();
    return indexRef === myPokemonName;
  };

  render() {
    const { pokemon } = this.state;
    return (
      <React.Fragment>
        <div className="bg">
          {pokemon ? (
            <div className="row rowCustom">
              {/* eslint-disable-next-line no-shadow */}
              {pokemon.map(pokemon => (
                <PokemonCard
                  key={pokemon.name}
                  name={pokemon.name}
                  url={pokemon.url}
                  style={{
                    filter: `grayscale(${this.isInMyPokedex(pokemon.name) ? '0' : '1'})`,
                  }}
                />
              ))}
            </div>
          ) : (
            <h1>Loading Pokemon</h1>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default PokemonList;
