import React from 'react';
import KeysPlayer1 from './KeysPlayer1';

const Player1 = ({
  pokemonRare, pokemonName, handlePokHideDuo, showPokDuo,
}) => (
  <KeysPlayer1
    pokemon={pokemonRare}
    pokemonName={pokemonName}
    handlePokHideDuo={handlePokHideDuo}
    showPokemonDuo={showPokDuo}
    haut="o"
    gauche="k"
    bas="l"
    droite="m"
    attack="p"
  />
);

export default Player1;
