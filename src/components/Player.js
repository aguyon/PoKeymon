/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { Component } from 'react';
import ArrowKeysReact from 'arrow-keys-react';
import { Container, Row, Col } from 'reactstrap';
import AlerteResultat from './AlerteResultat';
import KeysPlayer from './KeysPlayer';
import ArrayToDo from './ArrayToDo';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Container>
          <div>
            <ArrayToDo />
          </div>
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
  }
}


export default Player;
