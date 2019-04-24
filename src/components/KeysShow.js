import React from 'react';
import { Container, Row } from 'reactstrap';
import upb from '../media/upb.png';
import downb from '../media/downb.png';
import leftb from '../media/leftb.png';
import rightb from '../media/rightb.png';

const KeysShow = ({ output2 }) => (
  <div>
    <Row>
        <img className="arrKeysU" src={upb} alt="up" id={`${output2}U`} />
      </Row>
    <Row>
        <img className="arrKeys" src={leftb} alt="left" id={`${output2}L`} />
        <img className="arrKeys" src={downb} alt="down" id={`${output2}D`} />
        <img className="arrKeys" src={rightb} alt="right" id={`${output2}R`} />
      </Row>
  </div>
);

export default KeysShow;
