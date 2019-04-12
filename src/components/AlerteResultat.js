
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../css/AlerteResultat.css';

class AlerteResultat extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: true,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }


  render() {
    const { show } = this.state;
    return (
      <div>
        <Modal id="modalAlerte" show={show} onHide={this.handleClose}>
          <Modal.Header id="sasa" closeButton>
            <Modal.Title>Congratulation</Modal.Title>
          </Modal.Header>
          <Modal.Body id="modalBody">Woohoo,  you win</Modal.Body>
          <Modal.Footer id="modalFoot">
            <Button className="buttonModal" onClick={this.handleClose}>
              Close
            </Button>
            <Button className="buttonModal" onClick={this.handleClose}>
              next game
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AlerteResultat;
