/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';
import { Container } from 'reactstrap';
import KeysPlayer from './KeysPlayer';

const Player = () => (
  <div>
    <Container>
      <div className="controller">
        <KeysPlayer
          haut="up"
          gauche="left"
          bas="down"
          droite="right"
        />
      </div>
    </Container>
  </div>
);

export default Player;
