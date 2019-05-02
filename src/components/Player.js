import React from 'react';
import KeysPlayer from './KeysPlayer';

const Player = ({
  pokemon, pokemonName, handlePokHide, showPok, newUser,
}) => (
  <KeysPlayer
    pokemon={pokemon}
    pokemonName={pokemonName}
    handlePokHide={handlePokHide}
    showPokemon={showPok}
    haut="up"
    gauche="left"
    bas="down"
    droite="right"
    newUser={newUser}
  />
);

export default Player;
