import React from 'react';
import KeysPlayer from './KeysPlayer';

const Player = ({ pokemon, pokemonName }) => (
  <KeysPlayer
    pokemon={pokemon}
    pokemonName={pokemonName}
    haut="up"
    gauche="left"
    bas="down"
    droite="right"
  />
);

export default Player;
