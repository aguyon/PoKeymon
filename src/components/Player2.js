import React from 'react';
import KeysPlayer2 from './KeysPlayer2';

const Player2 = ({
  pokemon, pokemonName, showPok, handlePokHide,
}) => (

  <KeysPlayer2
    pokemon={pokemon}
    pokemonName={pokemonName}
    handlePokHide={handlePokHide}
    showPokemon={showPok}
    haut="z"
    gauche="q"
    bas="s"
    droite="d"
    attack="e"
  />
);
export default Player2;
