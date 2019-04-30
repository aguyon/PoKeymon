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
  />
);

export default Player1;
