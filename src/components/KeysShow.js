import React, { Component } from 'react';
import { Row } from 'reactstrap';
import upb from '../media/upb.png';
import downb from '../media/downb.png';
import leftb from '../media/leftb.png';
import rightb from '../media/rightb.png';

class KeysShow extends Component {
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
      <div className="controller">
        <Row>
          <img className="arrKeysU" src={upb} alt="up" id={`${touchKeyClass}${output2}U`} />
        </Row>
        <Row>
          <img className="arrKeys" src={leftb} alt="left" id={`${touchKeyClass}${output2}L`} />
          <img className="arrKeys" src={downb} alt="down" id={`${touchKeyClass}${output2}D`} />
          <img className="arrKeys" src={rightb} alt="right" id={`${touchKeyClass}${output2}R`} />
        </Row>
      </div>
    );
  }
}

export default KeysShow;
