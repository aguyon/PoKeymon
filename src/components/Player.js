/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';
import KeysPlayer from './KeysPlayer';

const Player = () => (
  <div>
    <div className="gameplay">
      <KeysPlayer
        haut="up"
        gauche="left"
        bas="down"
        droite="right"
      />
    </div>
  </div>
);

export default Player;
