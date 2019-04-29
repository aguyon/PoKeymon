import React from 'react';
import KeysPlayer1 from './KeysPlayer1';

const Player1 = ({ pokemonRare, pokemonName }) => (
  <KeysPlayer1
    pokemon={pokemonRare}
    pokemonName={pokemonName}
    haut="up"
    gauche="left"
    bas="down"
    droite="right"
    attack="backspace"
  />
);

export default Player1;
