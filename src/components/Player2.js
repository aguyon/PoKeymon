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
    haut="z"
    gauche="q"
    bas="s"
    droite="d"
    attack="e"
  />
);
export default Player2;
