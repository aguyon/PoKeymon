import React, { Component } from 'react';
import axios from 'axios';
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';

import PokemonCard from './PokemonCard';

class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=152',
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

  isInMyPokedex = (nameRef) => {
    const myPokemonsName = this.getMypokemonNames();
    return myPokemonsName.includes(nameRef);
  };

  render() {
    const { pokemon } = this.state;
    return (
      <React.Fragment>
        <div className="bg">
          <ScrollUpButton style={{
            width: '70px', height: '70px', backgroundColor: '#FFF', zIndex: 10,
          }}
          />
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
            <h1 id="search">Loading Pokemon</h1>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default PokemonList;
