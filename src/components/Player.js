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
      keyResult: '',
      todoResult: '',
    };
  }

  touchKey = (val) => {
    this.setState({
      keyResult: val,
    });
  };

  touchTodo = (value) => {
    this.setState({
      todoResult: value,
    });
  };

  render() {
    const { keyResult, todoResult } = this.state;
    console.log(this.state, 'TR');
    console.log(todoResult, 'TDR');

    return (
      <div>
        <Container>
          <div>
            <ArrayToDo touchToDo={this.touchToDo} />
          </div>
          <div className="controller">
            <KeysPlayer
              haut="up"
              gauche="left"
              bas="down"
              droite="right"
              touchKey={this.touchKey}
            />
          </div>
        </Container>
      </div>
    );
  }
}


export default Player;
