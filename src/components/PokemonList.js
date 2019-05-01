import React, { Component } from 'react';
import axios from 'axios';

import PokemonCard from './PokemonCard';

class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=152',
      pokemon: null,
      newUser: '',
    };
  }

  async componentDidMount() {
    const { url } = this.state;
    const res = await axios.get(url);
    localStorage.getItem('userActive');
    this.setState({
      pokemon: res.data.results,
      newUser: localStorage.getItem('userActive'),
    });
  }

  getMypokemonNames = () => {
    const { newUser } = this.state;
    const listPokemonsACapturer = localStorage.getItem(`${newUser}listPokemons`);
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
            <h1>Loading Pokemon</h1>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default PokemonList;
