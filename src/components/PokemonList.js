import React, { Component } from 'react';
import axios from 'axios';
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';

import PokemonCard from './PokemonCard';

// const pokemonsImg = require.context('../media/PokemonACapturer');

class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=152',
      pokemon: null,
      // pokemonRare: null,
    };
  }

  async componentDidMount() {
    const { url } = this.state;
    const res = await axios.get(url);
    this.setState({ pokemon: res.data.results });
  }

  // handleClickPokemonRare = () => {
  //   const { pokemonRare, pokemon } = this.state;
  //   const pokemonsDuo = pokemon.filter(pokemonsImg.keys().find(img => img.includes('/1')));
  //   this.setState({ pokemonRare: pokemonsDuo });
  // }

  getMypokemonNames = () => {
    const listPokemonsACapturer = localStorage.getItem('listPokemons');
    return listPokemonsACapturer;
  };

  isInMyPokedex = (nameRef) => {
    const myPokemonsName = this.getMypokemonNames();
    return myPokemonsName.includes(nameRef);
  };

  render() {
    const { pokemon } = this.state;
    return (
      <React.Fragment>
        <div className="bg">
          {/* eslint-disable-next-line max-len */}
          {/* <button className="filterPokedex" onClick={this.handleClickPokemonRare} type="button">Rare</button> */}
          {pokemon ? (
            <div className="row rowCustom">
              {pokemon.map(pok => (
                <PokemonCard
                  key={pok.name}
                  name={pok.name}
                  url={pok.url}
                  style={{
                    filter: `grayscale(${this.isInMyPokedex(pok.name) ? '0' : '1'})`,
                  }}
                />
              ))}
            </div>
          ) : (
            <h1 id="loading">Loading Pokemon</h1>
          )}
        </div>
        <ScrollUpButton style={{
          width: '80px', height: '80px', backgroundColor: '#FFF', zIndex: 10, outline: 'none',
        }}
        />
      </React.Fragment>
    );
  }
}

export default PokemonList;
