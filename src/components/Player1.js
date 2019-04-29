import React from 'react';
import KeysPlayer1 from './KeysPlayer1';

const Player1 = ({
  pokemonRare, pokemonName, showPok, handlePokHide,
}) => (
  <KeysPlayer1
    pokemon={pokemonRare}
    pokemonName={pokemonName}
    handlePokHide={handlePokHide}
    showPokemon={showPok}
    haut="o"
    gauche="k"
    bas="l"
    droite="m"
    attack="p"
  />
);

export default Player1;
