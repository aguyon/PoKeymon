
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../css/AlerteResultat.css';
// import bulbasaur from '../media/001-bulbasaur.svg';
// import PokemonCapture from './PokemonCapture';
import PokemonRareACapturer from './PokemonRareACapturer';


class AlerteResultat extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: true,
    };

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({ show: false });
  }

  render() {
    const { pokemonName, pokemon } = this.props;
    const { show } = this.state;
    return (
      <div>
        <Modal id="modalAlerte" show={show} onHide={this.handleClose}>
          <Modal.Header id="sasa" closeButton>
            <Modal.Title><p id="victory">Congratulations, Grogory!</p></Modal.Title>
          </Modal.Header>
          <Modal.Body id="modalBody">
            Woohoo,
            {' '}
            {pokemonName}
            {' '}
            joined your team!
            <div className="pokemonCap2">
              <PokemonRareACapturer index={pokemon} imageOnly />
            </div>
          </Modal.Body>
          <Modal.Footer id="modalFoot">
            <Button className="buttonModal" onClick={this.handleClose}>
              Close
            </Button>
            <Button className="buttonModal" onClick={this.handleClose}>
              Next game
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AlerteResultat;
