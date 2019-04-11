import React, { Component } from 'react';
import axios from 'axios';

import PokemonCard from './PokemonCard';

class PokemonList extends Component {
  constructor() {
    super();
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

  render() {
    const { pokemon } = this.state;
    return (
      <React.Fragment>
        {pokemon ? (
          <div className="row">
            {/* eslint-disable-next-line no-shadow */}
            {pokemon.map(pokemon => (
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
              />
            ))}
          </div>
        ) : (
          <h1>Loading Pokemon</h1>
        )}
      </React.Fragment>
    );
  }
}

export default PokemonList;
