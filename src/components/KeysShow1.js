import React, { Component } from 'react';
import upb from '../media/upb.png';
import downb from '../media/downb.png';
import leftb from '../media/leftb.png';
import rightb from '../media/rightb.png';

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
          <img className="DarrKeysU" src={upb} alt="up" id={`${touchKeyClass}${output2}U`} />
        </div>
        <div className="row justify-content-center">
          <img className="DarrKeys" src={leftb} alt="left" id={`${touchKeyClass}${output2}L`} />
          <img className="DarrKeys" src={downb} alt="down" id={`${touchKeyClass}${output2}D`} />
          <img className="DarrKeys" src={rightb} alt="right" id={`${touchKeyClass}${output2}R`} />
        </div>
      </div>
    );
  }
}

export default KeysShow1;
