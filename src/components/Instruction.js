import React, { Component } from 'react';
import '../css/Dual.css';

class Instruction extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className="Instruction">
        <p className="TitreInstruction">
            Instruction
        </p>
        <div className="Player1">
          <p>
            Player 1
            <br />
          ⬆️  Z ⬇️  S
            <br />
          ⬅️  Q ➡️  D
            <br />
          ✴️ E
          </p>
        </div>
        <div className="Player2">
          <p>
            Player 2
            <br />
          ⬆️ O  ⬇️  L
            <br />
          ⬅️  K  ➡️  M
            <br />
          ✴️ P
          </p>
        </div>
      </div>
    );
  }
}

export default Instruction;
