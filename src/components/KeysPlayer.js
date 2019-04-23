/* eslint-disable react/jsx-no-bind */
import React, { Component } from 'react';
import Hotkeys from 'react-hot-keys';
import KeysShow from './KeysShow';
import '../css/Solo.css';

class KeysPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      output: ' ',
    };
  }

  onKeyUp(keyName, e, handle) {
    // console.log('test:onKeyUp', e, handle);
    this.setState({
      output: `Up${keyName}`,
    });
  }

  onKeyDown(keyName, e, handle) {
    // console.log('test:onKeyDown', keyName, e, handle);
    this.setState({
      output: `Down${keyName}`,
    });
  }

  handleChange = (val) => {
    const { touchKey } = this.props;
    touchKey(val);
  };

  render() {
    const {
      haut, gauche, bas, droite,
    } = this.props;
    const { output } = this.state;
    console.log(output, 'out');
    return (
      <div>
        <div>
          <Hotkeys
            keyName={haut}
            onKeyDown={this.onKeyDown.bind(this)}
            onKeyUp={this.onKeyUp.bind(this)}
          />
          <Hotkeys
            keyName={bas}
            onKeyDown={this.onKeyDown.bind(this)}
            onKeyUp={this.onKeyUp.bind(this)}
          />
          <Hotkeys
            keyName={droite}
            onKeyDown={this.onKeyDown.bind(this)}
            onKeyUp={this.onKeyUp.bind(this)}
          />
          <Hotkeys
            keyName={gauche}
            onKeyDown={this.onKeyDown.bind(this)}
            onKeyUp={this.onKeyUp.bind(this)}
          />
        </div>
        <div onChange={() => this.handleChange(output)}>
          <KeysShow output2={output} />
         {/* this.handleChange(output) */}
        </div>
      </div>
    );
  }
}

export default KeysPlayer;
