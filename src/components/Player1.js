import React from 'react';
import KeysPlayer1 from './KeysPlayer1';

const Player1 = ({
  pokemonRare, pokemonName, handlePokHideDuo, showPokDuo, newGuest,
}) => (
  <KeysPlayer1
    pokemon={pokemonRare}
    pokemonName={pokemonName}
    handlePokHideDuo={handlePokHideDuo}
    showPokemonDuo={showPokDuo}
    newGuest={newGuest}
  />
);

export default Player1;
