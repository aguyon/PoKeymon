import React from 'react';
import KeysPlayer2 from './KeysPlayer2';

const Player2 = ({
  pokemon, pokemonName, handlePokHideDuo, showPokDuo, newUser,
}) => (
  <KeysPlayer2
    pokemon={pokemon}
    pokemonName={pokemonName}
    handlePokHideDuo={handlePokHideDuo}
    showPokemonDuo={showPokDuo}
    newUser={newUser}
  />
);
export default Player2;
