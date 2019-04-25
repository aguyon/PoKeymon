import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../css/AlerteResultat.css';


class AlerteDefaite extends React.Component {
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
            <Modal.Title><p id="victory">Oh no!</p></Modal.Title>
          </Modal.Header>
          <Modal.Body id="modalBody">
            You are late!!!
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

export default AlerteDefaite;
