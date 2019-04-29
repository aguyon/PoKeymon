import React, { Component } from 'react';
import { Row } from 'reactstrap';
import upb from '../media/upb.png';
import downb from '../media/downb.png';
import leftb from '../media/leftb.png';
import rightb from '../media/rightb.png';
import pokeball from '../media/pokeball.svg';

class KeysShow1 extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const {
      output2, touchKeyClass,
    } = this.props;

    return (
      <div className="controller2">
        <div className="row justify-content-center">
          <img className="pokeballU" src={pokeball} alt="up" id={`${touchKeyClass}${output2}B`} />
        </div>
        <div className="row justify-content-center">
          <img className="DarrKeysU" src={upb} alt="up" id={`${touchKeyClass}${output2}U`} />
        </div>
        <Row>
          <img className="DarrKeys" src={leftb} alt="left" id={`${touchKeyClass}${output2}L`} />
          <img className="DarrKeys" src={downb} alt="down" id={`${touchKeyClass}${output2}D`} />
          <img className="DarrKeys" src={rightb} alt="right" id={`${touchKeyClass}${output2}R`} />
        </Row>
      </div>
    );
  }
}

export default KeysShow1;
