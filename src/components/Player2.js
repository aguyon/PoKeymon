import React from 'react';
import KeysPlayer2 from './KeysPlayer2';

const Player2 = ({
  pokemon, pokemonName, handlePokHideDuo, showPokDuo,
}) => (
  <KeysPlayer2
    pokemon={pokemon}
    pokemonName={pokemonName}
    handlePokHideDuo={handlePokHideDuo}
    showPokemonDuo={showPokDuo}
  />
);
export default Player2;
