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
      touchKeyClass: 'arrKeys',
    };
  }

  isGood = () => {
    const { output2, toDoArrow } = this.props;
    if (output2 === toDoArrow) {
      this.setState({ touchKeyClass: 'ArrKeysGood' });
    } else {
      this.setState({ touchKeyClass: 'ArrKeysWrong' });
    }
  }

  render() {
    const { output2, toDoArrow } = this.props;
    const { touchKeyClass } = this.state;
    return (
      <div className="controller">
        <Row>
          <img className={`${touchKeyClass}U`} src={upb} alt="up" id={`${output2}U`} />
        </Row>
        <Row>
          <img className={touchKeyClass} src={leftb} alt="left" id={`${output2}L`} />
          <img className={touchKeyClass} src={downb} alt="down" id={`${output2}D`} />
          <img className={touchKeyClass} src={rightb} alt="right" id={`${output2}R`} />
        </Row>
      </div>
    );
  }
}

export default KeysShow;
