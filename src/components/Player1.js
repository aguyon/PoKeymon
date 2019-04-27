import React from 'react';
import KeysPlayer1 from './KeysPlayer1';

const Player1 = ({ pokemon, pokemonName }) => (
  <KeysPlayer1
    pokemon={pokemon}
    pokemonName={pokemonName}
    haut="up"
    gauche="left"
    bas="down"
    droite="right"
  />
);

export default Player1;
